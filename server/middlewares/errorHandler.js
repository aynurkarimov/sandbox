const { CustomError } = require('../utils/customError');
const { StatusCodes } = require('http-status-codes');

const mwErrorHandler = (error, req, res, next) => {
  if (error instanceof CustomError) {
    return res.status(error.statusCode).json({ status: error.statusCode, message: error.message });
  }

  return res.status(StatusCodes.BAD_REQUEST).json({ status: 'error', message: 'Something went wrong...' });
}

module.exports = mwErrorHandler;