import { placeService } from "./place.service.js"

export const PlaceController = {
    getPlaces: async (req, res) => {
        const result = await placeService.getPlaces();

        return res.status(200).json(result);
    },
    getPlace: async (req, res) => {
        const result = await placeService.getPlace(req.params.placeId);

        return res.status(200).json(result);
    },
    createPlace: async (req, res) => {
        const result = await placeService.createPlace({
            ...req.body,
            image: req.file
        })

        return res.status(200).json(result);
    },
    updatePlace: async (req, res) => {
        const result = await placeService.updatePlace({
            ...req.body,
            image: req.file,
            placeId: req.params.placeId
        });

        return res.status(200).json(result);
    },
    deletePlace: async (req, res) => {
        const result = await placeService.deletePlace(req.params.placeId);

        return res.status(200).json(result);
    }
}