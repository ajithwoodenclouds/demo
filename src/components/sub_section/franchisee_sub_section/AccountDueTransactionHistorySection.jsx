import React, { useState } from "react";
import {
  data,
  colors,
  columns,
  head_colors,
} from "../../../utils/admin-account-trasation-history";
import PaginationComponent from "../../pagination/PaginationComponent";
import Table from "../../Table/Table";

export default function AccountDueTransactionHistorySection() {
  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = 5;

  // Calculate the total number of pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  // Get the current items to display
  const startIndex = currentPage * itemsPerPage;
  const currentUsers = data.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      <div className="flex justify-between items-center text-[#0A0A0A] px-4 pt-4 text-[18px] font-interRegular font-[400]">
        <h3>Transaction history</h3>
        <div className="flex items-center gap-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search franchisee"
              className="border border-[#1C1C1C66] placeholder:font-[400] placeholder:font-interRegular placeholder:text-[14px] rounded-lg py-2 pl-10 pr-4 focus:outline-none"
            />
            <img
              src="/image/search_icon.svg"
              className="absolute left-3 top-1/2 transform -translate-y-1/2"
              alt="Search Icon"
            />
          </div>
          <div className="flex bg-[#FFFFFF] p-[8px] justify-center rounded-[16px] w-[90px] items-center gap-3">
            <img src="/image/filter_icon.svg" alt="icon" />
            <h3 className="text-[16px] font-interRegular font-[400] text-[#1C1C1C]">
              Filter
            </h3>
          </div>
        </div>
      </div>

      {/* Pass handleOpenModal to DoubleDataTable */}
      <Table
        data={currentUsers}
        columns={columns}
        colors={colors}
        link={false}
        head_colors={head_colors}
        type="Admin-Generated-Invoices"
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
  );
}
