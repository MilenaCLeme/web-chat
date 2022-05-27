const serviceKeyword = require('../../services/keyword');

module.exports = async (_req, res, _next) => {
  const result = await serviceKeyword.keyword();
  return res.status(200).json(result);
};
