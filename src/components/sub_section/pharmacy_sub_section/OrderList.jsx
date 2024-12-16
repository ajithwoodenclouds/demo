import React, { useState } from "react";
import Header from "../../general/Header";
import Sidebar from "../../general/Sidebar";
import {
  columns,
  processedData,
  colors,
} from "../../../utils/pharmcy-oreder-list";
import PaginationComponent from "../../pagination/PaginationComponent";
import DateSelector from "../../filtter_box/DateSelector";
import DoubleDataTable from "../../Table/DoubleDataTable";
import SubBox from "../../filtter_box/SubBox";

import { useNavigate } from "react-router-dom";

export default function OrderList() {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedDate, setSelectedDate] = useState("Today");
  const [selectedTab, setSelectedTab] = useState("all");
  const navigate = useNavigate();
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

  const tabs = [
    { id: "all", label: "All" },
    { id: "pending", label: "Pending" },
    { id: "delivered", label: "Delivered" },
    { id: "attempted", label: "Attempted" },
    { id: "cancelled", label: "Cancelled" },
  ];

  return (
    <div className="bg-[#F5F7FA] w-full">
      <div className="flex w-full justify-between">
        <Sidebar pharmacy={true} />
        <div className="w-full">
          <Header pharmacy={true} current="Orders list view" />
          <div className="flex  justify-start gap-3 items-center p-4 rounded w-full">
            <div className="flex gap-24 justify-start relative w-full">
              {tabs.map((tab) => (
                <h3
                  key={tab.id}
                  onClick={() => setSelectedTab(tab.id)}
                  className={`cursor-pointer font-[500] text-[16px] z-10 mb-0 pb-1  transition-all duration-300 ${
                    selectedTab === tab.id
                      ? "border-b-4 border-[#0E3281] text-[#0E3281]"
                      : "border-b-2 border-transparent text-[#1C1C1CCC]"
                  }`}
                >
                  {tab.label}
                </h3>
              ))}
              <div className="h-[1px] top-[29px]  absolute bg-[#C9CDD7] w-[90%]" />
            </div>
            <div
              onClick={() => navigate("/calendar-view")}
              className="flex justify-center items-center cursor-pointer py-[8px] w-[160px] px-[16px] rounded-[16px] bg-[#fff]"
            >
              <span className="text-[14px]  font-interRegular font-[400] text-[#0A0A0A] ">
                Calendar view
              </span>
            </div>

            <DateSelector
              selectedDate={selectedDate}
              onSelectDate={setSelectedDate}
            />
          </div>
          <DoubleDataTable
            data={currentUsers}
            columns={columns}
            colors={colors}
            type="Pharmcy-Orders-List"
            link={false}
            onRowClick={(item, rowIndex, { openModal }) => {
              openModal();
            }}
            modalComponent={SubBox}
            action={true}
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
    </div>
  );
}
