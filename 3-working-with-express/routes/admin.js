const express = require("express");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  // console.log("In the next middleware!");
  res.send(
    "<form action='/product' method='POST'><input type='text' name='title'><button>Add Product</button></form>"
  );
});

router.post("/product", (req, res, next) => {
  // req.body=undefined it doesn't parse automatically
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
