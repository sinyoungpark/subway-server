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
        allowNull: false,
        type: Sequelize.INTEGER,
        onDelete : 'CASCADE',
        references : {
          model : 'Users',
          key : 'id',
          as : 'userId'
        }
      },
      menuId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references : {
          model : 'Types',
          key : 'id',
          as : 'typeId'
        }
      },
      ingredientId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references : {
          model : 'Ingredients',
          key : 'id',
          as : 'ingredientId'
        }
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING
      },
      likes: {
        allowNull: false,
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