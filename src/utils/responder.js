
let Responder = {

  sendResponse: (response, statusCode, status, data, message) => {
    let returnData = {
        code: statusCode,
        status: status,
        message: message,
        data: data
    };
    response.status(statusCode).json(returnData);
  }
};

module.exports = Responder;
