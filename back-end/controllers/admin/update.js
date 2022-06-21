const ServicesAdmin = require('../../services/admin');

module.exports = async (req, res, _next) => {
  const { id } = req.params;
  const attendant = req.body;
  const result = await ServicesAdmin.update(id, attendant);
  return res.status(result.status).json(result.message);
};
