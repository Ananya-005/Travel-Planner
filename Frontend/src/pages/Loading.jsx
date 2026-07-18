import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Loading() {
  const location = useLocation();
  const navigate = useNavigate();

  const formData = location.state;

  const messages = [
    "🌍 Understanding your preferences...",
    "🏝 Finding hidden gems...",
    "📅 Creating the perfect schedule...",
    "✨ Almost done..."
  ];

  const [step, setStep] = useState(0);

  useEffect(() => {
    const generate = async () => {
      try {
        const res = await axios.post(
          "http://localhost:3000/api/itinerary/generate",
          formData
        );

        navigate("/itinerary", {
          state: res.data.data,
        });
      } catch (err) {
        console.log(err);
      }
    };

    generate();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => {
        if (prev < messages.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F7F9F2]">
      <div className="text-6xl animate-bounce">✈️</div>

      <h1 className="mt-8 text-3xl font-bold text-[#36523C]">
        Planning your trip...
      </h1>

      <div className="mt-8 space-y-4">
        {messages.slice(0, step + 1).map((msg, index) => (
          <p
            key={index}
            className="text-lg text-[#4B6A50] font-medium"
          >
            {msg}
          </p>
        ))}
      </div>
    </div>
  );
}