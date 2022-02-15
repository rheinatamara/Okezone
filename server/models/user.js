"use strict";
const { Model } = require("sequelize");
const { encode } = require("../helpers/bcrypt");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.News, { foreignKey: "authorId" });
    }
  }
  User.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "Name is required",
          },
          notNull: {
            args: true,
            msg: "Name cannot be null",
          },
        },
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          args: true,
          msg: "Username is already exists",
        },
        validate: {
          notEmpty: {
            args: true,
            msg: "Username is required",
          },
          notNull: {
            args: true,
            msg: "Username cannot be null",
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          args: true,
          msg: "Email is already exists",
        },
        validate: {
          isEmail: {
            args: true,
            msg: "Invalid email format",
          },
          notEmpty: {
            args: true,
            msg: "Email is required",
          },
          notNull: {
            args: true,
            msg: "Email cannot be null",
          },
        },
      },

      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "Password is required",
          },
          notNull: {
            args: true,
            msg: "Password cannot be null",
          },
        },
      },
      role: DataTypes.STRING,
    },
    {
      hooks: {
        beforeCreate: (user, option) => {
          user.password = encode(user.password);
        },
      },
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
