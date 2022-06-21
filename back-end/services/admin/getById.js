const { StatusCodes } = require('http-status-codes');
const Model = require('../../models');
const { invalidAttendantId } = require('../../utilities/setErrors');

module.exports = async (id) => {
  const findById = await Model.Users.findByPk(id);
  
  if (!findById) {
    return invalidAttendantId;
  }

  return { status: StatusCodes.OK, message: findById };
};