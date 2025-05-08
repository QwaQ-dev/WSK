import { wrapHandler } from "../../../utils/wrap-handler.js";

export const privateRoute = wrapHandler(async (req, res, next) => {
    if (!req.session.admin && req.path !== '/login') return res.redirect('/admin/auth/login');
    if (req.session.admin && req.path === '/login') return res.redirect('/admin/categories');

    return next();
})