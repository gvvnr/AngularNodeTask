'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('ProductModels', [{
      Name: 'laptop battery',
      category:'electronics',
      price: 3000,
      createdAt:new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {

  }
};
