export const handleSessionData = (req, res, next) => {
    res.locals.badRequestMessage = req.session.badRequestMessage;
    delete req.session.badRequestMessage;

    res.locals.successMessage = req.session.successMessage;
    delete req.session.successMessage;

    res.locals.violationError = req.session.violationError;
    delete req.session.violationError;


    return next();
}