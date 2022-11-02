'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sandwich extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(db) {
      // define association here
      db.Sandwich.hasMany(db.Board);
    }
  }
  Sandwich.init({
    menu: DataTypes.STRING,
    type: DataTypes.STRING,
    kcal: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Sandwich',
  });
  return Sandwich;
};