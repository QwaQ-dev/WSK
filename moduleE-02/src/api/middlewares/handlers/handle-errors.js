import { BadRequestError } from "../../../utils/errors/bad-request.error.js"
import { ViolationError } from "../../../utils/errors/violation.error.js";

export const handleErrors = (error, req, res, next) => {
    console.log(error)

    if (error instanceof BadRequestError) {
        req.session.badRequestMessage = error.message;

        return res.redirect(error.redirect_url)
    } else if (error instanceof ViolationError) {
        req.session.violationError = error.errors;

        return res.redirect(error.redirect_url);
    }

    req.session.destroy(err => {
        res.clearCookie('connect.sid');
        res.redirect('/admin/auth/login');
    });
}