import { linkService } from "./link.service.js"

export const LinkController = {
    getLinks: async (req, res) => {
        const links = await linkService.getLinks(req.params.surveyId);

        return res.render('pages/links/list.ejs', {
            links
        })
    },
    createLink: async (req, res) => {
        const code = await linkService.createLink(req.params.surveyId);

        req.session.successMessage = `Ссылка создана! Код: ${code}`;

        return res.redirect(`/admin/surveys/${req.params.surveyId}`);
    },
    deleteLink: async (req, res) => {
        await linkService.deleteLink(req.params.id);

        req.session.successMessage = 'Успешно удален!';

        return res.redirect(`/admin/surveys/${req.params.surveyId}`);
    }
}