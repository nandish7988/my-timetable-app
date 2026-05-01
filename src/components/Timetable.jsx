function Timetable({ day, data }) {
  return (
    <div>
      <h2>{day}</h2>

      <table>
        <thead>
          <tr>
            <th>Period</th>
            <th>Subject</th>
          </tr>
        </thead>
        <tbody>
          {data[day].map((sub, i) => (
            <tr key={i}>
              <td>Period {i + 1}</td>
              <td>{sub}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Timetable;