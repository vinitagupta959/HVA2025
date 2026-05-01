const express = require("express");
const app = express();
app.use(express.json());

let memory = [];
let incrementId = 0;

app.get("/ping", function (req, res) {
  if (!req.query.token) {
    return res.status(400).json({
       ok: false, 
       message: "token is required" });
  }

  if (req.query.token !== "123") {
    return res.status(403).json({
      ok: false,
      message: "Invalid token",
    });
  }

  res.status(200).json({
    ok: true,
    message: "pong",
  });
});

app.post("/requests", function (req, res) {
  if (!req.is("application/json")) {
    return res.status(415).json({
      ok: false,
      message: "Content-Type must be application/json",
    });
  }

  if (
    !req.body.title ||
    typeof req.body.title !== "string" ||
    req.body.title.trim() === ""
  ) {
    return res.status(422).json({
      ok: false,
      message: "Title is required",
    });
  }
  incrementId++;
  const id = `REQ-${incrementId}`;
  const newRequest = { id, title: req.body.title };
  memory.push(newRequest);
  res.status(201).json({
    ok: true,
    id: id,
    stored: newRequest,
  });
});

app.put("/requests/:id", function (req, res) {
  if (!req.headers["x-client"]) {
    return res.status(400).json({
      ok: false,
      message: "Header is required",
    });
  }
  if (req.headers["x-client"] !== "postman") {
    return res.status(403).json({
      ok: false,
      message: "Invalid client",
    });
  }
  let id = req.params.id;
  let item = memory.find(function (item) {
    return item.id === id;
  });
  if (!item) {
    return res.status(404).json({
      ok: false,
      message: "Not found",
    });
  }
  if (
    !req.body.title ||
    typeof req.body.title !== "string" ||
    req.body.title.trim() === ""
  ) {
    return res.status(422).json({
      ok: false,
      message: "Title is required",
    });
  }
  item.title = req.body.title;
  return res.status(200).json({
  "ok": true,
  "updated": { "id": item.id, "title": item.title }
});
});


app.get("/requests/:id", function (req, res) {
  const authHeader = req.headers["authorization"];

  if (!authHeader) {
    return res.status(401).json({
      ok: false,
      message: "Authorization is required",
    });
  }

  if (authHeader !== "Bearer demo-token") {
    return res.status(403).json({
      ok: false,
      message: "Invalid Authorization",
    });
  }

  const id = req.params.id;
  const item = memory.find((item) => item.id === id);

  if (!item) {
    return res.status(404).json({
      ok: false,
      message: "Not found",
    });
  }

  return res.status(200).json({
    ok: true,
    data: item,
  });
});

app.listen(3000, function () {
  console.log("Server is running on the port number 3000");
});
