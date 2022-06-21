const { StatusCodes } = require('http-status-codes');
const { invalidData, invalidAttendantId } = require('../../utilities/setErrors');
const { validateAttendant } = require('./validations');
const Model = require('../../models');

module.exports = async(id, attendant) => {
  const { name, email, password, role } = attendant;

  const validateError = validateAttendant(attendant).error;
  if (validateError) {
    return invalidData(validateError.message);
  }
  const findById = await Models.Attendants.findOne({ where: { id } });
  
  if (!findById) return invalidAttendantId;

  await Models.Attendants.update({ name, email, password, role }, { where: { id } });

  const updatedAttendant = await Model.Attendants.findOne({ attributes: { exclude: ['password'] }, where: { id } });

  return { status: StatusCodes.OK, message: updatedAttendant };
};
