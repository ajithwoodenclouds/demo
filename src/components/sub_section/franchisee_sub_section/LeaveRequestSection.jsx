import React, { useState } from "react";
import Sidebar from "../../general/Sidebar";
import Header from "../../general/Header";
import DoubleDataTable from "../../Table/DoubleDataTable";
import { processedData, colors, columns } from "../../../utils/leave-request";
import RequestRejectionModal from "../../modal/RequestRejectionModal";
import { toast } from "react-hot-toast";

export default function LeaveRequestSection() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isModaldata, setModalData] = useState();
  const handleActionClick = (data, type) => {
    if (type == "rejected") {
      setModalOpen(true);
      setModalData(data);
    } else {
      toast.success("Request approved ", {
        icon: (
          <img
            src="/image/tick_icon.svg" // Replace with your image URL
            alt="Custom Icon"
          />
        ),
        style: {
          color: "#3AAC43",
          font: 400,
          borderRadius: "86px",
          padding: "10px 12px",
          fontSize: "14px",
        },
      });
    }
  };
  return (
    <div className="bg-[#F5F7FA] w-full">
      <div className="flex w-full justify-between">
        <Sidebar franchisee={true} />
        <div className="w-full">
          <Header franchisee={true} pervious="Drivers /" current="Requests" />
          <DoubleDataTable
            data={processedData}
            action={true}
            link={false}
            columns={columns}
            colors={colors}
            type="Leave-Request-Section"
            onRowClick={handleActionClick}
          />
        </div>
        <RequestRejectionModal
          isOpen={isModalOpen}
          data={isModaldata}
          onClose={() => setModalOpen(false)}
        />
      </div>
    </div>
  );
}
