import { v6 } from "uuid";
import { BadRequestError } from "../../utils/errors/bad-request.error.js";
import { RoleEntity } from "../role/role.entity.js";
import { UserEntity } from "../user/user.entity.js";
import bcrypt from 'bcrypt'

class AuthService {

    async login(username, password) {
        if (!username || !password)
            throw new BadRequestError({
                message: 'invalid login',
                code: 401
            })

        const user = await UserEntity.findOne({
            where: {
                username
            },
            include: [{
                model: RoleEntity
            }]
        })

        if (!user)
            throw new BadRequestError({
                message: 'invalid login',
                code: 401
            })

        const isMatchPassword = await bcrypt.compare(password, user.password);

        if (!isMatchPassword)
            throw new BadRequestError({
                message: 'invalid login',
                code: 401
            })

        console.log(isMatchPassword)

        const token = v6()

        user.token = token;
        await user.save();

        return {
            token,
            role: user.role.name
        }
    }

    async logout(token) {
        const user = await UserEntity.findOne({
            where: {
                token
            }
        })

        if (!user)
            throw new BadRequestError({
                message: 'Unauthorized user',
                code: 401
            });

        user.token = '';
        await user.save();

        return {
            message: 'logout success',
        }
    }

}

export const authService = new AuthService();