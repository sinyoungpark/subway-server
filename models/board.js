'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Board extends Model {
    static associate(models) {
      /*게시글 한 개는 한 명의 유저만을 갖는다. belongsto*/
      Board.belongsTo(models.User, {
        foreignKey : 'userId',
        onDelete : 'CASCADE'
      });
      //게시글 한 개는 하나의 메뉴명을 갖는다. belongsto
      Board.belongsTo(models.Menu,{
        foreignKey : 'menuId',
      })
      //게시글 한 개는 여러개의 재료를 가질 수 있다. many to many 
      Board.belongsToMany(models.Ingredient, {
        through : 'Board_Ingredient',
        foreignKey : 'boardId',
        otherKey : 'ingredientId'
      });

      Board.belongsToMany(models.User, {
        through : "Like",
        foreignKey : "boardId",
        otherKey : 'userId'
      });

      Board.hasMany(models.Board_Ingredient);
      Board.hasMany(models.Like);
    }
  }
  Board.init({
    userId: DataTypes.INTEGER,
    menuId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    likes: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Board',
  });
  return Board;
};