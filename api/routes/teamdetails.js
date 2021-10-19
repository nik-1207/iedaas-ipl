"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var teamDetailsRouter = express.Router();
var getTeamData = require("../controller/getTeamData");
teamDetailsRouter.get("/:teamName", function (req, res) {
    var teamName = req.params.teamName;
    var data = getTeamData(teamName);
    if (data) {
        res.status(200).send(data);
    }
    else {
        res.status(404).send("Not found");
    }
});
module.exports = teamDetailsRouter;
