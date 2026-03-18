import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.render('index2.ejs');
})

app.post("/submit", (req, res) => {
    const formData = req.body['fName'] + " " + req.body['lName'];
    res.render('index2.ejs', {formdata : formData});
})

app.listen(3000, () => {
    console.log('Server on port 3000.')
})