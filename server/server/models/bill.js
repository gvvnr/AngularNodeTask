'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bill = sequelize.define('Bill', {
    purchasedBy: DataTypes.STRING,
    purchasedOn: DataTypes.STRING,
    ListOfItems: DataTypes.STRING,
    total: DataTypes.INTEGER
  }, {});
  Bill.associate = function(models) {
    // associations can be defined here

    /*Bill.hasMany(models.item,{
      through:BillItems,
      foreignKey:'bill_id'
    })*/
  };
  return Bill;
};
