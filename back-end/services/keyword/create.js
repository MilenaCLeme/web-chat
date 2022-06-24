const Models = require('../../models');

module.exports = async (keyWord, command, instructions) => {
  const newKeyWord = await Models.search.create({ keyWord, command, instructions });
  return newKeyWord;
};
