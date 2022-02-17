var express = require("express");
var router = express.Router();
const { getUsers } = require("../controllers/user.controllers");
/* GET home page. */
router.get("/", getUsers);

module.exports = router;
