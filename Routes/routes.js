const express = require("express");
const router = express.Router();

const {
  getAllNews,
  getTargetNews,
  postNews,
} = require("../Controllers/newsController");

router.get("/get", getAllNews);
router.get("/get/:id", getTargetNews);
router.post("/post", postNews);

module.exports = router;
