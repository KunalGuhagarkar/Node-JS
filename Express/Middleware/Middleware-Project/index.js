import express from "express";
import { dirname } from "path";
("path");
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(dirname(fileURLToPath(import.meta.url)) + "/index.html");
});

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/submit", (req, res) => {
  res.send(`<h3>${req.body.email}</h3><h4>${req.body.password}</h4>`);
});

app.listen(port, () => {
  console.log("Server Running Port 3000");
});
