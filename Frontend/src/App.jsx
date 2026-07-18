import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Itinerary from "./pages/Itinerary";
import Loading from "./pages/Loading";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/loading" element={<Loading />} />
      <Route path="/itinerary" element={<Itinerary />} />
    </Routes>
  );
}

export default App;