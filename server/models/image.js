"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      image.belongsTo(models.News, { foreignKey: "newsId" });
    }
  }
  image.init(
    {
      productId: DataTypes.INTEGER,
      imgUrl: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "Image is required",
          },
          notNull: true,
        },
      },
    },
    {
      sequelize,
      modelName: "image",
    }
  );
  return image;
};
