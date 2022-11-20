'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Types', [
      {
        id : 5,
        type : '빵',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        id : 6,
        type : '야채',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        id : 7,
        type : '치즈',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        id : 8,
        type : '소스',
        createdAt : new Date(),
        updatedAt : new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Types', null, {});
  }
};
