'use strict';
const {
  Model
} = require('sequelize');
const productsincart = require('./productsincart');
module.exports = (sequelize, DataTypes) => {
  class car extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      car.belongsTo(models.User,{foreignKey:"userId"}),
      car.hasMany(models.productsInCart,{foreignKey:"carId"})
    }
  }
  car.init({
    userId: DataTypes.INTEGER,
    totalPrice: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'car',
  });
  return car;
};