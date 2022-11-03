'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Menu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //메뉴 하나는 여러개의 게시물에서 사용될 수 있다. one to many
      Menu.hasMany(models.Board, {
        foreignKey : 'menuId'
      });
    }
  }
  Menu.init({
    typeId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    kcal: DataTypes.STRING,
    img: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Menu',
  });
  return Menu;
};