const ServicesUsers = require('../../services/login');

module.exports = async (req, res, _next) => {
  const user = req.body;
  const result = await ServicesUsers.login(user);
 
  return res.status(result.status).json(result.message)
};