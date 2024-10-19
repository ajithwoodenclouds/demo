import React, { useState } from "react";
import DateSelector from "../../filtter_box/DateSelector";
import { data, colors, columns } from "../../../utils/Pharmacy_wise_orders.JS";
import PaginationComponent from "../../pagination/PaginationComponent";
import Table from "../../Table/Table";
import SubBox from "../../filtter_box/SubBox";
import { headers_color } from "../../../utils/Pharmacy_wise_orders.JS";

export default function PharmacyWiseOrderssection() {
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
    <div>
      <div className="flex justify-between text-[#0A0A0A]  px-4 pt-4 text-[18px] font-interRegular font-[400]">
        <h3>Pharmacy wise orders</h3>
        <DateSelector
          selectedDate={selectedDate}
          onSelectDate={setSelectedDate}
        />
      </div>
      <Table
        data={currentUsers}
        columns={columns}
        colors={colors}
        link={false}
        head_colors={headers_color}
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
