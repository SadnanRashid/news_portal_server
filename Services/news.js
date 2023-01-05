const { getCollection } = require("../Services/database");
const { ObjectID } = require("mongodb");

const QueryAllNews = async () => {
  try {
    const query = getCollection("news").find({});
    const allNews = await query;
    return allNews;
  } catch (error) {
    return error;
  }
};

const QueryNews = async (id) => {
  try {
    const query = { _id: ObjectId(id) };
    const cursor = getCollection("news").findOne(query);
    const news = await cursor;
    return news;
  } catch (error) {
    return error;
  }
};
