const { generateTripItinerary } = require("../services/gemini.service");

const generateItinerary = async (req, res) => {
  try {
    const {
      description,
      startDate,
      endDate,
      budget,
      travelStyle,
    } = req.body;

    if (!description) {
      return res.status(400).json({
        success: false,
        message: "Trip description is required.",
      });
    }

    const itinerary = await generateTripItinerary({
      description,
      startDate,
      endDate,
      budget,
      travelStyle,
    });

    return res.status(200).json({
      success: true,
      data: itinerary,
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to generate itinerary.",
    });
  }
};

module.exports = {
  generateItinerary,
};