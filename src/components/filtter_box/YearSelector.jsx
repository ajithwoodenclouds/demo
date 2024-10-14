import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const YearSelector = ({
  selectedYear,
  onSelectYear,
  color = 'bg-["#F5F7FA"]',
}) => {
  const [open, setOpen] = useState(false);

  const years = ["This year", "Last year", "2022", "2021"];

  return (
    <div className="relative z-10 ">
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center justify-between text-[16px] border  w-[140px] rounded-md px-4 ${color} py-2 `}
      >
        <span>{selectedYear}</span>
        {open ? (
          <FiChevronUp className="text-[21px]" />
        ) : (
          <FiChevronDown className=" text-[21px]" />
        )}
      </button>
      {open && (
        <div className="absolute mt-2 w-[150px] ml-[-89px] bg-white border border-gray-300 rounded-md shadow-lg">
          {years.map((year) => (
            <div
              key={year}
              onClick={() => {
                onSelectYear(year);
                // setOpen(false);
              }}
              className="flex items-center cursor-pointer px-4 py-2 text-[#717578]"
            >
              {selectedYear === year ? (
                <img
                  src="/image/rounded_chek_light.svg"
                  className="mr-[5px]"
                  alt="icon"
                />
              ) : (
                <img
                  src="/image/rounde_check_icon.svg"
                  className="mr-[5px]"
                  alt="icon"
                />
              )}
              <span>{year}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default YearSelector;
