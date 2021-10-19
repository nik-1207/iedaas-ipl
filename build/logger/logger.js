"use strict";
var fs = require("fs");
var logger = function (req, next) {
    var date = new Date();
    var data = date.toLocaleString("en-US") +
        "       " +
        req.method +
        "       " +
        req.url +
        "       " +
        req.statusCode +
        "\n";
    var handler = function (err) {
        fs.appendFile("./log.txt", err, handler);
    };
    fs.appendFile("./log.txt", data, function (err) {
        if (err)
            handler(err);
    });
    next();
};
module.exports = logger;
