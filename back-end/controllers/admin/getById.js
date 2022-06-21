const ServicesAdmin = require('../../services/admin');

module.exports = async (req, res, _next) => {
  const { id } = req.params;
  const getById = await ServicesAdmin.getById(id);
    
  return (typeof getById.message === 'object') 
  ? res.status(getById.status).json(getById.message)
  : res.status(getById.status).json({ message: getById.message });
};