'use strict';
module.exports = (sequelize, DataTypes) => {
  const item = sequelize.define('item', {
    product_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    totalCost: DataTypes.INTEGER,
   // bill_id: DataTypes.INTEGER
  }, {});
  item.associate = function(models) {
    // associations can be defined here
    item.belongsTo(models.ProductModel,{
      foreignKey:'product_id',
      targetKey:'id'
    });
  };
/*  item.belongsTo(models.Bill,{
    foreignKey:'bill_id',
    targetKey:'id'
  });*/
  return item;
};
