import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const DateSelector = ({
  selectedDate,
  onSelectDate,
  color = "bg-[#FFFFFF]",
}) => {
  const [open, setOpen] = useState(false);
  const [customDate, setCustomDate] = useState({ startDate: "", endDate: "" });

  const DateOptions = ["Today", "Yesterday", "Pick Date"];

  const handleCustomDateChange = (e) => {
    setCustomDate({
      ...customDate,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="relative z-10">
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center justify-center text-[16px] border w-fit rounded-[20px] px-4 ${color} py-2`}
      >
        <span>{selectedDate}</span>
        {/* {open ? (
          <FiChevronUp className="text-[21px]" />
        ) : (
          <FiChevronDown className="text-[21px]" />
        )} */}
      </button>
      {open && (
        <div className="absolute mt-2 w-fit ml-[-150%] p-[20px] items-center bg-white border border-gray-300 rounded-md shadow-lg">
          {DateOptions.map((date) => (
            <div
              key={date}
              onClick={() => {
                onSelectDate(date);
                if (date !== "Pick Date") {
                  setOpen(false);
                }
              }}
              className="flex items-center cursor-pointer  py-2 text-[#717578]"
            >
              <img
                src={
                  selectedDate === date
                    ? "/image/rounded_chek_light.svg"
                    : "/image/rounde_check_icon.svg"
                }
                className="mr-[5px]"
                alt="icon"
              />
              <span>{date}</span>
            </div>
          ))}

          <div className="flex items-center gap-1">
            <input
              type="date"
              name="startDate"
              value={customDate.startDate}
              onChange={handleCustomDateChange}
              className="w-full border border-[#F5F7FA] bg-[#EDEFF2] rounded-[5px] p-[8px] text-sm"
              placeholder="DD / MM / YY"
            />
            <span className="text-[#585858] font-[400] text-[14px]">to</span>
            <input
              type="date"
              name="endDate"
              value={customDate.endDate}
              onChange={handleCustomDateChange}
              className="w-full border border-[#F5F7FA] bg-[#EDEFF2] rounded-[5px] p-[8px] text-sm"
              placeholder="DD / MM / YY"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default DateSelector;
