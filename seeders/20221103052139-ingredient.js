'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Ingredients', [
      {
        typeId : 5,
        name : '허니오트',
        kcal : '235',
        img : 'https://www.subway.co.kr/images/menu/img_recipe_b01.jpg',
        createdAt : new Date(),
        updatedAt : new Date()
      }, 
      {
        typeId : 6,
        name : '양상추',
        kcal : '2.9',
        img : 'https://www.subway.co.kr/images/menu/img_recipe_v01.jpg',
        createdAt : new Date(),
        updatedAt : new Date()
      }, 
    ], {})
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Ingredients', null, {});
  }
};
