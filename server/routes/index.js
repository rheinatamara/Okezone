const router = require("express").Router();
const userRouter = require("./userRouter");
const newsRouter = require("./newsRouter");
const authentication = require("../middlewares/authentication");

router.use("/", userRouter);
router.use(authentication);
router.use("/", newsRouter);

module.exports = router;
