'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //유저는 여러개의 게시물을 갖는다. one to many 
      User.hasMany(models.Board, {
        foreignKey : 'userId'
      })
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    profileImg: DataTypes.STRING,
    refreshtoken : DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};