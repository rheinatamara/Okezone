const { User } = require("../models");
const { sign } = require("../helpers/jwt");
const { decode } = require("../helpers/bcrypt");
class UserController {
  static async registerUser(req, res, next) {
    const { name, username, email, password } = req.body;
    try {
      const result = await User.create({
        name,
        username,
        email,
        password,
        role: "customer",
      });
      res.status(201).json({
        id: result.id,
        username: result.username,
        email: result.email,
        role: result.role,
      });
    } catch (error) {
      let code = error.code || 500;
      let message = error.message || "Internal Server Error";
      if (error.name === "SequelizeUniqueConstraintError") {
        code = 400;
        message = error.message;
      } else if (error.name === "SequelizeValidationError") {
        code = 400;
        error.errors.forEach((err) => {
          message = err.message;
        });
      }
      res.status(code).json({ message });
    }
  }
  static async loginUser(req, res, next) {
    const { email, password } = req.body;
    try {
      const found = await User.findOne({
        where: {
          email,
        },
      });
      if (found) {
        const match = decode(password, found.password);
        if (match) {
          const access_token = sign({
            id: found.id,
            username: found.username,
            email: found.email,
            role: found.role,
          });
          res.status(200).json({
            access_token,
            email: found.email,
            role: found.role,
            username: found.username,
          });
        } else {
          res.status(401).json({ message: "Invalid Email/Password" });
        }
      } else {
        res.status(401).json({ message: "Invalid Email/Password" });
      }
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
module.exports = UserController;
