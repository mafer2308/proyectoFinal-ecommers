'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Products.hasMany(models.productInOrder,{foreignKey:"productId"})
      Products.hasMany(models.productsInCart,{foreignKey:"productId"})
    }
  }
  Products.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.INTEGER,
    availableQty: DataTypes.INTEGER,
    available: DataTypes.BOOLEAN,
    productImage: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Products',
  });
  return Products;
};