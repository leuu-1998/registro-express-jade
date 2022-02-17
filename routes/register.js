var express = require("express");
var router = express.Router();
const { signup } = require("../controllers/user.controllers");

router.get("/", function (req, res, next) {
  res.render("register", { title: "Registro" });
});

router.post("/", signup);

module.exports = router;
