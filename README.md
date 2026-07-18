# AI Travel Itinerary Planner ✈️🌍

An AI-powered travel planner that generates personalized multi-day itineraries based on the user's destination, travel dates, budget, travel style, and preferences.

## Features

- 🤖 AI-generated travel itineraries
- 📅 Multi-day trip planning
- 💰 Budget-based recommendations
- 👥 Travel style selection (Solo, Friends, Couple, Family)
- 📝 Custom trip description input
- 📍 Personalized attractions and activities
- ✏️ Edit itinerary by:
  - Removing stops
  - Moving activities up/down
- ⏳ AI loading screen with progress messages
- 🎨 Responsive and modern UI

---

## Tech Stack

### Frontend
- React.js
- Tailwind CSS
- React Router
- Axios

### Backend
- Node.js
- Express.js

### AI
- Google Gemini API

---

## Setup

### 1. Clone the repository

```bash
git clone <repository-url>
cd ai-travel-planner
```

### 2. Install dependencies

Frontend

```bash
cd frontend
npm install
```

Backend

```bash
cd backend
npm install
```

### 3. Configure environment variables

Create a `.env` file inside the backend.

```env
GEMINI_API_KEY=YOUR_API_KEY
PORT=3000
```

### 4. Start the backend

```bash
npm run dev
```

### 5. Start the frontend

```bash
npm run dev
```

Open

```
http://localhost:5173
```

---

## Usage

1. Enter a trip description.
2. Select travel dates.
3. Choose your travel style.
4. Choose your budget.
5. Click **Generate Itinerary**.
6. Wait while the AI creates your itinerary.
7. View, reorder, or remove activities.

---

## AI Usage

This project uses the Google Gemini API to generate personalized travel itineraries.

The AI considers:

- Destination
- Travel duration
- Budget
- Travel style
- User preferences

It returns a structured itinerary containing:

- Trip summary
- Daily plans
- Attractions
- Suggested activities
- Time-based schedule

---

## Limitations

- AI recommendations may occasionally contain inaccurate or outdated information.
- Attractions are generated dynamically and are not verified in real time.
- No authentication or user accounts.
- Generated itineraries are not permanently saved.
- Internet connection is required for AI generation.

---

## Time Spent

Approximate development time:

| Task | Time |
|------|------|
| UI Design | 3 hours |
| Frontend Development | 4 hours |
| Backend API | 2 hours |
| Gemini Integration | 2 hours |
| Testing & Debugging | 3 hours |

**Total:** ~14 hours

---

## Future Improvements

- Save itineraries
- User authentication
- Maps integration
- Weather forecast
- Hotel recommendations
- Export itinerary as PDF
- Share itinerary via link

---
