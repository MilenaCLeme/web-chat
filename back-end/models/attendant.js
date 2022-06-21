module.exports = (sequelize, DataTypes) => {
  const Attendant = sequelize.define('Attendant', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
  });
  return Attendant;
};