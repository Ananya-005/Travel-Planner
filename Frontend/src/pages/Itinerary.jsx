import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { useLocation } from "react-router-dom";


export default function Itinerary() {
  const navigate = useNavigate();
  const location = useLocation();
const trip = location.state;
  const [openDay, setOpenDay] = useState(1);
  if (!trip) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#36523C]">
            No itinerary found
          </h2>

          <p className="text-gray-500 mt-2">
            Generate a new itinerary to continue.
          </p>

          <button
            onClick={() => navigate("/")}
            className="mt-5 rounded-xl bg-[#5D8B5A] px-6 py-3 text-white"
          >
            Back Home
          </button>
        </div>
      </div>
    );
  }


  return (
    <div className="min-h-screen bg-[#F7F9F2] flex justify-center py-10 px-6">
      <div className="w-full max-w-3xl rounded-3xl bg-[#E7F5D8] p-8 shadow-xl">

        {/* Header */}

        <h1 className="text-4xl font-bold text-[#36523C]">
          ☀️ {trip.destination}
        </h1>

        <p className="mt-2 text-[#5D6E5A]">
          {trip.dates}
        </p>

        {/* Trip Summary */}

        <div className="mt-6 rounded-2xl bg-white p-5 shadow-sm">

          <h2 className="font-semibold text-[#36523C] text-lg">
            Trip Summary
          </h2>

          <div className="mt-4 grid grid-cols-2 gap-3 text-[#4B5C48]">

            <p>📅 {trip.dates}</p>

            <p>👥 {trip.travelStyle}</p>

            <p>💰 {trip.budget}</p>

            <p>📍 {trip.destination}</p>

          </div>

          <div className="flex gap-2 flex-wrap mt-4">
            {trip.interests.map((interest) => (
              <span
                key={interest}
                className="rounded-full bg-green-100 px-3 py-1 text-sm"
              >
                {interest}
              </span>
            ))}
          </div>

        </div>

        {/* Days */}

        <div className="mt-8 space-y-5">

          {trip.days.map((day) => (

            <div
              key={day.day}
              className="rounded-2xl bg-white p-6 shadow-sm"
            >

              {/* Accordion Header */}

              <button
                onClick={() =>
                  setOpenDay(openDay === day.day ? null : day.day)
                }
                className="w-full flex justify-between items-center cursor-pointer"
              >

                <h2 className="text-2xl font-semibold text-[#36523C]">
                  Day {day.day} {day.emoji}
                </h2>

                <ChevronDown
                  className={`transition-transform duration-300 ${
                    openDay === day.day ? "rotate-180" : ""
                  }`}
                />

              </button>

              {/* Accordion Body */}

              {openDay === day.day && (

                <div className="mt-6 space-y-5">

                  {day.stops.map((stop, index) => (

                    <div
                      key={index}
                      className="border-l-4 border-[#98C48C] pl-4">

                      <p className="text-sm font-semibold text-[#5D8B5A]">
                        {stop.time}
                      </p>

                      <h3 className="mt-1 text-lg font-medium text-[#36523C]">
                        {stop.place}
                      </h3>

                      <p className="mt-1 text-sm text-gray-500">
                        {stop.description}
                      </p>

                      <div className="mt-4 flex gap-3">
                        <button className="rounded-lg bg-red-100 px-3 py-2 text-sm text-red-700 transition hover:bg-red-200 cursor-pointer">
                          🗑 Remove
                        </button>

                        <button className="rounded-lg bg-green-100 px-3 py-2 text-sm text-[#36523C] transition hover:bg-green-200 cursor-pointer">
                          ⬆ Move Up
                        </button>

                        <button className="rounded-lg bg-green-100 px-3 py-2 text-sm text-[#36523C] transition hover:bg-green-200 cursor-pointer">
                          ⬇ Move Down
                        </button>
                      </div>
                    </div>

                  ))}

                </div>

              )}

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}
