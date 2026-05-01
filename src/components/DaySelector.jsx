function DaySelector({ days, selectedDay, setSelectedDay }) {
  return (
    <div className="day-buttons">
      {days.map((day) => (
        <button
          key={day}
          onClick={() => setSelectedDay(day)}
          className={selectedDay === day ? "active-day" : ""}
        >
          {day}
        </button>
      ))}
    </div>
  );
}

export default DaySelector;