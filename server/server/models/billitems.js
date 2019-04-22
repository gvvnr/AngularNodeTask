'use strict';
module.exports = (sequelize, DataTypes) => {
  const BillItems = sequelize.define('BillItems', {
    bill_id: DataTypes.INTEGER,
    item_id: DataTypes.INTEGER
  }, {});
  BillItems.associate = function(models) {
    // associations can be defined here
    BillItems.belongsTo(models.item ,{
      foreignKey:'bill_id',
      targetKey:'id'
    });
    BillItems.belongsTo(models.Bill,{
      foreignKey:'item_id',
      targetKey:'id'
    })

  };
  return BillItems;
};
