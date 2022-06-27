const Joi = require('joi');

const schemaLogin = Joi.object({
   email: Joi.string().email().required(),
   password: Joi.string().min(4).required(),
});

module.exports = {
  validateLogin: (user) => schemaLogin.validate(user),
};