import React, { useState } from "react";
import Sidebar from "../../general/Sidebar";
import Header from "../../general/Header";
import DoubleDataTable from "../../Table/DoubleDataTable";
import {
  processedData,
  columns,
  colors,
} from "../../../utils/admin-account-dueList";
import PaginationComponent from "../../pagination/PaginationComponent";
import GenerateBillForm from "../../form/GenerateBillForm";

export default function DuesList() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isModalOpen, setModalOpen] = useState(false); // Modal open state
  const [modalData, setModalData] = useState(null);

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

  const handleOpenModal = (data) => {
    setModalData(data); // Pass the clicked row data to the modal
    setModalOpen(true); // Open the modal
  };

  const handleCloseModal = () => {
    setModalOpen(false); // Close the modal
  };

  return (
    <div className="bg-[#F5F7FA] w-full">
      <div className="flex w-full justify-between">
        <Sidebar />
        <div className="w-full">
          <Header pervious="Accounts / " current="Due list" />
          <div className="flex justify-between text-[#0A0A0A] px-4 pt-4 text-[18px] font-interRegular font-[400]">
            <h3>Dues list</h3>
          </div>
          <DoubleDataTable
            data={currentUsers}
            columns={columns}
            colors={colors}
            link={false}
            type="Admin-DuesList"
            action={true}
            onRowClick={handleOpenModal}
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
          {isModalOpen && modalData && (
            <GenerateBillForm
              data={modalData}
              isOpen={isModalOpen}
              closeModal={handleCloseModal}
            />
          )}
        </div>
      </div>
    </div>
  );
}
