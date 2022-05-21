const createError = require('http-errors');
const responder = require('./../src/utils/responder');


module.exports = (app) =>{
    // catch 404 and forward to error handler
    app.use(function (req, res, next) {
        next(createError(404));
    });
    
    // error handler
    app.use(function (err, req, res, next) {
        // render the error page
        responder.sendResponse(res, err.status || 500, "error", null, err.message || "Server error!!! Please try again later.");
        
    });
}