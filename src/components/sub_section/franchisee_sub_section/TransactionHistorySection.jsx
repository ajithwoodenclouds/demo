import React, { useState } from "react";
import Header from "../../general/Header";
import Sidebar from "../../general/Sidebar";
import { FiFilter } from "react-icons/fi";
import { columns, data, colors } from "../../../utils/history_data";
import PaginationComponent from "../../pagination/PaginationComponent";
import Table from "../../Table/Table";
import { head_colors } from "../../../utils/franchisee_list";

export default function TransactionHistorySection() {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedTab, setSelectedTab] = useState("credit"); // State for selected tab
  const itemsPerPage = 5;

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const startIndex = currentPage * itemsPerPage;
  const currentUsers = data.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="bg-[#F5F7FA] w-full">
      <div className="flex w-full justify-between">
        <Sidebar franchisee={true} />
        <div className="w-full">
          <Header
            pervious="Home"
            franchisee={true}
            current="/ Transaction history"
          />
          <div className="flex justify-between items-center px-4 pt-4 rounded w-full">
            {/* Tabs for Credit and Debit History */}
            <div className="flex gap-4 relative">
              <h3
                onClick={() => setSelectedTab("credit")}
                className={`cursor-pointer font-[500]  text-[16px] mb-0 pb-1 transition-all duration-300 ${
                  selectedTab === "credit"
                    ? "border-b-2 border-[#0E3281] text-[#0E3281]"
                    : "border-b-2 border-transparent text-[#1C1C1CCC]"
                }`}
              >
                Credit history
              </h3>
              <h3
                onClick={() => setSelectedTab("debit")}
                className={`cursor-pointer font-[500] text-[16px] mb-0 pb-1 transition-all duration-300 ${
                  selectedTab === "debit"
                    ? "border-b-2 border-[#0E3281] text-[#0E3281]"
                    : "border-b-2 border-transparent text-[#1C1C1CCC]"
                }`}
              >
                Debit history
              </h3>
            </div>

            {/* Filter Button */}
            <div className="flex items-center ml-[20px] gap-2 bg-[#fff] p-[16px] rounded-[16px] w-[90px] h-[32px]">
              <FiFilter
                className="text-[#0A0A0A] font-interRegular text-[14px]"
                size={24}
              />
              <h4 className="text-[#0A0A0A] font-interRegular text-[14px]">
                Filter
              </h4>
            </div>
          </div>

          {/* Table */}
          <Table
            data={currentUsers}
            columns={columns}
            colors={colors}
            link={false}
            head_colors={head_colors}
            type="Admin-TransAction-History"
          />
          <div className="flex font-interRegular text-[#7B7B75] p-4 text-[12px] justify-between items-center">
            <h4>
              Showing {currentPage + 1} to {totalPages} of {data.length} data
            </h4>
            <PaginationComponent
              totalPages={totalPages}
              handlePageClick={handlePageClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
