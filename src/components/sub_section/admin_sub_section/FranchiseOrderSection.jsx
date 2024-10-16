import React, { useState } from "react";
import DateSelector from "../../filtter_box/DateSelector";
import { processedData, colors, columns } from "../../../utils/formUsers";
import PaginationComponent from "../../pagination/PaginationComponent";
import DoubleDataTable from "../../Table/DoubleDataTable";

export default function FranchiseOrderSection() {
  const [selectedDate, setSelectedDate] = useState("Today");
  const [currentPage, setCurrentPage] = useState(0);
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

  return (
    <div>
      <div className="flex justify-between text-[#0A0A0A]  px-4 pt-4 text-[18px] font-interRegular font-[400]">
        <h3>Franchisee wise orders</h3>
        <DateSelector
          selectedDate={selectedDate}
          onSelectDate={setSelectedDate}
        />
      </div>
      <DoubleDataTable
        data={currentUsers}
        columns={columns}
        colors={colors}
        link={false}
        type="Admin-FranchiseOrderSection"
      />
      <div className="flex font-interRegular text-[#7B7B75] p-4 text-[12px] justify-between items-center">
        <h4>
          Showing {currentPage + 1} to {totalPages} of {processedData.length}
          data
        </h4>
        <PaginationComponent
          totalPages={totalPages}
          handlePageClick={handlePageClick}
        />
      </div>
    </div>
  );
}
