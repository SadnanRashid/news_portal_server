const { QueryAllNews, QueryNews, QueryPost } = require("../Services/news");

const getAllNews = async (req, res) => {
  const news = await QueryAllNews().toArray();
  return res.json(news);
};

const getOneNews = async (req, res) => {
  const news = await QueryNews(req.params.id);
  if (!news) {
    return res.status(404).send({ message: "data not found" });
  }
  return res.send(news);
};
