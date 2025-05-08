import e from "express";
import cors from 'cors';
import session from 'express-session'
import { SERVER_CONFIG } from "../config/server.config.js";
import { fileURLToPath } from "url";
import path from "path";
import { handleErrors } from "../api/middlewares/handlers/handle-errors.js";
import { PlaceRouter } from "../api/routes/place.router.js";
import { ScheduleRouter } from "../api/routes/schedule.router.js";
import { SearchRouter } from "../api/routes/search.router.js";
import { AuthRouter } from "../api/routes/auth.router.js";

export const SERVER = e();

SERVER.use(cors());

SERVER.use(e.urlencoded({
    extended: true
}))
SERVER.use(e.json());

SERVER.use(session({
    secret: SERVER_CONFIG.SESSION_SECRET_KEY,
    resave: false,
    saveUninitialized: true
}));

const filename = fileURLToPath(import.meta.url);
export const dirname = path.dirname(filename)

SERVER.use(e.static(path.join(dirname, "images")));

SERVER.use('/api/v1/auth', AuthRouter);
SERVER.use('/api/v1/place', PlaceRouter);
SERVER.use('/api/v1/schedule', ScheduleRouter);
SERVER.use('/api/v1/route', SearchRouter);

SERVER.use(handleErrors);