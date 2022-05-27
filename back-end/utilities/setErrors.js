const { StatusCodes } = require('http-status-codes');

const invalidData = (status, message) => ({
  status,
  message,
});

const nonExistentUser = {
  status: StatusCodes.BAD_REQUEST,
  message: 'Dados incorretos',
};

module.exports = {
  invalidData,
  nonExistentUser,
};