import { BadRequestError } from "../../utils/errors/bad-request.error.js";
import { PlaceEntity } from "../place/place.entity.js";
import { ScheduleEntity } from "./schedule.entity.js";
import { createScheduleScheme, updateScheduleScheme } from "./schedule.scheme.js";

class ScheduleService {

    async getSchedules() {
        const schedules = await ScheduleEntity.findAll({
            include: [{
                model: PlaceEntity,
                as: 'fromPlace',
            }, {
                model: PlaceEntity,
                as: 'toPlace',
            }]
        });

        return {
            schedules: schedules.map(schedule => ({
                line: schedule.line,
                from_place: {
                    name: schedule.fromPlace.name
                },
                to_place: {
                    name: schedule.toPlace.name
                },
                departure_time: schedule.departureTime,
                arrival_time: schedule.arrivalTime,
                distance: schedule.distance,
                speed: schedule.speed,
                status: schedule.status
            }))
        }
    }

    async createSchedule(data) {
        console.log(data)
        try {
            await createScheduleScheme.validate(data);
        } catch (error) {
            console.log(error)
            throw new BadRequestError({
                message: 'Data cannot be processed',
                code: 422
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

        try {
            const schedule = await ScheduleEntity.create({
                line: data.line,
                fromPlaceId: data.from_place_id,
                toPlaceId: data.to_place_id,
                departureTime: data.departure_time,
                arrivalTime: data.arrival_time,
                distance: data.distance,
                speed: data.speed,
                status: data.status
            });
        } catch (error) {
            throw new BadRequestError({
                message: 'Data cannot be processed',
                code: 422
            })
        }

        return {
            message: 'create success'
        }
    }

    async updateSchedule(data) {
        console.log(data)
        try {
            await updateScheduleScheme.validate(data);
        } catch (error) {
            throw new BadRequestError({
                code: 400,
                message: 'Data cannot be updated'
            })
        }

        const schedule = await ScheduleEntity.findOne({
            where: {
                id: data.scheduleId
            },
        })

        if (!schedule)
            throw new BadRequestError({
                code: 400,
                message: 'Data cannot be updated'
            });

        if (data.from_place_id) {
            const fromPlaceId = await PlaceEntity.findOne({
                where: {
                    id: data.from_place_id
                },
                attributes: ['id'],
                raw: true
            })

            if (!fromPlaceId)
                throw new BadRequestError({
                    code: 400,
                    message: 'Data cannot be updated'
                });
        }

        if (data.to_place_id) {
            const toPlaceId = await PlaceEntity.findOne({
                where: {
                    id: data.to_place_id
                },
                attributes: ['id'],
                raw: true
            })

            if (!toPlaceId)
                throw new BadRequestError({
                    code: 400,
                    message: 'Data cannot be updated'
                });
        }

        try {
            schedule.line = data?.line || schedule.line;
            schedule.toPlaceId = data?.to_place_id || schedule.toPlaceId;
            schedule.fromPlaceId = data?.from_place_id || schedule.fromPlaceId;
            schedule.departureTime = data?.departure_time || schedule.departureTime;
            schedule.arrivalTime = data?.arrival_time || schedule.arrivalTime;
            schedule.distance = data?.distance || schedule.distance;
            schedule.speed = data?.speed || schedule.speed;

            await schedule.save();
        } catch (error) {
            throw new BadRequestError({
                code: 400,
                message: 'Data cannot be updated'
            });
        }

        return {
            message: 'update success'
        }
    }

    async deleteSchedule(scheduleId) {
        if (!scheduleId)
            throw new BadRequestError({
                code: 400,
                message: 'Schedule id required'
            });

        const schedule = await ScheduleEntity.findOne({
            where: {
                id: scheduleId
            },
            attributes: ['id']
        })

        if (!schedule)
            throw new BadRequestError({
                message: 'Schedule not found',
                code: 400
            })

        await schedule.destroy();

        return {
            message: 'delete success'
        }
    }

}

export const scheduleService = new ScheduleService();