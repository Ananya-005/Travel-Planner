const { GoogleGenAI,Type } = require("@google/genai");
const { z } = require("zod");
const { zodToJsonSchema } = require("zod-to-json-schema");

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});

const itinerarySchema = z.object({
  destination: z.string(),

  tripSummary: z.string(),

  dates: z.string(),

  budget: z.string(),

  travelStyle: z.string(),

  interests: z.array(z.string()),

  days: z.array(
    z.object({
      day: z.number(),

      emoji: z.string(),

      stops: z.array(
        z.object({
          time: z.string(),

          place: z.string(),

          description: z.string(),
        })
      ),
    })
  ),
});

const GeminiItinerarySchema = {
  type: Type.OBJECT,

  properties: {
    destination: {
      type: Type.STRING,
      description: "The destination of the trip."
    },

    tripSummary: {
      type: Type.STRING,
      description: "A short summary of the trip."
    },

    dates: {
      type: Type.STRING,
      description: "Trip duration or date range."
    },

    budget: {
      type: Type.STRING,
      description: "Budget category of the trip."
    },

    travelStyle: {
      type: Type.STRING,
      description: "Travel style such as Solo, Family, Friends, Couple, Luxury, Adventure etc."
    },

    interests: {
      type: Type.ARRAY,
      description: "List of interests considered while generating the itinerary.",
      items: {
        type: Type.STRING
      }
    },

    days: {
      type: Type.ARRAY,
      description: "Complete day-wise itinerary.",
      items: {
        type: Type.OBJECT,

        properties: {
          day: {
            type: Type.NUMBER,
            description: "Day number starting from 1."
          },

          emoji: {
            type: Type.STRING,
            description: "A suitable emoji representing the day."
          },

          stops: {
            type: Type.ARRAY,
            description: "List of places to visit during the day.",

            items: {
              type: Type.OBJECT,

              properties: {
                time: {
                  type: Type.STRING,
                  description: "Morning, Afternoon or Evening."
                },

                place: {
                  type: Type.STRING,
                  description: "Name of the place."
                },

                description: {
                  type: Type.STRING,
                  description: "Short description of the activity or place."
                }
              },

              required: [
                "time",
                "place",
                "description"
              ]
            }
          }
        },

        required: [
          "day",
          "emoji",
          "stops"
        ]
      }
    }
  },

  required: [
    "destination",
    "tripSummary",
    "dates",
    "budget",
    "travelStyle",
    "interests",
    "days"
  ]
};

const generateTripItinerary = async (userData) => {

    const {
        description,
        startDate,
        endDate,
        budget,
        travelStyle
    } = userData;

    const prompt = `
You are an expert travel planner.

Generate a personalized and practical travel itinerary based on the user's preferences.

User Details:

Trip Description:
${description}

Start Date:
${startDate || "Not specified"}

End Date:
${endDate || "Not specified"}

Budget:
${budget || "Not specified"}

Travel Style:
${travelStyle || "Not specified"}

Instructions:
- Generate a realistic day-by-day itinerary.
- Each day must contain exactly three stops:
  1. Morning
  2. Afternoon
  3. Evening
- Recommend attractions, restaurants, landmarks, activities, or experiences suitable for the user's interests.
- Keep descriptions concise (1-2 sentences).
- Make the itinerary balanced without rushing between distant places.
- If dates are provided, calculate the correct number of days.
- If dates are not provided, infer a reasonable trip duration from the description.
- Generate a short and engaging trip summary.
- Return the destination name, trip summary, dates, budget, travel style, interests, and the complete itinerary.
- Choose an appropriate emoji for each day.

Return ONLY valid JSON matching the provided schema.
Do not include markdown, explanations, or additional text.
`;  

    const response = await ai.models.generateContent({
        model: "gemini-flash-latest",
        contents: prompt,
        config: {
            responseMimeType: "application/json",
            responseSchema: GeminiItinerarySchema
        }
    });

   const parsed = JSON.parse(response.text);

const itinerary = itinerarySchema.parse(parsed);

return itinerary;
};

module.exports = {
    generateTripItinerary
};