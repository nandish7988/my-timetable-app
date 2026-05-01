import { useState } from "react";
import timetable from "./data/timetableData.js";
import DaySelector from "./components/DaySelector.jsx";
import Timetable from "./components/Timetable.jsx";
import "./App.css";

function App() {
  const [selectedDay, setSelectedDay] = useState("Monday");

  return (
    <div className="container">
      <h1>📅 College Timetable</h1>

      <DaySelector
        days={Object.keys(timetable)}
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
      />

      <Timetable day={selectedDay} data={timetable} />
    </div>
  );
}

export default App;