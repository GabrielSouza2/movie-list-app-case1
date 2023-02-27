'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Titles', [
      {
        name: 'The Shawshank Redemption',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'The Godfather',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'The Dark Knight',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Titles', null, {});
  }
};