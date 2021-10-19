const fs = require("fs");

const logger = (
  req:requestType,
  next:()=>void
) => {
  const date = new Date();
  const data =
    date.toLocaleString("en-US") +
    "       " +
    req.method +
    "       " +
    req.url +
    "       " +
    req.statusCode +
    "\n";
    const handler:(err:unknown)=>void=(err:unknown)=>{
      fs.appendFile("./log.txt",err,handler)
    }
  fs.appendFile("./log.txt", data, (err:unknown) => {
    if (err) handler(err);
  });
  next();
};
module.exports = logger;
