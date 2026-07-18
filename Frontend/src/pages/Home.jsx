import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [travelStyle, setTravelStyle] = useState("Friends");
  const [budget, setBudget] = useState("Medium");

  const generateItinerary = async () => {
    navigate("/loading", {
  state: {
    description,
    startDate,
    endDate,
    budget,
    travelStyle,
  },
});
  };
  return (
    
    <div className="relative overflow-hidden min-h-screen bg-[#F5F8EE] flex items-center justify-center px-6">

      {/* Background Blobs */}
      {/* Top Left */}
<div className="absolute top-32 left-72 h-72 w-72 rounded-full bg-yellow-300 blur-[120px] opacity-50"></div>

{/* Bottom Right */}
<div className="absolute bottom-20 right-72 h-80 w-80 rounded-full bg-sky-300 blur-[120px] opacity-40"></div>

      {/* Main Card */}
      <div className="relative z-10 w-full max-w-xl rounded-3xl bg-[#CFE8B4] p-8 shadow-xl border-4 border-white">

        <div className="text-center">
          <h1 className="text-5xl">☀️</h1>

          <h2 className="text-3xl font-bold text-[#36523C] mt-2">
            Plan your next adventure
          </h2>

          <p className="text-[#4B6A50] mt-2">
            Describe your dream trip and let AI build your itinerary.
          </p>
        </div>

        <div className="mt-8">
          <label className="font-semibold text-[#36523C]">
            Trip Description *
          </label>

          <textarea
                rows={7}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full mt-2 rounded-2xl p-4 outline-none bg-[#FFFDF8] border-2 border-[#9BBF86] resize-none"
                placeholder={`Example:
              I'm planning a 5-day trip to Bali next month.

              Budget around ₹60,000.

              Travelling with friends.

              Love beaches, cafes and sunsets.`}
              />
        </div>

        <div className="mt-6">
          <p className="font-semibold text-[#36523C] mb-3">
            Additional Preferences
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
            <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-800">
                  Travel Dates
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                      Start Date
                    </label>

                    <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-300"
                  />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                      End Date
                    </label>

                    <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-300"
                  />
                  </div>
                </div>
              </div>

            <select
              value={travelStyle}
              onChange={(e) => setTravelStyle(e.target.value)}
              className="h-11 w-full rounded-xl border border-gray-300 bg-white px-4 shadow-sm"
            >
              <option value="Friends">Friends</option>
              <option value="Solo">Solo</option>
              <option value="Couple">Couple</option>
              <option value="Family">Family</option>
            </select>

           <select
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="h-11 w-full rounded-xl border border-gray-300 bg-white px-4 shadow-sm"
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="Luxury">Luxury</option>
          </select>

          </div>
        </div>

        <button onClick={generateItinerary}
          className="mt-8 w-full rounded-2xl bg-[#5D8B5A] py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-[#4F7750] hover:shadow-lg hover:-translate-y-1 active:translate-y-0 cursor-pointer">
          Generate Itinerary ✈️
        </button>
      </div>
    </div>
  );
}