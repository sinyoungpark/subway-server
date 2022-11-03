'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Types', [
      {
        id : 1,
        type : '빵',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        id : 2,
        type : '야채',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        id : 3,
        type : '클래식',
        createdAt : new Date(),
        updatedAt : new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Types', null, {});
  }
};
