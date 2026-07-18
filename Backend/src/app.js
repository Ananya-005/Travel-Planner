const express = require("express");
const cors = require("cors");

const itineraryRoutes = require("./routes/itinerary.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/itinerary", itineraryRoutes);

module.exports = app;