import React, { useState } from "react";
import DateSelector from "../../filtter_box/DateSelector";
import TableComponent from "../../Table/TableComponent";
import { data, colors, columns } from "../../../utils/formUsers";
import PaginationComponent from "../../pagination/PaginationComponent";
import Table from "../../Table/Table";
import SubBox from "../../filtter_box/SubBox";

export default function FranchiseOrderSection() {
  const [selectedDate, setSelectedDate] = useState("Today");
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;

  // Calculate the total number of pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  // Get the current items to display
  const startIndex = currentPage * itemsPerPage;
  const currentUsers = data.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="p-4">
      <div className="flex justify-between text-[#0A0A0A] text-[18px] font-interRegular font-[400]">
        <h3>Franchisee wise orders</h3>
        <DateSelector
          selectedDate={selectedDate}
          onSelectDate={setSelectedDate}
        />
      </div>
      <Table
        data={currentUsers}
        columns={columns}
        colors={colors}
        onRowClick={(item, rowIndex, { openModal }) => {
          openModal(
            `Details for ${item.Sno}`,
            `${item["Franchisee Name"]}, Total Orders: ${item["Total Orders"]}`
          );
        }}
        type="Admin-FranchiseOrderSection"
        modalComponent={SubBox}
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
    </div>
  );
}
