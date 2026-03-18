import express from "express";

const app = express();

// global
app.locals.data1 = { 
  name: "Kunal",
  email: "k@gmail.com",
};

app.get("/", (req, res) => {
  // request specific  
  res.locals.data2 = {
    name: "Ram",
    email: "R@gmail.com"
  }  
  res.render("index.ejs");
});

app.get("/another", (req, res) => {
  res.render("index.ejs");
});

app.listen(3000, () => {
  console.log("Server Listening to port 3000.");
});
