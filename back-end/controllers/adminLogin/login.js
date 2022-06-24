const ServicesAdmin = require('../../services/adminLogin');

module.exports = async (req, res, _next) => {
  const user = req.body;
  const result = await ServicesAdmin.login(user);
 
  return res.status(result.status).json(result.message)
};