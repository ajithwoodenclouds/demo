import React, { useState } from "react";
// import { ChevronDownIcon } from "@heroicons/react/outline";

const MonthYearPicker = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const years = Array.from(
    { length: 10 },
    (_, i) => new Date().getFullYear() - i
  );

  const [selectedMonth, setSelectedMonth] = useState(
    months[new Date().getMonth()]
  );
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <div
        onClick={() => setOpen(!open)}
        className="flex items-center cursor-pointer text-[#0A0A0A] text-[18px] font-[400] font-interRegular space-x-1"
      >
        <span>
          {selectedMonth}, {selectedYear}
        </span>
        <img src="/image/arrow-down-icon.svg" className="w-5 h-5" />
      </div>

      {open && (
        <div className="absolute z-10 mt-2 w-full bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="p-2">
            <div className="flex flex-col">
              <span className="font-semibold">Month</span>
              <select
                className="mt-1 p-2 rounded border border-gray-300"
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
              >
                {months.map((month) => (
                  <option key={month} value={month}>
                    {month}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col mt-3">
              <span className="font-semibold">Year</span>
              <select
                className="mt-1 p-2 rounded border border-gray-300"
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
              >
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MonthYearPicker;
