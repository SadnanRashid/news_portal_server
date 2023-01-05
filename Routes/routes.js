const {
  getAllNews,
  getTargetNews,
  postNews,
} = require("../Controllers/newsController");

router.get("/api/get", getAllNews);
router.get("/api/get/:id", getTargetNews);
router.post("/api/post", postNews);
