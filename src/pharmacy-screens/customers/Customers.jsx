import React, { useState } from "react";
import Sidebar from "../../components/general/Sidebar";
import Header from "../../components/general/Header";
import SectionMiniHeader from "../../components/general/SectionMiniHeader";
import { columns, data, colors, head_colors } from "../../utils/customer-list";
import Table from "../../components/Table/Table";
import PaginationComponent from "../../components/pagination/PaginationComponent";

export default function Customers() {
  const [currentPage, setCurrentPage] = useState(0);

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
        <Sidebar pharmacy={true} />
        <div className="w-full">
          <Header pharmacy={true} current="Customers" />
          <SectionMiniHeader
            title="Customers list"
            type="Customers_List"
            placeHolder="Search customers"
          />
          <Table
            data={currentUsers}
            columns={columns}
            colors={colors}
            head_colors={head_colors}
            path="/franchisee"
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
