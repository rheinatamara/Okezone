const { News, Category, User, Image } = require("../models");

class NewsController {
  static async allNews(req, res) {
    try {
      const data = await News.findAll({
        include: [Category, User, Image],
        order: [["id", "ASC"]],
      });
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  }
}
module.exports = NewsController;
