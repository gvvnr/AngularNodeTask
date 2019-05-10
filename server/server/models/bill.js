'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bill = sequelize.define('Bill', {
    purchasedBy: DataTypes.STRING,
    purchasedOn: DataTypes.STRING,
    total: DataTypes.INTEGER
  }, {});
  Bill.associate = function(models) {
    // associations can be defined here

    Bill.hasMany(models.item,{
      //through:BillItems,
      foreignKey:'bill_id',
      sourceKey:'id'
    })
/*    Bill.belongsToMany(models.item,{
     through:'BillItems',
      foreignKey:'bill_id'
    });*/
    /*Bill.hasMany(models.BillItems,{
      foreignKey:'bill_id',
      sourceKey:'id'
    });*/
  };
  return Bill;
};
