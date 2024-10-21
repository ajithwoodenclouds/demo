import React, { useState } from "react";
import FilterCard from "../../filtter_box/FilterCard";
import { FiFilter } from "react-icons/fi";
import { columns, data, colors, head_colors } from "../../../utils/order-list";
import Table from "../../Table/Table";
import PaginationComponent from "../../pagination/PaginationComponent";

export default function OrderList() {
  const [isFilterOpen, setIsFilterOpen] = useState(false); // State to control FilterCard visibility
  const [selectedTab, setSelectedTab] = useState("Pending");

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const startIndex = currentPage * itemsPerPage;
  const currentUsers = data.slice(startIndex, startIndex + itemsPerPage);

  const tabs = [
    { id: "Pending", label: "Pending" },
    { id: "Picked", label: "Picked" },
    { id: "Attempted", label: "Attempted" },
    { id: "Delivered", label: "Delivered" },
    { id: "Cancelled", label: "Cancelled" },
  ];
  return (
    <div>
      <div className="flex justify-between items-center px-4 pt-4 rounded w-full">
        {/* Tabs for Credit and Debit History */}
        <div className="flex  gap-11 justify-between relative">
          {tabs.map((tab) => (
            <h3
              key={tab.id}
              onClick={() => setSelectedTab(tab.id)}
              className={`cursor-pointer font-[500] text-[16px] mb-0 pb-1 transition-all duration-300 ${
                selectedTab === tab.id
                  ? "border-b-2 border-[#0E3281] text-[#0E3281]"
                  : "border-b-2 border-transparent text-[#1C1C1CCC]"
              }`}
            >
              {tab.label}
            </h3>
          ))}
        </div>

        {/* Filter Button */}
        <div
          onClick={() => setIsFilterOpen(!isFilterOpen)} // Toggle FilterCard on click
          className="flex items-center ml-[20px] gap-2 bg-[#fff] p-[16px] rounded-[16px] w-[90px] h-[32px] cursor-pointer"
        >
          <FiFilter
            className="text-[#0A0A0A] font-interRegular text-[14px]"
            size={24}
          />
          <h4 className="text-[#0A0A0A] font-interRegular text-[14px]">
            Filter
          </h4>
        </div>
      </div>
      {isFilterOpen && <FilterCard />}
      <Table
        data={currentUsers}
        columns={columns}
        colors={colors}
        link={false}
        head_colors={head_colors}
        type="Admin-TransAction-History"
      />
      <div className="flex font-interRegular text-[#7B7B75] px-4 text-[12px] justify-between items-center">
        <h4>
          Showing {currentPage + 1} to {totalPages} of {data.length} data
        </h4>
        <PaginationComponent
          totalPages={totalPages}
          handlePageClick={handlePageClick}
        />
      </div>
    </div>
  );
}
