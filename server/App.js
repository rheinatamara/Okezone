require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
// const router = require("./routes/index");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(router);

app.listen(PORT, () => {
  console.log("app listening on port", PORT);
});
