'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Menus', [
      {
        id : 6,
        typeId : 2, 
        name : '치킨 슬라이스',
        kcal : '265',
        img : 'https://www.subway.co.kr/upload/menu/%EC%B9%98%ED%82%A8%EC%8A%AC%EB%9D%BC%EC%9D%B4%EC%8A%A4%EC%83%8C%EB%93%9C%EC%9C%84%EC%B9%98_20220804012537491.png',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        id : 7,
        typeId : 2, 
        name : '치킨 베이컨 아보카도',
        kcal : '355',
        img : 'https://www.subway.co.kr/upload/menu/%EC%B9%98%ED%82%A8%EC%8A%AC%EB%9D%BC%EC%9D%B4%EC%8A%A4%EC%83%8C%EB%93%9C%EC%9C%84%EC%B9%98_20220804012537491.png',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        id : 8,
        typeId : 2,
        name : "로스트 치킨",
        kcal : '300',
        img : 'https://www.subway.co.kr/upload/menu/%EC%B9%98%ED%82%A8%EC%8A%AC%EB%9D%BC%EC%9D%B4%EC%8A%A4%EC%83%8C%EB%93%9C%EC%9C%84%EC%B9%98_20220804012537491.png',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        id : 9,
        typeId : 2,
        name : "로티세리 바비큐 치킨",
        kcal : '327',
        img : 'https://www.subway.co.kr/upload/menu/%EC%B9%98%ED%82%A8%EC%8A%AC%EB%9D%BC%EC%9D%B4%EC%8A%A4%EC%83%8C%EB%93%9C%EC%9C%84%EC%B9%98_20220804012537491.png',
        createdAt : new Date(),
        updatedAt : new Date()
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Menus', null, {});
  }
};
