export const UserAnswerController =  {
    page: async (req, res) => {
        return res.render('pages/answers/list.ejs', {
            userAnswers: [],
            surveyId: req.params.surveyId
        });
    }
}