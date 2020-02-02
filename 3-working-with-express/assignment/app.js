const express = require("express");
const app = express();

// app.use((req, res, next) => {
//   console.log("the first middleware");
//   next();
// });

// app.use((req, res, next) => {
//   console.log("the second middleware");
//   res.send("This is the response back!");
// });

app.use("/users", (req, res, next) => {
  res.send("<h1>Users here!</h1>");
});

app.use("/", (req, res, next) => {
  res.send("<h1>Main page!</h1>");
});

app.listen(3000);
