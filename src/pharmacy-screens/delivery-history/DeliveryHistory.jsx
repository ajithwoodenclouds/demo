import React, { useState } from "react";
import Header from "../../components/general/Header";
import Sidebar from "../../components/general/Sidebar";
import SectionMiniHeader from "../../components/general/SectionMiniHeader";
import {
  columns,
  processedData,
  colors,
} from "../../utils/pharmcy-delivery-list";
import DoubleDataTable from "../../components/Table/DoubleDataTable";
import PaginationComponent from "../../components/pagination/PaginationComponent";
import DetailsModal from "../../components/modal/DetailsModal";

export default function DeliveryHistory() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isModalOpen, setModalOpen] = useState(false); // Modal open state
  const [modalData, setModalData] = useState(null); // Modal data state

  const itemsPerPage = 5;

  const totalPages = Math.ceil(processedData.length / itemsPerPage);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };
  console.log(isModalOpen, modalData);

  // Open modal when a row is clicked
  const handleOpenModal = (data) => {
    setModalData(data); // Pass the clicked row data to the modal
    setModalOpen(true); // Open the modal
  };

  // Close modal function
  const handleCloseModal = () => {
    setModalOpen(false); // Close the modal
  };

  const startIndex = currentPage * itemsPerPage;
  const currentUsers = processedData.slice(
    startIndex,
    startIndex + itemsPerPage
  );
  return (
    <div className="bg-[#F5F7FA] w-full">
      <div className="flex w-full justify-between">
        <Sidebar pharmacy={true} />
        <div className="w-full">
          <Header pharmacy={true} current="Orders list view" />
          <SectionMiniHeader
            title="Delivery list"
            type="Admin-Pharmacies_List"
            placeHolder="Search Orders"
          />
          <DoubleDataTable
            data={currentUsers}
            columns={columns}
            handleModal={handleOpenModal}
            colors={colors}
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
        </div>
      </div>
      {/* Include DetailsModal */}
      {isModalOpen && modalData && (
        <DetailsModal
          isOpen={isModalOpen}
          onClose={handleCloseModal} // Close modal handler
          data={modalData} // Pass modal data to DetailsModal
        />
      )}
    </div>
  );
}
