// const { log } = require("console");
// const express = require("express");
// const fs = require("fs");
// const app = express();
// const path = require("path");
// let feedbacks = [];
// // app.use(express.json());




// function feedbackFormRes (req, res) {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// }

// function storeFeedback(req, res) {
//   let body = "";
//   req.on("data", function (chunk) {
//     body += chunk.toString();
//   });
//   req.on("end", function () {
//     const filePath = path.join(__dirname, "data", "feedbackData.json");
//     const feedbackText = body
//     fs.readFile(filePath, "utf-8", function (err, data) {
//       if (!err && data) {
//         feedbacks = JSON.parse(data);
//       }
//       const newFeedback = {
//         id: feedbacks.length + 1,
//         feedback: feedbackText,
//       };
//       feedbacks.push(newFeedback);
//       fs.writeFile(filePath, JSON.stringify(feedbacks),
//         function (err) {
//           if (err) {
//             return res.status(500).send("Error saving file");
//           }
//           res.json({
//             "message": "Feedback received"
//           })
//         },
//       );
//     });
//   });
// }


// function findingFeedback(req, res) {
//   const filePAth = path.join(__dirname, "data", "feedbackData.json");

//   let id = req.params.id * 1;
//   fs.readFile(filePAth, "utf-8", function (err, data) {
//     if (err) {
//       return res.status(500).json({ error: "File read error" });
//     }
//     let feedbacks = [];
//     if (data) {
//       feedbacks = JSON.parse(data);
//     }
//     const feedback = feedbacks.find(function (feedback) {
//       return feedback.id === id;
//     });
//     if (!feedback) {
//       return res.status(404).json({ error: "Feedback not found" });
//     }
//     res.json(feedback);
//   });
// }
// app.get("/feedback-form",feedbackFormRes );

// app.post("/feedback",storeFeedback);

// app.get("/feedback/:id", findingFeedback);

// app.listen(3000, function () {
//   console.log("Hello from server");
// });



const express=require('express');
const path=require('path')
const app=express();
const PORT=3000;

let feedbacks=[];
app.use(express.urlencoded({ extended: false }));

app.get('/feedback-form',function(req,res){
  res.sendFile(path.join(__dirname,'public','index.html'));
})

app.get('/feedback',function(req,res){
  res.json({feedbacks})
})
app.post('/feedback',function(req,res){
  const text=req.body.text;
  console.log(text)
  feedbacks.push(text);
  res.json({
  "message": "Feedback received"
})
})

app.get('/feedback/:index',function(req,res){
  const index=req.params.index*1
  if(index<0 || feedbacks.length<=index){
    return res.status(404).json({
  "error": "Feedback not found"
})
  }

  res.json(feedbacks[index])
})


app.listen(PORT,function(){
  console.log("Server running on port 3000")
})