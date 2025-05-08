import { authService } from "./auth.service.js"

export const AuthController = {
    loginPage: async (req, res) => {
        return res.render('pages/auth/login.ejs')
    },
    login: async (req, res) => {
        await authService.login(req);

        return res.redirect('/admin/categories');
    },
    logout: async (req, res) => {
        await authService.logout(req, res);
    }
}