const { StatusCodes } = require('http-status-codes');
const Model = require('../../models');
const { invalidData, invalidLogin } = require('../../utilities/setErrors');
const { validateLogin } = require('./validations');

module.exports = async (user) => {
  const { email, password } = user;
  const validateError = validateLogin(user).error;
  
  if (validateError) {
    return invalidData(StatusCodes.BAD_REQUEST, validateError.message);
  }

  const findUser = await Model.Attendants.findOne({ where: { email }});

  if (!findUser || password !== findUser.password) {
    return invalidLogin;
  }

  const findUserWPassword = await Model.Attendants.findOne({ attributes: { exclude: ['password'] }, where: { email } });
  
  return { status: StatusCodes.OK, message: findUserWPassword };
};