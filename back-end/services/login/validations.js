const Joi = require('joi');

const schemaLogin = Joi.object({
   email: Joi.string().required().email(),
   password: Joi.string().required(),
});

module.exports = {
  validateLogin: (user) => schemaLogin.validate(user),
};