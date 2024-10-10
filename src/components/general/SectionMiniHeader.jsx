import React from "react";
import { FaSearch, FaPlus } from "react-icons/fa"; // Using react-icons for icons

const SectionMiniHeader = ({ openModal }) => {
  return (
    <div className="container p-4 mx-auto ">
      <div className="flex justify-between items-center rounded-lg px-[20px] py-[12px]  bg-[#fff]">
        <h4 className="text-[#1C1C1C] text-[16px] font-interRegular">
          Franchisee list
        </h4>

        <div className="flex items-center gap-4 ">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Search franchisee"
                className="border border-[#1C1C1C66] rounded-lg py-2 pl-10 pr-4 focus:outline-none "
              />
              <img
                src="/image/search_icon.svg"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 "
              />
            </div>
          </div>
          <div
            className="flex items-center gap-2"
            onClick={() => openModal(true)}
          >
            <img src="/image/add_icon.svg" alt="icon" className="w-[30px]" />
            <h3 className="text-[16px] font-interRegular">Create</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionMiniHeader;
