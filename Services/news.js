const { getCollection } = require("../Services/database");
const { ObjectId } = require("mongodb");

const QueryAllNews = async () => {
  try {
    const query = {};
    const cursor = await getCollection("news").find(query).toArray();
    return cursor;
  } catch (error) {
    return error;
  }
};

const QueryNews = async (id) => {
  try {
    const query = { _id: ObjectId(id) };
    const cursor = await getCollection("news").findOne(query);
    console.log(cursor);
    // const news = await cursor;
    return cursor;
  } catch (error) {
    return error;
  }
};

const QueryPost = (data) => {
  try {
    const post = getCollection("news").insertOne(data);
    return post;
  } catch (error) {
    return error;
  }
};

module.exports = { QueryAllNews, QueryNews, QueryPost };
