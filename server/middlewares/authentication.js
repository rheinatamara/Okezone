const { verify } = require("../helpers/jwt");
const { User } = require("../models");
const authentication = async (req, res, next) => {
  const token = req.headers.access_token;
  try {
    const payload = verify(token);
    const found = await User.findOne({
      where: {
        email: payload.email,
      },
    });
    if (found) {
      req.user = {
        id: found.id,
        name: found.name,
        email: found.email,
        role: found.role,
      };
      next();
    } else {
      let code = error.code || 500;
      let message = error.message || "Internal server error";
      if (error.name === "JsonWebTokenError") {
        code = 401;
        message = "Authentication failed";
      }
      res.status(code).json({ message });
    }
  } catch (error) {
    let code = error.code || 500;
    let message = error.message || "Internal server error";
    if (error.name === "JsonWebTokenError") {
      code = 401;
      message = "Authentication failed";
    }
    res.status(code).json({ message });
  }
};
module.exports = authentication;
