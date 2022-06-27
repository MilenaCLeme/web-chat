const ServicesAdmin = require('../../services/admin');

module.exports = async (req, res, _next) => {
  const attendant = req.body;
  const result = await ServicesAdmin.create(attendant);

  return res.status(result.status).json(result.message);
};
