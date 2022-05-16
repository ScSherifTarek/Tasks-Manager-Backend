'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      {
        name: 'John Doe',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      {
        name: 'Sherif Tarek',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mahmoud Sorour',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Iain Bowes',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};

// npx sequelize-cli model:generate --name Task --attributes title:string,description:text
