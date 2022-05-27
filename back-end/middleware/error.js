const statusCodes = require('http-status-codes');

module.exports = async (err, _req, res, _next) => {
  console.error(err, 'caiu no erro 500');
  
  return res.status(statusCodes.INTERNAL_SERVER_ERROR).end();
};