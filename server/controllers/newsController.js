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
  static async getById(req, res) {
    const id = +req.params.id;
    try {
      const data = await News.findByPk(id, {
        include: [Category, User, Image],
      });

      if (data) {
        res.status(200).json(data);
      } else {
        res.status(404).json({ message: "News not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  }
  static async getCategories(req, res) {
    try {
      const categories = await Category.findAll();
      if (categories) {
        res.status(200).json(categories);
      } else {
        res.status(404).json({ message: "Categories not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  }
  static async postNews(req, res) {
    console.log("masuk ke controller");
  }
}
module.exports = NewsController;
