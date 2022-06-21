const { StatusCodes } = require('http-status-codes');
const Model = require('../../models');
const { alreadyExists, invalidData } = require('../../utilities/setErrors');
const { validateAttendant } = require('./validations');

module.exports = async (attendant) => {
  const validateError = validateAttendant(attendant).error;
  if (validateError) {
    return invalidData(StatusCodes.BAD_REQUEST, validateError.message);
  }
  
  const findAttendant = await Model.Attendants.findOne({ where: { email: attendant.email } });

  if (findAttendant) {
    return alreadyExists('O atendente já existe');
  }

  if (findAttendant) {
    return alreadyExists('O atendente já existe');
  }

  const newAttendant = await Model.Attendants.create(attendant);

  const attendantWPassword = await Model.Attendants.findOne({ attributes: { exclude: ['password'] }, where: { id: newAttendant.id } });;

  
  return { status: StatusCodes.CREATED, message: attendantWPassword };
};