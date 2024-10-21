import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const FilterCard = () => {
  const [selectedPharmacy, setSelectedPharmacy] = useState("");
  const [startDate, setStartDate] = useState(null);

  const inputStyles =
    "block w-full bg-gray-100 border border-[#EDEFF2] bg-[#F5F7FA] text-[14px] appearance-none text-[#B4B5B7] py-2 px-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500";

  return (
    <div className="p-6 bg-white absolute w-full right-[19px] top-[130px] rounded-lg shadow-md max-w-sm">
      {/* Pharmacy Dropdown */}
      <div className="mb-4">
        <label className="block text-[#4E5459] text-[14px] font-[400] font-interRegular mb-2">
          Pharmacy
        </label>
        <div className="relative">
          <select
            value={selectedPharmacy}
            onChange={(e) => setSelectedPharmacy(e.target.value)}
            className={inputStyles}
          >
            <option value="" disabled>
              Select pharmacy
            </option>
            <option className="text-[#000]" value="pharmacy1">
              Pharmacy 1
            </option>
            <option value="pharmacy2">Pharmacy 2</option>
            <option value="pharmacy3">Pharmacy 3</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg
              className="w-5 h-5 text-[14px] text-[#B4B5B7]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      {/* Date Picker */}
      <div className="mb-4">
        <label className="block text-[#4E5459] text-[14px] font-[400] font-interRegular mb-2">
          Pick Date
        </label>
        <div className="relative">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="dd/MM/yyyy"
            placeholderText="DD / MM / YY"
            className={inputStyles}
          />
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <img src="image/date_icon.svg" alt="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterCard;
