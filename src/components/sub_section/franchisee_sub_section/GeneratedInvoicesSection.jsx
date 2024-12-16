import React, { useState } from "react";
import {
  processedData,
  colors,
  columns,
} from "../../../utils/admin-account-generated-invoices";
import PaginationComponent from "../../pagination/PaginationComponent";
import DoubleDataTable from "../../Table/DoubleDataTable";
import VerifyPaymentModal from "../../modal/VerifyPaymentModal";

export default function GeneratedInvoicesSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isModalOpen, setModalOpen] = useState(false); // Modal open state
  const [modalData, setModalData] = useState(null); // Modal data state
  const itemsPerPage = 5;

  // Calculate the total number of pages
  const totalPages = Math.ceil(processedData.length / itemsPerPage);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  // Get the current items to display
  const startIndex = currentPage * itemsPerPage;
  const currentUsers = processedData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Open modal when a row is clicked
  const handleOpenModal = (data) => {
    setModalData(data); // Pass the clicked row data to the modal
    setModalOpen(true); // Open the modal
  };

  // Close modal function
  const handleCloseModal = () => {
    setModalOpen(false); // Close the modal
  };

  return (
    <div>
      <div className="flex justify-between text-[#0A0A0A] p-4 text-[18px] font-interRegular font-[400]">
        <h3 className="text-[18px] text-[#0A0A0A] font-interRegular font-[400]">
          Generated invoices
        </h3>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <img src="/image/blue_add_icon.svg" alt="icon" />
            <h3 className="text-[16px] font-interRegular font-[400] text-[#0E3281]">
              Generate invoice
            </h3>
          </div>
          <div className="flex items-center gap-3">
            <img src="/image/filter_icon.svg" alt="icon" />
            <h3 className="text-[16px] font-interRegular font-[400] text-[#1C1C1C]">
              Filter
            </h3>
          </div>
        </div>
      </div>

      {/* Pass handleOpenModal to DoubleDataTable */}
      <DoubleDataTable
        data={currentUsers}
        columns={columns}
        colors={colors}
        link={false}
        action={true}
        type="Admin-Generated-Invoices"
        onRowClick={handleOpenModal}
      />

      <div className="flex font-interRegular text-[#7B7B75] p-4 text-[12px] justify-between items-center">
        <h4>
          Showing {currentPage + 1} to {totalPages} of {processedData.length}{" "}
          data
        </h4>
        <PaginationComponent
          totalPages={totalPages}
          handlePageClick={handlePageClick}
        />
      </div>

      {/* Include DetailsModal */}

      {isModalOpen && modalData && (
        <VerifyPaymentModal
          isOpen={isModalOpen}
          data={modalData}
          setIsOpen={setModalOpen}
        />
      )}
    </div>
  );
}
