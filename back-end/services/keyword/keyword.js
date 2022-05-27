const Models = require('../../models');

module.exports = async (keyWord) => {
  const findKeyword = await Models.search.findAll({ where: { keyWord } });
  return findKeyword;
};
