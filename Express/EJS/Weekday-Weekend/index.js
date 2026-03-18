// Functionality of getDay()

// imports
import express from "express";

let day = new Date().getDay();

function weekendOrWeekday(day) {
  if (day !== 7 || day !== 0) {
    return "Hey its a Weekday :(";
  } else {
    return "Hey its a Weekend :)";
  }
}

const app = express();

app.get("/", (req, res) => {
  res.render("index.ejs", { day: weekendOrWeekday(day) });
});

app.listen(3000, () => {
  console.log("Server Listening at Port 3000");
});
