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
      {
        id: 3,
        keyWord: 'boleto',
        command: 'gerar boleto',
        instructions: 'faça o login, clique em meus pedidos e selecione a opção gerar boleto'
      },
      {
        id: 4,
        keyWord: 'boleto',
        command: 'compensação boleto',
        instructions: 'Os boletos demoram até 2 (dois) dias úteis para ser compensados'
      },
      {
        id: 5,
        keyWord: 'rastrear',
        command: 'rastrear encomenda',
        instructions: 'faça o login, clique em meus pedidos e selecione a opção rastrear encomenda'
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('searches', null, {})
};
