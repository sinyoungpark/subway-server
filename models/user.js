"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      //유저는 여러개의 게시물을 갖는다. one to many
      User.hasMany(models.Board, {
        foreignKey: "userId",
      });
      User.belongsToMany(models.Board, {
        through: "Like",
        foreignKey: "userId",
        otherKey: "boardId",
      });

      User.hasMany(models.Like,{
        foreignKey : "userId"
      });
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      profileImg: DataTypes.STRING,
      refreshtoken: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
