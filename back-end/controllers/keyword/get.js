const serviceKeyword = require('../../services/keyword');

module.exports = async (req, res, _next) => {
  const { keyWord } = req.body
  const result = await serviceKeyword.getKeyWord(keyWord.toLowerCase());
  return res.status(200).json(result);
};
