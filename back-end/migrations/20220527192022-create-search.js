'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('searches', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      keyWord: {
        type: Sequelize.STRING
      },
      command: {
        type: Sequelize.STRING
      },
      instructions: {
        type: Sequelize.STRING
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('searches');
  }
};