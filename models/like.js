'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    static associate(models) {
      Like.belongsTo(models.Board,{
        foreignKey : "boardId",
        onDelete : 'cascade',
      });
      Like.belongsTo(models.User,{
        foreignKey : "userId",
        onDelete : 'cascade',
      });
    }
  }
  Like.init({
    boardId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Like',
  });
  return Like;
};