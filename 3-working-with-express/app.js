const express = require("express");
// an event handler
const app = express();

// if want to add a middleware for all request
app.use("/", () => {
  console.log("This always runs");
  next();
});

app.use("/add-product", (req, res, next) => {
  console.log("In the next middleware!");
  res.send("<h1>The 'add product' page</h1>");
});
// use() allows to add new middleware function
app.use("/", (req, res, next) => {
  console.log("In the next middleware!");
  // header is set by express by default to Content-Type: text/html; charset=utf-8
  // send source code: https://github.com/expressjs/express/blob/master/lib/response.js
  res.send("<h1>Hello from express!</h1>");
});

// const server = http.createServer(app);
// server.listen(3000);
app.listen(3000);

// source code:https://github.com/expressjs/express/blob/master/lib/application.js
// app.listen = function listen() {
//   var server = http.createServer(this);
//   return server.listen.apply(server, arguments);
// };
