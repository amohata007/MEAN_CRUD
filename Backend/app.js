const express = require("express");
const userRoutes = require("./routes/user.route");
const app = express();

//Middleware
app.use(express.json());
app.use("/api/users", userRoutes);
module.exports = app;
