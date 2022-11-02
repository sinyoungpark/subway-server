'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Board extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(db) {
      // define association here
      db.Board.belongsToMany(db.Ingredients, {through : "board-ingredients"});
    }
  }
  Board.init({
    title: DataTypes.STRING,
    likes: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'Board',
  });
  return Board;
};