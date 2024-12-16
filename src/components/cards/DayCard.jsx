// DayCard.jsx
import React from "react";

const DayCard = ({ date, entries }) => {
  const daysData = [
    {
      date: "Sep - 01",
      entries: [
        { name: "James Kottackal", colorClass: "bg-green-100" },
        { name: "Kathy Pacheco", colorClass: "bg-orange-100" },
      ],
    },
    {
      date: "Sep - 02",
      entries: [
        { name: "James Kottackal", colorClass: "bg-green-100" },
        { name: "Stephanie Nicol", colorClass: "bg-green-100" },
      ],
    },
  ];
  return (
    <div className="border p-2 rounded-lg">
      <p className="text-sm font-medium text-gray-500">{date}</p>
      <div className=" space-y-1 mt-1">
        {entries.map((entry, index) => (
          <p
            key={index}
            className={`p-1 rounded-md text-center ${entry.colorClass}`}
          >
            {entry.name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default DayCard;
