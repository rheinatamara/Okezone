const router = require("express").Router();
const NewsController = require("../controllers/newsController");
router.get("/", NewsController.allNews);
module.exports = router;
