const { StatusCodes } = require('http-status-codes');

const invalidData = (status, message) => ({
  status,
  message,
});

const nonExistentUser = {
  status: StatusCodes.BAD_REQUEST,
  message: 'Dados incorretos',
};

const alreadyExists = (message) => ({
  status: StatusCodes.CONFLICT,
  message,
});

const invalidAttendantId = {
  status: StatusCodes.NOT_FOUND,
  message: 'O atendente não existe',
};

module.exports = {
  invalidData,
  nonExistentUser,
  alreadyExists,
  invalidAttendantId,
};