'use strict';
const prodDetails=require('./productDetails');
module.exports = {
  up: (queryInterface, Sequelize) => {
    console.log(prodDetails,'details value');
   var  productModelInsertion=[];
   for(let i=0;i<prodDetails.length;i++){
     productModelInsertion.push({
       Name: prodDetails[i].Name,
       category:prodDetails[i].category,
       price: prodDetails[i].price,
       createdAt:new Date(),
       updatedAt: new Date()
     })
   }
   console.log('prodMoelInsertion',productModelInsertion);

    return queryInterface.bulkInsert('ProductModels',productModelInsertion , {});
  },

  down: (queryInterface, Sequelize) => {

  }
};
/*
[{
      Name: 'laptop battery',
      category:'Electronics',
      price: 3000,
      createdAt:new Date(),
      updatedAt: new Date()
    }]
 */
