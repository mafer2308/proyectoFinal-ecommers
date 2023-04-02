'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class productsInCart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      productsInCart.belongsTo(models.Products,{foreignKey:"productId"})
      productsInCart.belongsTo(models.car,{foreignKey:"carId"})
    }
  }
  productsInCart.init({
    carId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    price: DataTypes.FLOAT,
    status: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'productsInCart',
  });
  return productsInCart;
};