const { StatusCodes } = require('http-status-codes');
const Models = require('../../models');
const { invalidData } = require('../../utilities/setErrors');
const { validateLogin } = require('./validations');

module.exports = async (user) => {
  const validateError = validateLogin(user).error;
  
  if (validateError) {
    return invalidData(StatusCodes.BAD_REQUEST, validateError.message);
  }
  const createdUser = await Models.Users.create(user);
  
  return { status: StatusCodes.OK, message: createdUser };
};