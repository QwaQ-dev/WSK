export class BadRequestError extends Error {
    constructor({ message, code }) {
        super(message)

        this.code = code;
    }
}