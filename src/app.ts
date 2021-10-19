const express = require("express");
const teamRoutes = require("./routes/teams");
const teamDetailsRoutes = require("./routes/teamdetails");
const logger = require("./logger/logger");
const helmet=require('helmet')
const app = express();

app.use(helmet())
app.use((req: requestType, res: responseType, next: ()=>void) => {
  const { method } = req;
  if (method !== "GET") {
    return res.status(405);
  }
  next();
});
app.use("/", teamRoutes);
app.use("/teams", teamDetailsRoutes);
app.use("*", function (_req: requestType, res: responseType) {
  res.status(404).send("unknown url");
});
app.use(logger);
module.exports=app
export {};
