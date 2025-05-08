import { BadRequestError } from "../../../utils/errors/bad-request.error.js"

export const handleErrors = (error, req, res, next) => {
    console.log(error)

    if (error instanceof BadRequestError) {
        return res.status(error.code).json({
            message: error.message
        });
    }
}