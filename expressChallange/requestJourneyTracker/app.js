const express = require("express");
const app = express();
const middlewares = require("./middleware/globleMiddlewares");
app.use(express.json());
app.use(middlewares.attachRequestId);
app.use(middlewares.startTimer);
app.use(middlewares.journeyTracker);

app.get("/journey",middlewares.routeTagger, function (req, res) {
  res.json({
    requestId: req.requestId,
    method: req.method,
    path: req.path,
    journey: req.journey,
    durationMs: Date.now() - req.startTimer,
  });
});


app.use(function (req, res) {
  res.status(404).json({
    status: "error",
    message: "Not Found"
  });
});


app.listen(3000,function(){
    console.log("Server is  runnning on port number 3000");
    
})