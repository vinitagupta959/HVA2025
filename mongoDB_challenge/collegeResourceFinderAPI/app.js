const express = require("express");
const router = require("./routes/resourcesRoutes");
const app = express();

app.use(express.json());
app.use(router);
app.listen(3000, function () {
  console.log("Server is running on porn number 3000");
});
