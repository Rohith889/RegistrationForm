const express = require("express");
const home = express.Router();

home.route("/").get((req, res) => {
  res.render("home");
});

module.exports = home;
