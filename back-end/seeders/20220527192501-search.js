'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('searches',
    [
      {
        id: 1,
        keyWord: 'nota fiscal',
        command: 'retirar',
        instructions: 'Como retirar a nota fiscal por e-mail'
      },
      {
        id: 2,
        keyWord: 'nota fiscal',
        command: 'segunda via',
        instructions: 'faça o login, entre em meus pedidos e selecione a opção 2º via de nota fiscal'
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('searches', null, {})
};
