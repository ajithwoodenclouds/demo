import React from "react";

export default function FilterActions({ openModal }) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center space-x-2">
        <div className="relative">
          <input
            type="text"
            placeholder="Search pharmacies"
            className="border border-[#1C1C1C66] rounded-lg py-2 pl-10 pr-4 focus:outline-none"
          />
          <img
            src="/image/search_icon.svg"
            className="absolute left-3 top-1/2 transform -translate-y-1/2"
            alt="Search Icon"
          />
        </div>
      </div>
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => openModal(true)}
      >
        <img src="/image/filter_icon.svg" alt="Add Icon" className="w-[30px]" />
        <h3 className="text-[16px] font-interRegular">Filter</h3>
      </div>
    </div>
  );
}
