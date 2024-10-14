import React, { useState } from "react";
import DateSelector from "../../filtter_box/DateSelector";
import {
  processedData,
  colors,
  columns,
} from "../../../utils/admin-recent-orders";
import PaginationComponent from "../../pagination/PaginationComponent";
import DoubleDataTable from "../../Table/DoubleDataTable";
import DetailsModal from "../../modal/DetailsModal";

export default function RecentOrdersSection() {
  const [selectedDate, setSelectedDate] = useState("Today");
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
      <div className="flex justify-between text-[#0A0A0A] text-[18px] font-interRegular font-[400]">
        <h3>Pharmacy wise orders</h3>
        <DateSelector
          selectedDate={selectedDate}
          onSelectDate={setSelectedDate}
        />
      </div>

      {/* Pass handleOpenModal to DoubleDataTable */}
      <DoubleDataTable
        data={currentUsers}
        columns={columns}
        colors={colors}
        link={false}
        type="Admin-Recent-Orders"
        onRowClick={handleOpenModal} // Handle row click to open modal
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
        <DetailsModal
          isOpen={isModalOpen}
          onClose={handleCloseModal} // Close modal handler
          data={modalData} // Pass modal data to DetailsModal
        />
      )}
    </div>
  );
}
