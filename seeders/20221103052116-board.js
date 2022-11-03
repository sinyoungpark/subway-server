'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Boards', [
      {
        userId : 2,
        menuId : 1,
        ingredientId : 1,
        title : '너무 맛있는 레시피',
        likes : 1,
        createdAt : new Date(),
        updatedAt : new Date()
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Boards', null, {});
  }
};
