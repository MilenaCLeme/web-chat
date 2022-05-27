module.exports = (sequelize, DataTypes) => {
  const search = sequelize.define('search', {
    keyWord: DataTypes.STRING,
    command: DataTypes.STRING,
    instructions: DataTypes.STRING
  },
  {
    timestamps: false,
  });
  return search;
};
