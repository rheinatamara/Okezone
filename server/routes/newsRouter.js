const router = require("express").Router();
const NewsController = require("../controllers/newsController");
const uploadFiles = require("../middlewares/multer");
const authorization = require("../middlewares/authorization");
const imageKit = require("../middlewares/imagekit");
router.get("/", NewsController.allNews);
router.get("/news/:id", NewsController.getById);
router.get("/categories", NewsController.getCategories);
router.post(
  "/news",
  authorization,
  uploadFiles,
  imageKit,
  NewsController.postNews
);
module.exports = router;
