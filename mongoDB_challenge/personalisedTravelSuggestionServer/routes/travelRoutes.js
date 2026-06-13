const express = require("express");
const router = express.Router();
const {
  summer,
  winter,
  monsoon,
  lowBudget,
  mediumBudget,
  highBudget,
} = require("../travelData");

router.get("/", function (req, res) {
  res.status(200).json({
    message: "Welcome to the Personalized Travel Suggestion Server",
  });
});

router.get("/destinations/:season", function (req, res) {
  const season = req.params.season;
  let result = null;
  if (season == "summer") {
    result = summer;
  }
  if (season == "winter") {
    result = winter;
  }
  if (season == "monsoon") {
    result = monsoon;
  }

  if (result != null) {
    return res.status(200).json({
      season: season,
      destinations: result,
    });
  } else {
    return res.json({
      message: "Not provided any season",
    });
  }
});

router.get("/suggestions/budget/:type", function (req, res) {
  let budget = req.params.type;
  let result = null;

  if (budget == "low") {
    result = lowBudget;
  }

  if (budget == "medium") {
    result = mediumBudget;
  }
  if (budget == "high") {
    result = highBudget;
  }

  if (result != null) {
    return res.status(200).json({
      budget: budget,
      suggestions: result,
    });
  }
});

router.get("/destination/random", function (req, res) {
  let allDestination = [...summer, ...winter, ...monsoon];
  let randomDestinationIndex = Math.floor(
    Math.random() * allDestination.length,
  );
//   console.log(randomDestinationIndex);

  if (randomDestinationIndex => 0) {
    return res.status(200).json({
      destination: allDestination[randomDestinationIndex],
    });
  } else {
    return res.status(200).json({
      destination: "",
    });
  }
});

module.exports = router;
