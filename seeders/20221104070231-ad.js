"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Ads", [
      {
        img: "https://event.subway.co.kr/upload/event/221026_01.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img : "https://www.subway.co.kr/upload/event/%EC%83%81%EC%84%B8_800_%EA%B3%A0%EA%B5%AC%EB%A7%88%EC%B9%A9_20220929023919547.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img : "https://www.subway.co.kr/upload/event/img_evt_top_02_20201007034126605.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Ads", null, {});
  },
};
