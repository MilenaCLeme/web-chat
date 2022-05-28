'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Users',
    [
      {
        email: 'icequeen@gmail.com',
        password: '12345',
      },
      {
        email: 'teste@test.com',
        password: '12345',
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
};
