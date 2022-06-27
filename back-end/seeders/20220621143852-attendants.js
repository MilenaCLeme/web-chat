'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Attendants',
    [
      {
        name: 'admin',
        email: 'admin@gmail.com',
        password: '12345',
        role: 'admin',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        name: 'Rachel Green',
        email: 'rachel@gmail.com',
        password: '12345',
        role: 'atendente',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Attendants', null, {}),
};

