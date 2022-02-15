const { User } = require("../models");
class UserController {
  static async loginUser(req, res, next) {
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
      console.log(error);
    }
  }
}
module.exports = UserController;
