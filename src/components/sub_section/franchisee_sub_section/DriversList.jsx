import React, { useState } from "react";
import Sidebar from "../../general/Sidebar";
import Header from "../../general/Header";
import SectionMiniHeader from "../../general/SectionMiniHeader";
import PaginationComponent from "../../pagination/PaginationComponent";
import { columns, processedData, colors } from "../../../utils/drivers_list";
import DoubleDataTable from "../../Table/DoubleDataTable";
import CreateDrivers from "../../form/CreateDrivers";

export default function DriversList() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const itemsPerPage = 5;

  const totalPages = Math.ceil(processedData.length / itemsPerPage);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const startIndex = currentPage * itemsPerPage;
  const currentUsers = processedData.slice(
    startIndex,
    startIndex + itemsPerPage
  );
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="bg-[#F5F7FA] w-full">
      <div className="flex w-full justify-between">
        <Sidebar franchisee={true} />
        <div className="w-full">
          <Header
            franchisee={true}
            pervious="Franchisees / Franchisees One /"
            current="Drivers"
          />
          <SectionMiniHeader
            title="Drivers list"
            type="Franchisee-Drivers list"
            handlCreate={setIsModalOpen}
          />
          <DoubleDataTable
            data={currentUsers}
            columns={columns}
            colors={colors}
            link={true}
            type="Admin-Drivers-List"
            path="/drivers"
          />
          <div className="flex font-interRegular text-[#7B7B75] p-4 text-[12px] justify-between items-center">
            <h4>
              Showing {currentPage + 1} to {totalPages} of{" "}
              {processedData.length} data
            </h4>
            <PaginationComponent
              totalPages={totalPages}
              handlePageClick={handlePageClick}
            />
          </div>
          {isModalOpen && (
            <CreateDrivers closeModal={closeModal} isOpen={isModalOpen} />
          )}
        </div>
      </div>
    </div>
  );
}
