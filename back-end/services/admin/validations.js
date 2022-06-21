const Joi = require('joi');

const schemaAttendant = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(4).required(),
  role: Joi.string().required(),

});

module.exports = {
  validateAttendant: (attendant) => schemaAttendant.validate(attendant),
};