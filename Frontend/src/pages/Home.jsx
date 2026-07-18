import React from 'react'
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
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

          <div className="flex flex-wrap gap-3">

            {/* <input
              type="date"
              className="rounded-xl px-4 py-2 bg-white border"
            />
            <input
              type="date"
              className="flex-1 rounded-xl px-4 py-2 bg-white border"
            /> */}

            <select className="rounded-xl px-4 py-2 bg-white border">
              <option>Friends</option>
              <option>Solo</option>
              <option>Couple</option>
              <option>Family</option>
            </select>

            <select className="rounded-xl px-4 py-2 bg-white border">
              <option>Medium Budget</option>
              <option>Low Budget</option>
              <option>Luxury</option>
            </select>

          </div>
        </div>

        <button
          onClick={() => navigate("/itinerary")}
          className="mt-8 w-full rounded-2xl bg-[#5D8B5A] py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-[#4F7750] hover:shadow-lg hover:-translate-y-1 active:translate-y-0 cursor-pointer">
          Generate Itinerary ✈️
        </button>
      </div>
    </div>
  );
}