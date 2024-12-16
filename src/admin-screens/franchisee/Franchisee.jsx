import React, { useState } from "react";
import Sidebar from "../../components/general/Sidebar";
import Header from "../../components/general/Header";
import SectionMiniHeader from "../../components/general/SectionMiniHeader";
import {
  columns,
  data,
  colors,
  head_colors,
} from "../../utils/franchisee_list";
import PaginationComponent from "../../components/pagination/PaginationComponent";
import CreateFranchisee from "../../components/form/CreateFranchisee";
import Table from "../../components/Table/Table";
import SubBox from "../../components/filtter_box/SubBox";
import { Outlet } from "react-router-dom";

export default function Franchisee() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;

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
          <SectionMiniHeader
            title="Franchisee list"
            type="Admin-Franchisee-List"
            handlCreate={setIsModalOpen}
          />
          <Table
            action={true}
            data={currentUsers}
            link={true}
            columns={columns}
            colors={colors}
            head_colors={head_colors}
            onRowClick={(item, rowIndex, { openModal }) => {
              openModal(
                `Details for ${item.Sno}`,
                `${item["Franchisee Name"]}, Total Orders: ${item["Total Orders"]}`
              );
            }}
            modalComponent={SubBox}
            type="Admin-Franchisee"
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
          {isModalOpen && (
            <CreateFranchisee closeModal={closeModal} isOpen={isModalOpen} />
          )}
        </div>
      </div>
      <Outlet />
    </div>
  );
}
