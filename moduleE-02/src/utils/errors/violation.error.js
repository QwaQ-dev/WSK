export class ViolationError extends Error {
    constructor({ errors, redirect_url }) {
        super("vioaltion error");

        this.redirect_url = redirect_url;
        this.errors = errors;
    }
}