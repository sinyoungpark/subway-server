"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Ads", [
      {
        img: "https://www.subway.co.kr/upload/event/%EC%83%81%EC%84%B8_800_20221031111824137.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img: "https://event.subway.co.kr/upload/event/221026_01.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Ads", null, {});
  },
};
