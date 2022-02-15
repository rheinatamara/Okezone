"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("News", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      mainImg: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      categoryId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Categories",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      authorId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("News");
  },
};
