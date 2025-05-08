import { BadRequestError } from "../../utils/errors/bad-request.error.js";
import crypto from 'crypto'
import { ScheduleChoiceEntity } from "../schedule-choice/schedule-choice.entity.js";
import { ScheduleEntity } from "../schedule/schedule.entity.js";
import { Op } from "sequelize";
import moment from "moment";
import { PlaceEntity } from "../place/place.entity.js";
import { saveScheme } from "./search.scheme.js";
import { ScheduleChoiceSegmentEntity } from "../schedule-choice-segment/schedule-choice-segment.entity.js";

class SearchService {

    async search(fromPlaceId, toPlaceId, departureTime) {
        if (!fromPlaceId || !toPlaceId)
            throw new BadRequestError({
                message: 'All fields required',
                code: 400
            })

        const routes = await this.getBestRoutes(fromPlaceId, toPlaceId, departureTime || moment.utc(new Date(), 'HH:mm:ss'));

        const parsedRoutes = await Promise.all(routes.map(async route => {
            const scheduleIds = route.schedules.map(schedule => schedule.id);

            const choice = await this._getScheduleChoice(fromPlaceId, toPlaceId, scheduleIds);

            return {
                num_searches: choice.selectsCount || 0,
                schedules: route.schedules
            }
        }));

        return {
            routes: parsedRoutes
        }
    }

    async saveSearch(data) {
        try {
            await saveScheme.validate(data);
        } catch (error) {
            throw new BadRequestError({
                message: 'Data cannot be processed',
                code: 400
            })
        }

        const fromPlaceId = await PlaceEntity.findOne({
            where: {
                id: data.from_place_id
            },
            attributes: ['id'],
            raw: true
        })

        if (!fromPlaceId)
            throw new BadRequestError({
                message: 'Data cannot be processed',
                code: 422
            })

        const toPlaceId = await PlaceEntity.findOne({
            where: {
                id: data.to_place_id
            },
            attributes: ['id'],
            raw: true
        })

        if (!toPlaceId)
            throw new BadRequestError({
                message: 'Data cannot be processed',
                code: 422
            })

        const hash = this.generateSegmentHash(data.fromPlaceId, data.toPlaceId, data.schedule_ids);

        const choice = await ScheduleChoiceEntity.findOne({
            where: {
                segmentsHash: hash
            }
        })

        if (choice) {
            choice.selectsCount++;
            await choice.save();
        } else {
            const choice = await ScheduleChoiceEntity.create({
                fromPlaceId: data.from_place_id,
                toPlaceId: data.to_place_id,
                segmentsHash: hash
            })

            const segments = data.schedule_ids.map((scheduleId, index) => ({
                order: index + 1,
                scheduleId,
                scheduleChoiceId: choice.id
            }))

            await ScheduleChoiceSegmentEntity.bulkCreate(segments);
        }

        return {
            message: 'create success'
        }
    }

    async getBestRoutes(fromPlaceId, toPlaceId, departureTime) {
        const queue = [{
            placeId: fromPlaceId,
            endTime: departureTime,
            totalTime: 0,
            schedules: []
        }]

        const routes = [];
        const visitsPath = new Map();

        while (queue.length > 0) {
            queue.sort((a, b) => a.totalTime - b.totalTime);

            const { placeId, endTime, totalTime, schedules } = queue.shift();

            if (placeId === toPlaceId) {
                routes.push({
                    schedules,
                    totalTime
                })
                continue;
            }

            if (visitsPath.has(placeId) && visitsPath.get(placeId) <= totalTime) continue;

            visitsPath.set(placeId, totalTime);

            const findSchedules = await ScheduleEntity.findAll({
                where: {
                    departureTime: {
                        [Op.gte]: endTime
                    },
                    fromPlaceId: placeId
                },
                include: [{
                    model: PlaceEntity,
                    as: 'fromPlace'
                }, {
                    model: PlaceEntity,
                    as: 'toPlace'
                }]
            })

            findSchedules.forEach(schedule => {
                const nextEndPlaceId = schedule.toPlaceId;
                const nextEndTime = schedule.arrivalTime;

                const time1 = moment.utc(schedule.departureTime, 'HH:mm:ss');
                const time2 = moment.utc(schedule.arrivalTime, 'HH:mm:ss');

                const duration = moment.duration(time2.diff(time1));

                queue.push({
                    placeId: nextEndPlaceId,
                    endTime: nextEndTime,
                    totalTime: totalTime + duration,
                    schedules: [...schedules, {
                        id: schedule.id,
                        line: schedule.line,
                        departure_time: schedule.departureTime,
                        arrival_time: schedule.arrivalTime,
                        travel_time: moment.utc(duration.asMilliseconds()).format('HH:mm:ss'),
                        from_place: {
                            id: schedule.fromPlace.id,
                            name: schedule.fromPlace.name,
                            type: schedule.fromPlace.type,
                            longitude: schedule.fromPlace.longitude,
                            latitude: schedule.fromPlace.latitude,
                            x: 1,
                            y: 1,
                            open_time: schedule.fromPlace.openTime,
                            close_time: schedule.fromPlace.closeTime,
                            description: schedule.fromPlace.description,
                            image_path: `http://localhost:9000/images/${schedule.fromPlace.imagePath}`
                        },
                        to_place: {
                            id: schedule.toPlace.id,
                            name: schedule.toPlace.name,
                            type: schedule.toPlace.type,
                            longitude: schedule.toPlace.longitude,
                            latitude: schedule.toPlace.latitude,
                            x: 1,
                            y: 1,
                            open_time: schedule.toPlace.openTime,
                            close_time: schedule.toPlace.closeTime,
                            description: schedule.toPlace.description,
                            image_path: `http://localhost:9000/images/${schedule.toPlace.imagePath}`
                        }
                    }]
                });
            });
        }

        routes.sort((a, b) => a.totalTime - b.totalTime);

        return routes.slice(0, 5);
    }

    generateSegmentHash(fromPlaceId, toPlaceId, scheduleIds) {
        const str = `${fromPlaceId}-${toPlaceId}-${scheduleIds.join('-')}`;

        return crypto.createHash('md5').update(str).digest('hex');
    }

    async _getScheduleChoice(fromPlaceId, toPlaceId, scheduleIds) {
        const hash = this.generateSegmentHash(fromPlaceId, toPlaceId, scheduleIds);

        const choice = await ScheduleChoiceEntity.findOne({
            where: {
                segmentsHash: hash
            }
        })

        return choice;
    }

}

export const searchService = new SearchService();