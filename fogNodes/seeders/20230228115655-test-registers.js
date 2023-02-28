'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('registers', [
      {
        userId: 'user1',
        name: 'user1',
        registeredDomain: 'user.1.region.energy-users.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 'user2',
        name: 'user2',
        registeredDomain: 'user.2.region.energy-users.com',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('registers', null, {});
  }
};
