"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var teamRoutes = require("./routes/teams");
var teamDetailsRoutes = require("./routes/teamdetails");
var logger = require("./logger/logger");
var app = express();
app.use(function (req, res, next) {
    var method = req.method;
    if (method !== "GET") {
        return res.status(405).end();
    }
    next();
});
app.use("/", teamRoutes);
app.use("/teams", teamDetailsRoutes);
app.use("*", function (_req, res) {
    res.status(404).send("unknown url");
});
app.use(logger);
module.exports = app;
