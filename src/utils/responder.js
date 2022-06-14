
const Responder = {

  sendResponse: (response, statusCode, status, data, message) => {
    const returnData = {
        code: statusCode,
        status: status,
        message: message,
        data: data
    };
    response.status(statusCode).json(returnData);
  }
};

module.exports = Responder;
