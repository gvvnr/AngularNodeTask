'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('ProductModels', [{
      Name: 'CoolDrinks',
      category:'drinks',
      price: 1000,
      createdAt:new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {

  }
};
