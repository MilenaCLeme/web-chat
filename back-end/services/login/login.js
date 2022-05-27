const { StatusCodes } = require('http-status-codes');
const Models = require('../../models');
const { nonExistentUser, invalidData } = require('../../utilities/setErrors');
const { validateLogin } = require('./validations');

module.exports = async (user) => {
  const validateError = validateLogin(user).error;
  
  if (validateError) {
    return invalidData(StatusCodes.BAD_REQUEST, validateError.message);
  }
  const findUser = await Models.Users.findOne({ where: { email: user.email } });
  
  const data = findUser ? findUser.dataValues : null;
  
  if (!findUser || user.password !== data.password) {
    return nonExistentUser;
  }
  
  const userWPassword = findUser.email;

  return { status: StatusCodes.OK, message: userWPassword };
};