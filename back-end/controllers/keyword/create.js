const serviceKeyword = require('../../services/keyword');

module.exports = async (req, res, _next) => {
  const { keyWord, command, instructions } = req.body;
  const result = await serviceKeyword.createKeyWord(keyWord, command, instructions);
  return res.status(200).json(result);
};
