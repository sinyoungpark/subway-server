'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Menus', [
      {
        typeId : 3, 
        name : '스파이시 바비큐',
        kcal : '374',
        img : 'https://www.subway.co.kr/upload/menu/%EC%8A%A4%ED%8C%8C%EC%9D%B4%EC%8B%9C%EB%B0%94%EB%B9%84%ED%81%90_%EC%A0%95%EB%A9%B4_20221031041334845.png',
        createdAt : new Date(),
        updatedAt : new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Menus', null, {});
  }
};
