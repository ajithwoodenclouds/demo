import React, { useState } from "react";
import Header from "../../general/Header";
import Sidebar from "../../general/Sidebar";
import { FiFilter } from "react-icons/fi";
import { columns, data, colors } from "../../../utils/history_data";
import PaginationComponent from "../../pagination/PaginationComponent";
import Table from "../../Table/Table";

export default function TransactionHistorySection() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const startIndex = currentPage * itemsPerPage;
  const currentUsers = data.slice(startIndex, startIndex + itemsPerPage);
  console.log(currentUsers, "hvasdv");
  return (
    <div className="bg-[#F5F7FA] w-full">
      <div className="flex w-full justify-between">
        <Sidebar />
        <div className="w-full">
          <Header pervious="Home" current="/ Transaction history" />
          <div className="flex justify-between items-center p-4 rounded w-full">
            <div className="flex-grow relative">
              <h3 className="text-[#0E3281] font-interRegular text-[16px] mb-0 border-b-[1px] border-[#C9CDD7] pb-1">
                Credit history
              </h3>
              <div className="h-[3px] top-[27px] absolute bg-[#0E3281] w-[120px]" />
            </div>

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
          <Table
            data={currentUsers}
            columns={columns}
            colors={colors}
            link={false}
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
