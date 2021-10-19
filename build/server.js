"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var log = require('debug');
log("starting app");
var app = require('./app');
var config = require('dotenv');
config.config();
app.listen(process.env.PORT);
