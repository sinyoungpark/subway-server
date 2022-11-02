'use strict';
const db = require("./index");

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
    static associate() {
      // define association here
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