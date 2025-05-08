import e from "express";
import { wrapHandler } from "../../utils/wrap-handler.js";
import { AuthController } from "../../modules/auth/auth.controller.js";
import { privateRoute } from "../middlewares/auth/private-route.js";

export const AuthRouter = e.Router();

AuthRouter.post('/login', wrapHandler(AuthController.login))
AuthRouter.get('/logout', privateRoute, wrapHandler(AuthController.logout))