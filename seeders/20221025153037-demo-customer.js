'use strict';
const {createHmac} = require("crypto");


require("dotenv").config();

const makeHash = (pwd) => {
  const hash = createHmac("sha256", pwd)
  .update('I love cupcakes')
  .digest('hex');

  return hash;
}


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   return queryInterface.bulkInsert("Customers",[{
    name : "example",
    email : "example@example.com",
    password : makeHash(process.env.PASSWORD),
    createdAt : new Date(),
    updatedAt : new Date()
   }]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
