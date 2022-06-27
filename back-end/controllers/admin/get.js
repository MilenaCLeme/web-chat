const { StatusCodes } = require('http-status-codes');
const Models = require('../../models');

module.exports = async (_req, res, _next) => {
  const getAll = await Models.Attendants.findAll();
     
  return res.status(StatusCodes.OK).json(getAll);
};