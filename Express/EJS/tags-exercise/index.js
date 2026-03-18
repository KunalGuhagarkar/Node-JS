import express from "express";

const app = express();

app.get("/", (req, res) => {
  const data = {
    title: "EJS TAGS",
    seconds: new Date().getSeconds(),
    items: ["apple", "banana", "cherry"],
    htmlContent: "<em>This is some em text</em>",
  };
  res.render("index.ejs", data);
});

app.listen(3000, () => console.log("Server Listening at port 3000"));
