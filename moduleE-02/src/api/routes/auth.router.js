import e from "express";
import { privateRoute } from "../middlewares/auth/private-route.js";
import { wrapHandler } from "../../utils/wrap-handler.js";
import { AuthController } from "../../modules/auth/auth.controller.js";

export const AuthRouter = e.Router();

AuthRouter.use(privateRoute)

AuthRouter.get('/login', wrapHandler(AuthController.loginPage))
AuthRouter.post('/login', wrapHandler(AuthController.login))

AuthRouter.post('/logout', wrapHandler(AuthController.logout))