const { StatusCodes } = require('http-status-codes');
const Models = require('../../models');

module.exports = async (req, res, _next) => {
  const { id } = req.body;
  await Models.Attendants.destroy({ where: { id } });
    
  return res.status(StatusCodes.NO_CONTENT).json();
};