const { QueryAllNews, QueryNews, QueryPost } = require("../Services/news");

const getAllNews = async (req, res) => {
  const news = await QueryAllNews().toArray();
  return res.json(news);
};

const getTargetNews = async (req, res) => {
  const news = await QueryNews(req.params.id);
  if (!news) {
    return res.status(404).send({ message: "data not found" });
  }
  return res.send(news);
};

const postNews = async (req, res) => {
  const data = req.body;
  const result = await QueryPost(data);
  return res.json(result);
};
