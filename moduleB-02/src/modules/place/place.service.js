import { Sequelize } from "sequelize";
import { PlaceEntity } from "./place.entity.js";
import { HistoryEntity } from "../history/history.entity.js";
import { BadRequestError } from "../../utils/errors/bad-request.error.js";
import { createPlaceScheme, updatePlaceScheme } from "./place.scheme.js";
import fs from 'fs'
import path from "path";
import { dirname } from "../../server/server.js";

class PlaceService {

    async getPlaces() {
        const places = await PlaceEntity.findAll({
            attributes: {
                include: [
                    [
                        Sequelize.fn('COALESCE', Sequelize.fn('SUM', Sequelize.col('histories.visits_count')), 0),
                        'totalVisits'
                    ]
                ]
            },
            include: [{
                model: HistoryEntity,
                attributes: []
            }],
            group: ['id'],
            order: [[Sequelize.col('totalVisits'), 'DESC']]
        })

        return {
            places: places.map(place => {
                return {
                    id: place.id,
                    name: place.name,
                    type: place.type,
                    latitude: place.latitude,
                    longitude: place.longitude,
                    x: 1,
                    y: 1,
                    image_path: `http://localhost:9000/images/${place.imagePath}`,
                    description: place.description,
                    open_time: place.openTime,
                    close_time: place.closeTime
                }
            })
        }
    }

    async getPlace(placeId) {
        if (!placeId)
            throw new BadRequestError({
                code: 400,
                message: 'Place id required'
            })

        const place = await PlaceEntity.findOne({
            where: {
                id: placeId
            },
            attributes: {
                include: [
                    [
                        Sequelize.fn('COALESCE', Sequelize.fn('SUM', Sequelize.col('histories.visits_count')), 0),
                        'totalVisits'
                    ]
                ]
            },
            include: [{
                model: HistoryEntity,
                attributes: []
            }],
            group: ['id'],
            order: [[Sequelize.col('totalVisits'), 'DESC']]
        });

        if (!place)
            throw new BadRequestError({
                message: 'Place not found',
                code: 404
            })

        return {
            name: place.name,
            type: place.type,
            x: 1,
            y: 1,
            image_path: `http://localhost:9000/images/${place.imagePath}`,
            open_time: place.openTime,
            close_time: place.closeTime,
            description: place.description,
            num_searches: place.totalVisits
        }
    }

    async createPlace(data) {
        try {
            await createPlaceScheme.validate(data);
        } catch (error) {
            console.log(error);
            throw new BadRequestError({
                code: 422,
                message: 'Data cannot be processed'
            })
        }

        const [place, isCreatedPlace] = await PlaceEntity.findOrCreate({
            where: {
                name: data.name
            },
            defaults: {
                type: data.type,
                x: 1,
                y: 1,
                latitude: data.latitude,
                longitude: data.longitude,
                imagePath: data.image.filename,
                openTime: data.open_time,
                closeTime: data.closeTime,
                description: data.description,
            }
        })

        if (!isCreatedPlace)
            throw new BadRequestError({
                code: 422,
                message: 'Data cannot be processed'
            });

        return {
            message: 'create success'
        }
    }

    async updatePlace(data) {
        console.log(data)
        try {
            await updatePlaceScheme.validate(data)
        } catch (error) {
            console.log(error)
            throw new BadRequestError({
                message: 'Data cannot be updated',
                code: 400

            })
        }

        const place = await PlaceEntity.findOne({
            where: {
                id: data.placeId
            }
        })

        if (!place)
            throw new BadRequestError({
                message: 'Data cannot be updated',
                code: 400
            });

        try {
            place.name = data?.name || place.name;
            place.type = data?.type;
            place.latitude = data?.type || place.latitude;
            place.longitude = data?.type || place.longitude;
            place.imagePath = data?.image?.filename || place.imagePath;
            place.openTime = data?.open_time || place.openTime;
            place.closeTime = data?.close_time || place.closeTime;
            place.description = data?.description || place.description;
            await place.save();
        } catch (error) {
            console.log(error)
            throw new BadRequestError({
                message: 'Data cannot be updated',
                code: 400
            });
        }

        return {
            message: 'update success'
        }
    }

    async deletePlace(placeId) {
        if (!placeId)
            throw new BadRequestError({
                message: 'Data cannot be deleted',
                code: 400
            });

        const place = await PlaceEntity.findOne({
            where: {
                id: placeId
            }
        })

        if (!place)
            throw new BadRequestError({
                message: 'Data cannot be deleted',
                code: 400
            });

        try {
            fs.unlinkSync(path.join(dirname, "images", place.imagePath));
        } catch (error) {
            console.log(error)
        }

        await place.destroy();

        return {
            message: 'delete success'
        }
    }

}

export const placeService = new PlaceService();