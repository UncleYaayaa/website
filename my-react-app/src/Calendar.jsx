import React, { useState } from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  isSameMonth,
  isSameDay,
} from "date-fns";

function Calendar() {
  // State for managing the current date
  const [currentDate, setCurrentDate] = useState(new Date());

  // Function to render the calendar grid
  const renderCalendarGrid = () => {
    const firstDayOfMonth = startOfMonth(currentDate);
    const lastDayOfMonth = endOfMonth(currentDate);
    const startDate = startOfWeek(firstDayOfMonth);
    const endDate = endOfWeek(lastDayOfMonth);

    const rows = [];
    let days = [];
    let day = startDate;

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        days.push(
          <div
            className={`calendar-day ${
              !isSameMonth(day, firstDayOfMonth) ? "disabled" : ""
            } ${isSameDay(day, currentDate) ? "selected" : ""}`}
            key={day}
          >
            {format(day, "d")}
            {/* You can add task indicators or other content here */}
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="calendar-row" key={day}>
          {days}
        </div>
      );
      days = [];
    }

    return <div className="calendar-grid">{rows}</div>;
  };

  // Function to handle navigation to the previous month
  const goToPreviousMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1)
    );
  };

  // Function to handle navigation to the next month
  const goToNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1)
    );
  };

  return (
    <div className="calendar">
      <div className="month-header">
        <button onClick={goToPreviousMonth}>Previous</button>
        <h2>
          {currentDate.toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}
        </h2>
        <button onClick={goToNextMonth}>Next</button>
      </div>
      {/* Render the calendar grid */}
      <div className="calendar-grid">{renderCalendarGrid()}</div>
    </div>
  );
}

export default Calendar;