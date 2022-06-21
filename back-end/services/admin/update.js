const { StatusCodes } = require('http-status-codes');
const { invalidData, invalidAttendantId } = require('../../utilities/setErrors');
const { validateAttendant } = require('../validations');
const Models = require('../../models');

module.exports = async(id, attendant) => {

  const validateError = validateAttendant(attendant).error;
  if (validateError) {
    return invalidData(validateError.message);
  }
  const findById = await Models.Attendants.findOne({ where: { id } });
  
  if (!findById) return invalidAttendantId;

  await Models.Attendants.update({ attendant }, { where: { id } });

  return { status: StatusCodes.OK, message: updatedKit };
};
