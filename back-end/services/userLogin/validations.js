const Joi = require('joi');

const schemaLogin = Joi.object({
   email: Joi.string().email().required(),
   name: Joi.string().min(3).required(),
});

module.exports = {
  validateLogin: (user) => schemaLogin.validate(user),
};