// src/components/CalendarTable.jsx
import React from "react";

// Sample calendar data for demonstration
const calendarData = [
  {
    date: "Sep - 01",
    entries: [
      "James Kottackal",
      "Kathy Pacheco",
      "Stephanie Nicol",
      "David Elson",
    ],
  },
  { date: "Sep - 02", entries: ["James Kottackal", "Stephanie Nicol"] },
  {
    date: "Sep - 03",
    entries: ["James Kottackal", "Stephanie Nicol", "David Elson"],
  },
  { date: "Sep - 04", entries: ["James Kottackal", "Kathy Pacheco"] },
  { date: "Sep - 05", entries: ["Stephanie Nicol"] },
  { date: "Sep - 06", entries: ["David Elson"] },
  { date: "Sep - 07", entries: ["James Kottackal", "Stephanie Nicol"] },
  { date: "Sep - 08", entries: ["David Elson"] },

  // Add more dates as needed
];

// Calculate maximum number of entries per day
const maxEntriesPerDay = Math.max(
  ...calendarData.map((day) => day.entries.length)
);

// Split calendar data into weekly segments
const calendarWeeks = [];
for (let i = 0; i < calendarData.length; i += 7) {
  calendarWeeks.push(calendarData.slice(i, i + 7));
}

// Define color classes for specific entries
const entryColorClasses = {
  "Kathy Pacheco": "bg-orange-100 text-orange-600",
  "Stephanie Nicol": "bg-blue-100 text-blue-600",
  default: "bg-green-100 text-green-600",
};

const CalendarTable = ({ onClick }) => {
  return (
    <div className="overflow-x-auto p-4">
      <table className="min-w-full table-fixed border-collapse border border-gray-200">
        <tbody>
          {calendarWeeks.map((week, weekIndex) => (
            <React.Fragment key={weekIndex}>
              {/* Header row for dates */}
              <tr>
                {week.map((day, index) => (
                  <th
                    key={index}
                    className="border border-gray-200 bg-gray-50 text-gray-700 p-2 text-sm text-center"
                  >
                    {day.date}
                  </th>
                ))}
              </tr>
              {/* Rows for entries */}
              {[...Array(maxEntriesPerDay)].map((_, rowIndex) => (
                <tr key={rowIndex}>
                  {week.map((day, colIndex) => (
                    <td
                      onClick={() => onClick(day.entries[rowIndex])}
                      key={colIndex}
                      className={`border-gray-200 px-2 py-1 ${
                        rowIndex === maxEntriesPerDay - 1
                          ? "border-b  border-r"
                          : "border-r"
                      }`}
                    >
                      {day.entries[rowIndex] ? (
                        <div
                          className={`text-sm p-1 rounded-md ${
                            entryColorClasses[day.entries[rowIndex]] ||
                            entryColorClasses.default
                          }`}
                        >
                          {day.entries[rowIndex]}
                        </div>
                      ) : (
                        <div className="p-1">&nbsp;</div> // Empty cell for missing entries
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CalendarTable;
