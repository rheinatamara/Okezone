const authorization = async (req, res, next) => {
  const role = req.user.role;
  if (role === "admin") {
    try {
      next();
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  } else {
    res.status(403).json({ message: "You dont have access" });
  }
};
module.exports = authorization;
