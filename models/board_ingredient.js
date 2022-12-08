'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Board_Ingredient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Board_Ingredient.belongsTo(models.Board, {
        foreignKey : "boardId"
      });
      Board_Ingredient.belongsTo(models.Ingredient,{
        foreignKey : 'ingredientId'
      });
    }
  }
  Board_Ingredient.init({
    boardId: DataTypes.INTEGER,
    IngredientId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Board_Ingredient',
  });
  return Board_Ingredient;
};