const express = require("express");
const bodyParser = require("body-parser");
// an event handler
const app = express();
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

// if want to add a middleware for all request
app.use("/", (req, res, next) => {
  // console.log("This always runs");
  next();
});

// adding a parser, this should be done before all routing
// registers a middleware
app.use(bodyParser.urlencoded({ extended: false }));

app.use(adminRoutes);
app.use(shopRoutes);

// const server = http.createServer(app);
// server.listen(3000);
app.listen(3000);
