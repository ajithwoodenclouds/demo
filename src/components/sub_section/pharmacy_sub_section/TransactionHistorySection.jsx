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

  const tabs = [
    { id: "credit", label: "Credit history" },
    { id: "debit", label: "Debit history" },
  ];

  return (
    <div className="bg-[#F5F7FA] w-full">
      <div className="flex w-full justify-between">
        <Sidebar pharmacy={true} />
        <div className="w-full">
          <Header
            pervious="Home"
            pharmacy={true}
            current="/ Transaction history"
          />
          <div className="flex justify-between items-center px-4 pt-4 rounded w-full">
            <div className="flex gap-6 justify-start relative w-full">
              {tabs.map((tab) => (
                <h3
                  key={tab.id}
                  onClick={() => setSelectedTab(tab.id)}
                  className={`cursor-pointer font-[500] text-[16px] z-30 mb-0 pb-1  transition-all duration-300 ${
                    selectedTab === tab.id
                      ? "border-b-4 border-[#0E3281] text-[#0E3281]"
                      : "border-b-2 border-transparent text-[#1C1C1CCC]"
                  }`}
                >
                  {tab.label}
                </h3>
              ))}
              <div className="h-[1px] top-[29px]  absolute bg-[#C9CDD7] w-[90%]" />
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
