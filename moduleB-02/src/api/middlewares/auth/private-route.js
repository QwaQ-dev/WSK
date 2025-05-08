import { RoleEntity } from "../../../modules/role/role.entity.js";
import { UserEntity } from "../../../modules/user/user.entity.js";
import { BadRequestError } from "../../../utils/errors/bad-request.error.js";
import { wrapHandler } from "../../../utils/wrap-handler.js";

export const privateRoute = wrapHandler(async (req, res, next, role = 'USER') => {
    const header = req.headers['authorization'];

    if (!header)
        throw new BadRequestError({
            message: 'Unauthorized user',
            code: 401
        })

    const [type, token] = header.split(' ');

    if (!type || (type.toLowerCase() !== 'bearer') || !token)
        throw new BadRequestError({
            message: 'Unauthorized user',
            code: 401
        })

    const user = await UserEntity.findOne({
        where: {
            token
        },
        include: [{
            model: RoleEntity,
        }]
    })

    if (!user)
        throw new BadRequestError({
            message: 'Unauthorized user',
            code: 401
        })

    if (role === 'ADMIN' && user.role.name === 'USER') throw new BadRequestError({
        message: 'Unauthorized user',
        code: 401
    })

    req.userToken = user.token;

    return next();
})