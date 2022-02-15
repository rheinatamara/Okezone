"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class News extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      News.belongsTo(models.User, { foreignKey: "authorId" });
      News.hasMany(models.Image, { foreignKey: "newsId" });
      News.belongsTo(models.Category, { foreignKey: "categoryId" });
    }
  }
  News.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "Title is required",
          },
          notNull: {
            args: true,
            msg: "Title cannot be null",
          },
        },
      },
      mainImg: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "Image is required",
          },
          notNull: {
            args: true,
            msg: "Image cannot be null",
          },
        },
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "Description is required",
          },
          notNull: {
            args: true,
            msg: "Description cannot be null",
          },
        },
      },
      authorId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "Author is required",
          },
          notNull: {
            args: true,
            msg: "Author cannot be null",
          },
        },
      },
      categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "Category is required",
          },
          notNull: {
            args: true,
            msg: "Category cannot be null",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "News",
    }
  );
  return News;
};
