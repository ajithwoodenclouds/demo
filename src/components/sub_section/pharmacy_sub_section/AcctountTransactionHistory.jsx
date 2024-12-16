import React, { useState } from "react";
import {
  processedData,
  colors,
  columns,
} from "../../../utils/pharmacy-account-Transaction";
import PaginationComponent from "../../pagination/PaginationComponent";
import DoubleDataTable from "../../Table/DoubleDataTable";
import VerifyPaymentModal from "../../modal/VerifyPaymentModal";
import FilterCard from "../../filtter_box/FilterCard";
import { FiFilter } from "react-icons/fi";

export default function AcctountTransactionHistory() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
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

  return (
    <div>
      <div className="flex justify-between text-[#0A0A0A] px-4 text-[18px] font-interRegular font-[400]">
        <h3 className="text-[18px] text-[#0A0A0A] font-interRegular font-[400]">
          Transaction history
        </h3>
        <div className="flex items-center gap-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search by date or trans...."
              className="border border-[#1C1C1C66] rounded-lg w-[260px] h-[36px] px-[30px] placeholder:text-[#1C1C1C66] placeholder:text-[14px] placeholder:font-[400] focus:outline-none"
            />
            <img
              src="/image/search_icon.svg"
              className="absolute left-3 top-[54%] transform -translate-y-1/2"
              alt="Search Icon"
            />
          </div>
          <div
            onClick={() => setIsFilterOpen(!isFilterOpen)} // Toggle FilterCard on click
            className="flex items-center ml-[20px] gap-2 bg-[#fff] p-[16px] rounded-[16px] w-[90px] h-[32px] cursor-pointer"
          >
            <FiFilter
              className="text-[#0A0A0A] font-interRegular text-[14px]"
              size={24}
            />
            <h4 className="text-[#0A0A0A] font-interRegular text-[14px]">
              Filter
            </h4>
          </div>

          {isFilterOpen && <FilterCard />}
        </div>
      </div>

      {/* Pass handleOpenModal to DoubleDataTable */}
      <DoubleDataTable
        data={currentUsers}
        columns={columns}
        colors={colors}
        link={false}
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
