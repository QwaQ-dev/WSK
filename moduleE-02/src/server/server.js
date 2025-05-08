import cors from 'cors'
import e from 'express'
import session from 'express-session'
import { SERVER_CONFIG } from '../config/server.config.js';
import { handleSessionData } from '../api/middlewares/handlers/handle-session-data.js';
import { handleErrors } from '../api/middlewares/handlers/handle-errors.js';
import { fileURLToPath } from 'url';
import path from 'path';
import { AuthRouter } from '../api/routes/auth.router.js';
import { CategoryRouter } from '../api/routes/category.router.js';
import { SurveyRouter } from '../api/routes/question.router.js';

export const SERVER = e();

SERVER.use(cors());

SERVER.use(e.urlencoded({
    extended: true
}))
SERVER.use(e.json());

SERVER.use(session({
    secret: SERVER_CONFIG.SERVER_SESSION_SECRET_KEY,
    resave: false,
    saveUninitialized: true
}))

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

SERVER.set('view engine', 'ejs');
SERVER.set('views', path.join(dirname, "views"));

SERVER.use(e.static(path.join(dirname, "public")));

SERVER.use(handleSessionData)

SERVER.use('/admin/auth', AuthRouter)
SERVER.use('/admin/categories', CategoryRouter)
SERVER.use('/admin/surveys', SurveyRouter)

SERVER.use(handleErrors)