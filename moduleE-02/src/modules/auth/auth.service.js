import { BadRequestError } from "../../utils/errors/bad-request.error.js";
import { ViolationError } from "../../utils/errors/violation.error.js";
import { AdminEntity } from "../admin/admin.entity.js";
import { loginScheme } from "./auth.scheme.js";
import bcrypt from 'bcrypt';

class AuthService {


    async login(request) {
        const data = request.body;

        const errors = {};

        try {
            await loginScheme.validate(data, {
                abortEarly: false
            })
        } catch (error) {
            error.inner.forEach(inner => {
                errors[inner.path] = inner.message;
            })
        }

        if (Object.entries(errors).length > 0)
            throw new ViolationError({

                errors,
                redirect_url: '/admin/auth/login'
            })

        const admin = await AdminEntity.findOne({
            where: {
                username: data.username
            }
        })

        if (!admin)
            throw new BadRequestError({
                message: "Username or password invalid",
                redirect_url: '/admin/auth/login'
            })

        const isMatchedPassword = await bcrypt.compare(data.password, admin.password);

        if (!isMatchedPassword)
            throw new BadRequestError({
                message: "Username or password invalid",
                redirect_url: '/admin/auth/login'
            })

        request.session.admin = admin;

        return;
    }

    async logout(req, res) {
        req.session.destroy(err => {
            res.clearCookie('connect.sid');
            res.redirect('/admin/auth/login')
        })
    }

}

export const authService = new AuthService();