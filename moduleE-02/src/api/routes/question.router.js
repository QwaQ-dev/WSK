import e from "express";
import { privateRoute } from "../middlewares/auth/private-route.js";
import { wrapHandler } from "../../utils/wrap-handler.js";
import { SurveyController } from "../../modules/survey/survey.controller.js";
import { QuestionController } from "../../modules/question/question.controller.js";
import { LinkController } from "../../modules/link/link.controller.js";
import { UserAnswerController } from "../../modules/user-answer/user-answer.controller.js";

export const SurveyRouter = e.Router();

SurveyRouter.use(privateRoute)

SurveyRouter.get('/', wrapHandler(SurveyController.surveysPage))
SurveyRouter.get('/deleted', wrapHandler(SurveyController.deletedSurveysPage))

SurveyRouter.post('/:surveyId/edit', wrapHandler(SurveyController.editSurvey))
SurveyRouter.post('/:surveyId/delete', wrapHandler(SurveyController.deleteSurvey))

SurveyRouter.post('/create', wrapHandler(SurveyController.createSurvey))
SurveyRouter.get('/create', wrapHandler(SurveyController.createSurveyPage))

SurveyRouter.get('/:surveyId', wrapHandler(SurveyController.surveyPage))

SurveyRouter.post(`/:surveyId/questions/:questionId`, wrapHandler(QuestionController.editQuestion));

SurveyRouter.get(`/:surveyId/links`, wrapHandler(LinkController.getLinks));
SurveyRouter.post(`/:surveyId/links`, wrapHandler(LinkController.createLink));
SurveyRouter.post(`/:surveyId/links/:id/delete`, wrapHandler(LinkController.deleteLink));

SurveyRouter.get(`/:surveyId/answers`, wrapHandler(UserAnswerController.page));
