import e from "express";
import { wrapHandler } from "../../utils/wrap-handler.js";
import { PlaceController } from "../../modules/place/place.controller.js";
import { privateRoute } from "../middlewares/auth/private-route.js";
import multer from "multer";
import path from "path";

export const PlaceRouter = e.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/')
    },
    filename: (req, file, cb) => {
        console.log(file)
        cb(null, `${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({
    storage
})

PlaceRouter.get('/', privateRoute, wrapHandler(PlaceController.getPlaces));
PlaceRouter.get('/:placeId', privateRoute, wrapHandler(PlaceController.getPlace));

PlaceRouter.post('/', async (req, res, next) => privateRoute(req, res, next, 'ADMIN'), upload.single('image'), wrapHandler(PlaceController.createPlace));
PlaceRouter.put('/:placeId', async (req, res, next) => privateRoute(req, res, next, 'ADMIN'), upload.single('image'), wrapHandler(PlaceController.updatePlace));
PlaceRouter.post('/:placeId', async (req, res, next) => privateRoute(req, res, next, 'ADMIN'), upload.single('image'), wrapHandler(PlaceController.updatePlace));
PlaceRouter.patch('/:placeId', async (req, res, next) => privateRoute(req, res, next, 'ADMIN'), upload.single('image'), wrapHandler(PlaceController.updatePlace));

PlaceRouter.delete('/:placeId', async (req, res, next) => privateRoute(req, res, next, 'ADMIN'), wrapHandler(PlaceController.deletePlace));