'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Menus', [
      {
        id : 1,
        typeId : 1, 
        name : '에그마요',
        kcal : '416',
        img : 'https://www.subway.co.kr/upload/menu/Egg-Mayo_20211231094817112.png',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        id : 2,
        typeId : 1, 
        name : '이탈리안 비엠티',
        kcal : '388',
        img : 'https://www.subway.co.kr/upload/menu/Italian_B.M.T_20211231094910899.png',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        id : 3,
        typeId : 1,
        name : "비엘티",
        kcal : '300',
        img : 'https://www.subway.co.kr/upload/menu/B.L.T_20211231094744175.png',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        id : 4,
        typeId : 1,
        name : "햄",
        kcal : '262',
        img : 'https://www.subway.co.kr/upload/menu/Ham_20211231094833168.png',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        id : 5,
        typeId : 1,
        name : "참치",
        kcal : '316',
        img : 'https://www.subway.co.kr/upload/menu/Tuna_20211231095535268.png',
        createdAt : new Date(),
        updatedAt : new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Menus', null, {});
  }
};
