const express = require("express");
const mongoose = require("mongoose");
const passport = require('passport');
const bodyParser = require("body-parser");
const morgan = require("morgan");
const authRoutes = require("./routes/auth");
const profileRoutes = require("./routes/profile");
const newsRoutes = require("./routes/news");
const friendsRoutes = require("./routes/friends");
const keys = require("./config/keys");

const app = express(keys.mongoURI);

mongoose.connect(keys.mongoURI).then(
  () => console.log("MongoDB connected"),
  error => console.log(error)
);

app.use(passport.initialize());
require('./middleware/passport')(passport);

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(require("cors")());

app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/news", newsRoutes);
app.use("/api/friends", friendsRoutes);

module.exports = app;
