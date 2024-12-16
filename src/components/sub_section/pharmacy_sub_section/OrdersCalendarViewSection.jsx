import React, { useState } from "react";
import Sidebar from "../../general/Sidebar";
import Header from "../../general/Header";
import MonthYearPicker from "../../filtter_box/MonthYearPicker";

import Calendar from "../../general/Calendar";
import { FiFilter } from "react-icons/fi";
import DetailsModal from "../../modal/DetailsModal";

export default function OrdersCalendarViewSection() {
  const [isModalOpen, setModalOpen] = useState(false); // Modal open state
  const [modalData, setModalData] = useState(null);

  const handleOpenModal = (data) => {
    setModalData(data); // Pass the clicked row data to the modal
    setModalOpen(true); // Open the modal
  };
  console.log(modalData);
  // Close modal function
  const handleCloseModal = () => {
    setModalOpen(false); // Close the modal
  };
  const statuses = [
    { label: "Delivered", color: "bg-[#3AAC43]" },
    { label: "Attempted", color: "bg-[#E69C1D]" },
    { label: "Scheduled", color: "bg-[#207DD3]" },
    { label: "Cancelled", color: "bg-[#D14B4B]" },
  ];
  return (
    <div className="bg-[#F5F7FA] w-full">
      <div className="flex w-full justify-between">
        <Sidebar type="OrdersCalendarViewSection" pharmacy={true} />
        <div className="w-full">
          <Header pharmacy={true} current="Orders calendar view" />
          <div className="p-4 flex justify-between items-center">
            <MonthYearPicker />
            <div>
              <ul className="flex items-center gap-4">
                {statuses.map((status, index) => (
                  <li key={index} className="flex items-center">
                    <span
                      className={`inline-block w-2 h-2 ${status.color} rounded-full`}
                    ></span>
                    <h5 className="ml-2">{status.label}</h5>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center ">
              <div className="cursor-pointer py-[8px]  px-[16px] rounded-[16px] bg-[#fff]">
                <span className="text-[14px]  font-interRegular font-[400] text-[#0A0A0A] ">
                  List view
                </span>
              </div>

              {/* Filter Button */}
              <div className="flex items-center ml-[20px] gap-2 bg-[#fff] py-[8px]  px-[16px] rounded-[16px] ">
                <FiFilter
                  className="text-[#0A0A0A] font-interRegular text-[14px]"
                  size={24}
                />
                <h4 className="text-[#0A0A0A] font-interRegular text-[14px]">
                  Filter
                </h4>
              </div>
            </div>
          </div>
          <Calendar onClick={handleOpenModal} />
          {isModalOpen && modalData && (
            <DetailsModal
              isOpen={isModalOpen}
              onClose={handleCloseModal} // Close modal handler
              data={modalData} // Pass modal data to DetailsModal
            />
          )}
        </div>
      </div>
    </div>
  );
}
