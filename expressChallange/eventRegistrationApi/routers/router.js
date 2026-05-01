const express = require("express");
const router = express.Router();

let events = [];
let registrations = [];

router.post("/events", function (req, res) {
  let errors = [];
  if (!req.body.name) {
    errors.push("Name is required");
  }
  if (typeof req.body.name != "string") {
    errors.push("Name must be a string");
  }

  if (!req.body.date) {
    errors.push("Date is required");
  }
  if (typeof req.body.date != "string") {
    errors.push("Date must be a string");
  }
  if (!req.body.location) {
    errors.push("Location is required");
  }
  if (typeof req.body.location != "string") {
    errors.push("Location must be a string");
  }

  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      errors: errors,
      message: "Validation failed",
    });
  } else {
    let newEvent = {
      id: events.length + 1,
      name: req.body.name,
      date: req.body.date,
      location: req.body.location,
    };
    events.push(newEvent);
    res.status(201).json({
      success: true,
      data: newEvent,
      message: "New Event added.",
    });
  }
});

router.get("/events", function (req, res) {
  res.status(200).json({
    success: true,
    data: events,
    message: "All events fetched",
  });
});

router.post("/registrations", function (req, res) {
  let errors = [];
  if (!req.body.participantName) {
    errors.push("Participant Name is required");
  }
  if (typeof req.body.participantName != "string") {
    errors.push("Participant name must be a string");
  }

  if (!req.body.email) {
    errors.push("Email is required");
  }
  if (typeof req.body.email != "string") {
    errors.push("Email must be a string");
  }
  if (!req.body.eventId) {
    errors.push("Event Id  is required");
  }

  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      errors: errors,
      message: "Validation failed",
    });
  } else {
    let newRegistration = {
      participantName: req.body.participantName,
      email: req.body.email,
      eventId: req.body.eventId,
    };
    registrations.push(newRegistration)
    res.status(201).json({
      success: true,
      data: newRegistration,
      message: "New Registration.",
    });
  }
});

router.get('/registrations',function(req,res){
    res.status(200).json({
    success: true,
    data: registrations,
    message: "All registrations fetched",
  });
})




module.exports = router;
