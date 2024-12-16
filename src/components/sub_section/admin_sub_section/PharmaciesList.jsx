import React, { useState } from "react";
import Header from "../../general/Header";
import Sidebar from "../../general/Sidebar";
import {
  columns,
  data,
  colors,
  header_colors,
} from "../../../utils/pharmacies_list";
import SectionMiniHeader from "../../general/SectionMiniHeader";
import Table from "../../Table/Table";
import PaginationComponent from "../../pagination/PaginationComponent";

export default function Pharmacies_list() {
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
        <Sidebar />
        <div className="w-full">
          <Header
            pervious="Franchisees / Franchisees One /"
            current="Pharmacies"
          />
          <SectionMiniHeader
            title="Pharmacies list"
            type="Admin-Pharmacies_List"
          />
          <Table
            head_colors={header_colors}
            data={currentUsers}
            link={true}
            columns={columns}
            colors={colors}
            type="Admin-Pharmacies-List"
            path="/pharmacies"
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
