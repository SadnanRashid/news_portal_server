const express = require("express");
const port = process.env.PORT || 5000;
const { getCollection } = require("./Services/database");

const app = express();
//
// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//
app.listen(port, () => {
  console.log(`listening at port ${port}`);
});

app.get("/", (req, res) => {
  const a = getCollection("news");
  console.log(a);
  res.send({ message: "Working..." });
});
//
