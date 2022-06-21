'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Attendant',
    [
      {
        name: 'admin',
        email: 'admin@gmail.com',
        password: '12345',
        role: 'admin'
      },
      {
        name: 'Rachel Green',
        email: 'rachel@gmail.com',
        password: '12345',
        role: 'atendente'
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Attendant', null, {}),
};

