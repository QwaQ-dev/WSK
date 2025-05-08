import e from "express";
import { wrapHandler } from "../../utils/wrap-handler.js";
import { ScheduleController } from "../../modules/schedule/schedule.controller.js";
import { privateRoute } from "../middlewares/auth/private-route.js";

export const ScheduleRouter = e.Router();

ScheduleRouter.get('/', privateRoute, wrapHandler(ScheduleController.getSchedules))

ScheduleRouter.post('/:scheduleId', async (req, res, next) => privateRoute(req, res, next, 'ADMIN'), wrapHandler(ScheduleController.createSchedule))
ScheduleRouter.put('/:scheduleId', async (req, res, next) => privateRoute(req, res, next, 'ADMIN'), wrapHandler(ScheduleController.updateSchedule))
ScheduleRouter.patch('/:scheduleId', async (req, res, next) => privateRoute(req, res, next, 'ADMIN'), wrapHandler(ScheduleController.updateSchedule))
ScheduleRouter.delete('/:scheduleId', async (req, res, next) => privateRoute(req, res, next, 'ADMIN'), wrapHandler(ScheduleController.deleteSchedule))