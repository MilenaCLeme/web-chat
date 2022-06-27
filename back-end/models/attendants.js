module.exports = (sequelize, DataTypes) => {
  const Attendants = sequelize.define('Attendants', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
  });
  return Attendants;
};