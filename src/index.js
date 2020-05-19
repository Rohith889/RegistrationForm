const express = require("express");
const app = express();
const path = require("path");
const ejs = require("ejs");
const home = require("./routes/home");
app.set("view engine", ".ejs");
app.set("views", path.join(__dirname, "./views"));
app.use("/", home);
const server = app.listen(process.env.PORT, () => {
  console.log("Server Running in port", server.address().port);
});
