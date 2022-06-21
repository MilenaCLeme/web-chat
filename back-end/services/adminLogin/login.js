const { StatusCodes } = require('http-status-codes');
const Models = require('../../models');
const { invalidData } = require('../../utilities/setErrors');
const { validateLogin } = require('./validations');

module.exports = async (user) => {
  const { email, password } = user;
  const validateError = validateLogin(user).error;
  
  if (validateError) {
    return invalidData(StatusCodes.BAD_REQUEST, validateError.message);
  }

  const findUser = await Models.Attendants.find(email);

  if (!findUser || password !== findUser.password) {
    return invalidLogin;
  }
  
  return { status: StatusCodes.OK, message: createdUser };
};