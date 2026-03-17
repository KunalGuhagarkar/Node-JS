import express from "express";

const app = express();
const port = 3000;

function logger(req, res, next) {
    console.log("Request Method: ", req.method);
    console.log("Request Url: ", req.url);
    next();
}

app.use(logger);

// // Middleware 1
// app.use((req, res, next) => {
//   console.log("Request Method: ", req.method);
//   next(); // points to the next handler e.g. Middleware 2
// });

// // Middleware 2
// app.use((req, res, next) => {
//   console.log("Request URL: ", req.url);
//   next(); // poinsts to the next handler e.g. app.get()
// });

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log("Server Listening to port 3000");
});
