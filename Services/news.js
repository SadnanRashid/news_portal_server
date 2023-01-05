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
