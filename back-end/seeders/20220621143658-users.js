'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Users',
    [
      {
        email: 'icequeen@gmail.com',
        name: 'Lissandra',
      },
      {
        email: 'sarah@gmail.com',
        name: 'Sarah Kerrigan',
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
};

