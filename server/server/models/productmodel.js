'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProductModel = sequelize.define('ProductModel', {
    Name: DataTypes.STRING,
    category: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {});
  ProductModel.associate = function(models) {
    // associations can be defined here
    ProductModel.hasMany(models.item,{
      foreignKey:'product_id',
      sourceKey:'id'
    })

  };
  return ProductModel;
};
