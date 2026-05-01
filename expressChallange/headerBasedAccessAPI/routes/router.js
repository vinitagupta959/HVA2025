const express = require("express");
const router = express.Router();
const {authValidation,checkAuthorization}=require('../middleware/authmiddleware')
let notes = [];

router.get("/public", function (req, res) {
  res.status(200).json({
    message: "This is public",
  });
});

router.get("/secure", checkAuthorization,function (req, res) {
  res.status(200).json({
    ok: true,
    message: "Access granted",
  });
});

router.post("/notes",authValidation, function (req, res) {
  
  if (!req.body.text || req.body.text.trim() === "") {
    return res.status(422).json({
      ok: false,
      message: "Text is required",
    });
  }
    let counter=notes.length+1
  const note = {
     id: counter,
    text: req.body.text,
  };
  notes.push(note)

  return res.status(201).json({
    ok: true,
    created: note,
  });
});


router.get('/notes',authValidation,function(req,res){
    res.status(200).json({
        "ok":true,
        "count":notes.length,
        "notes":notes
    })
})

module.exports=router