const router = require("express").Router();
const NewsController = require("../controllers/newsController");
const uploadFiles = require("../middlewares/multer");
const authorization = require("../middlewares/authorization");
router.get("/", NewsController.allNews);
router.get("/news/:id", NewsController.getById);
router.get("/categories", NewsController.getCategories);
router.post("/news", authorization, uploadFiles, NewsController.postNews);
module.exports = router;
