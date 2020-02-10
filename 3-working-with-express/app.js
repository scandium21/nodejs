const express = require("express");
const bodyParser = require("body-parser");
// an event handler
const app = express();

// if want to add a middleware for all request
app.use("/", (req, res, next) => {
  // console.log("This always runs");
  next();
});

// adding a parser, this should be done before all routing
// registers a middleware
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/add-product", (req, res, next) => {
  // console.log("In the next middleware!");
  res.send(
    "<form action='/product' method='POST'><input type='text' name='title'><button>Add Product</button></form>"
  );
});

app.use("/product", (req, res, next) => {
  // req.body=undefined it doesn't parse automatically
  console.log(req.body);
  res.redirect("/");
});

// use() allows to add new middleware function
app.use("/", (req, res, next) => {
  // console.log("In the next middleware!");
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
