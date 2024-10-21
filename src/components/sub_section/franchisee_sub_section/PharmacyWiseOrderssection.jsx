import React, { useState } from "react";
import DateSelector from "../../filtter_box/DateSelector";
import {
  processedData,
  colors,
  columns,
} from "../../../utils/Pharmacy_wise_orders.JS";
import PaginationComponent from "../../pagination/PaginationComponent";
import { head_colors } from "../../../utils/formUsers";
import DoubleDataTable from "../../Table/DoubleDataTable";

export default function PharmacyWiseOrderssection() {
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
    <div className="w-full">
      <div className="flex justify-between text-[#0A0A0A] items-center  px-4 pt-4 text-[18px] font-interRegular font-[400]">
        <h3 className="text-[18px] text-[#0A0A0A] font-interRegular font-[400]">
          Pharmacy wise orders
        </h3>
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
        head_colors={head_colors}
        type="Admin-FranchiseOrderSection"
      />
      <div className="flex font-interRegular text-[#7B7B75] px-4 text-[12px] justify-between items-center">
        <h4>
          Showing {currentPage + 1} to {totalPages} of {processedData.length}{" "}
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
