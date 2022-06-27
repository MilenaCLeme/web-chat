const ServicesAdmin = require('../../services/admin');

module.exports = async (req, res, _next) => {
  const { id } = req.params;
  const getById = await ServicesAdmin.getById(id);
    
  return res.status(getById.status).json(getById.message);
};