import e from "express";
import { wrapHandler } from "../../utils/wrap-handler.js";
import { SearchController } from "../../modules/search/search.controller.js";
import { privateRoute } from "../middlewares/auth/private-route.js";

export const SearchRouter = e.Router();

SearchRouter.get('/search/:fromPlaceId/:toPlaceId/:departureTime', privateRoute, wrapHandler(SearchController.search))
SearchRouter.post('/selection', privateRoute, wrapHandler(SearchController.save))