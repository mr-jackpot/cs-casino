var express = require("express");
var controller = require("../controller/controller");
var router = express.Router();

router.get("/", (req, res) => {
  res.send("<h1>Welcome to the Casino</h1>");
});

router.get("/coinflip", (req, res) => {
  res.send("<h1>This is the coinflip game.</h1>");
});


module.exports = router;
