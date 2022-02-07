"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Categories",
      [
        {
          name: "News",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sports",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Entertainment",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Business",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Travel",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Health",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Politics",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "World",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Lifestyle",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
