import React, { useState } from "react";
import Sidebar from "../../components/general/Sidebar";
import Header from "../../components/general/Header";
import SectionMiniHeader from "../../components/general/SectionMiniHeader";
import TableComponent from "../../components/Table/TableComponent";
import { columns, data, colors } from "../../utils/franchisee_list";
import PaginationComponent from "../../components/pagination/PaginationComponent";
import CreateFranchisee from "../../components/form/CreateFranchisee";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;
  console.log(isModalOpen, "hh");

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
          <Header current="Frachisees" />
          <SectionMiniHeader openModal={setIsModalOpen} />
          <TableComponent
            data={currentUsers}
            columns={columns}
            colors={colors}
            type="franchisee"
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
          {isModalOpen && <CreateFranchisee closeModal={closeModal} />}
        </div>
      </div>
    </div>
  );
}
