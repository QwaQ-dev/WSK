import { scheduleService } from "./schedule.service.js"

export const ScheduleController = {
    getSchedules: async (req, res) => {
        const result = await scheduleService.getSchedules();

        return res.status(200).json(result);
    },
    createSchedule: async (req, res) => {
        const result = await scheduleService.createSchedule(req.body);

        return res.status(200).json(result);
    },
    updateSchedule: async (req, res) => {
        console.log(req.body)
        const result = await scheduleService.updateSchedule({
            ...req.body,
            scheduleId: req.params.scheduleId,
        })

        return res.status(200).json(result);
    },
    deleteSchedule: async (req, res) => {
        const result = await scheduleService.deleteSchedule(req.params.scheduleId);

        return res.status(200).json(result);
    }
}