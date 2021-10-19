const express = require("express");
const teamDetailsRouter = express.Router();
const getTeamData = require("../controller/getTeamData");

teamDetailsRouter.get(
  "/:teamName",
  (req:requestType, res: responseType) => {
    const { teamName }= req.params;
    const data = getTeamData(teamName);
    if (data) {
      res.status(200).send(data);
    } else {
      res.status(404).send("Not found");
    }
  }
);

export {};
module.exports = teamDetailsRouter;
