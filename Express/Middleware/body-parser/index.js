import express from "express";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
import {dirname} from "path"

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.sendFile(dirname(fileURLToPath(import.meta.url)) + "/index.html");
});

app.use(bodyParser.urlencoded({extended:true}));

app.post("/submit", (req, res) => {
    console.log(req.body);
});

app.listen(port, () => {
    console.log(`Listening to ${port}`);
});