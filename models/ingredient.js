'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ingredient extends Model {
    static associate(models) {
      //재료 한 개는 여러개의 게시글에서 사용할 수 있다. many to many 
      Ingredient.belongsToMany(models.Board, {
        through : "board_ingredients",
        foreignKey : 'ingredieintId',
        otherKey : 'boardId',
      });
    }
  }
  Ingredient.init({
    typeId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    kcal: DataTypes.STRING,
    img: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Ingredient',
  });
  return Ingredient;
};