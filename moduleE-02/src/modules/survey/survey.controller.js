import { categoryService } from "../category/category.service.js";
import { surveyService } from "./survey.service.js"

export const SurveyController = {
    surveysPage: async (req, res) => {
        const surveys = await surveyService.getSurveys();

        return res.render('pages/surveys/list.ejs', {
            surveys
        })
    },
    surveyPage: async (req, res) => {
        const survey = await surveyService.getSurvey(req.params.surveyId);
        const categories = await categoryService.getCategories();

        return res.render('pages/surveys/index.ejs', {
            survey,
            categories
        })
    },
    createSurveyPage: async (req, res) => {
        const categories = await categoryService.getCategories();
        const cacheSurvey = req.session.cacheSurvey || {
            questions: ['', ''],
            'answers-0': ['', '', '', ''],
            'answers-1': ['', '', '', ''],
            'type-0': 'one',
            'type-1': 'one'
        }

        return res.render('pages/surveys/create.ejs', {
            cacheSurvey,
            categories
        })
    },
    createSurvey: async (req, res) => {
        await surveyService.createSurvey(req);

        req.session.successMessage = 'Опрос успешно создан!';

        return res.redirect('/admin/surveys');
    },
    editSurvey: async (req, res) => {
        await surveyService.editSurvey(req.params.surveyId, req.body);

        req.session.successMessage = 'Опрос успешно обновлен!';

        return res.redirect('/admin/surveys');
    },
    deleteSurvey: async (req, res) => {
        await surveyService.deleteSurvey(req.params.surveyId, req.body);

        req.session.successMessage = 'Опрос успешно удален!';

        return res.redirect('/admin/surveys');
    },
    deletedSurveysPage: async (req, res) => {
        const surveys = await surveyService.getDeletedSurveys();

        return res.render('pages/surveys/deleted.ejs', {
            surveys
        })
    }
}