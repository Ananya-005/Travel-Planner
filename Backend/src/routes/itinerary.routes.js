const express = require("express");
const { generateItinerary } = require("../controllers/itinerary.controller");

const router = express.Router();

router.post("/generate", generateItinerary);

module.exports = router;