"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var teamRouter = express.Router();
var data = [
    {
        id: "chennai-super-kings",
        teamName: "Chennai Super Kings",
        winningYears: [2010, 2011, 2018],
        venue: "M. A. Chidambaram Stadium",
    },
    {
        id: "delhi-capitals",
        teamName: "Delhi Capitals",
        winningYears: [],
        venue: "Feroz Shah Kotla Ground",
    },
    {
        id: "kings-xi-punjab",
        teamName: "Kings XI Punjab",
        winningYears: [],
        venue: "IS Bindra Stadium",
    },
    {
        id: "kolkata-knight-riders",
        teamName: "Kolkata Knight Riders",
        winningYears: [2012, 2014],
        venue: "Eden Gardens",
    },
    {
        id: "mumbai-indians",
        teamName: "Mumbai Indians",
        winningYears: [2013, 2015, 2017, 2019],
        venue: "Wankhede Stadium",
    },
    {
        id: "rajasthan-royals",
        teamName: "Rajasthan Royals",
        winningYears: [2008],
        venue: "Sawai Mansingh Stadium",
    },
    {
        id: "royal-challengers-bangalore",
        teamName: "Royal Challengers Bangalore",
        winningYears: [],
        venue: "M. Chinnaswamy Stadium",
    },
    {
        id: "sunrisers-hyderabad",
        teamName: "Sunrisers Hyderabad",
        winningYears: [2016],
        venue: "Rajiv Gandhi Intl. Cricket Stadium",
    },
];
teamRouter.get("/teams", function (_req, res) {
    return res.status(200).send(data);
});
module.exports = teamRouter;
