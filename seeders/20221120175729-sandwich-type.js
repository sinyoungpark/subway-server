'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Types', [
      {
        id : 1,
        type : '클래식',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        id : 2,
        type : '프래쉬&라이트',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        id : 3,
        type : '프리미엄',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        id : 4,
        type : '신제품',
        createdAt : new Date(),
        updatedAt : new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Types', null, {});
  }
};
