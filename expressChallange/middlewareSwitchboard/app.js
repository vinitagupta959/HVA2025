const express = require("express");
const app = express();
const PORT = 3000;
const switchboard = require("./middleware/switchboard");
app.get(
  "/switch",
  switchboard.methodMiddleware,
  switchboard.queryMiddleware,
  switchboard.specialMiddleware,
  function (req, res) {
    res.json({
      route: "/switch",
      log: req.switchLog,});
  })

app.listen(PORT, function () {
  console.log("Server is running on 3000 Port");
});
