import { questionService } from "./question.service.js"

export const QuestionController = {
    editQuestion: async (req, res) => {
        await questionService.editQuestion(req.params, req.body);

        req.session.successMessage = 'Вопрос успешно обновлен!'

        return res.redirect(`/admin/surveys/${req.params.surveyId}`);
    } 
}