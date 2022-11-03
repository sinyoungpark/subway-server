'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Boards', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        onDelete : 'CASCADE',
        references : {
          model : 'Users',
          key : 'id',
          as : 'userId'
        }
      },
      menuId: {
        type: Sequelize.INTEGER,
        references : {
          model : 'Types',
          key : 'id',
          as : 'typeId'
        }
      },
      ingredientId: {
        type: Sequelize.INTEGER,
        references : {
          model : 'Ingredieints',
          key : 'id',
          as : 'ingredientId'
        }
      },
      title: {
        type: Sequelize.STRING
      },
      likes: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Boards');
  }
};