import React, { useState } from "react";
import Header from "../../general/Header";
import Sidebar from "../../general/Sidebar";
import PaymentCard from "../../cards/PaymentCard";
import D2dTransactionHistory from "./D2dTransactionHistory";
import CreateDueSettling from "../../form/CreateDueSettling";

export default function D2dSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="bg-[#F5F7FA] w-full">
      <div className="flex w-full justify-between">
        <Sidebar franchisee={true} />
        <div className="w-full">
          <Header franchisee={true} pervious="Accounts" current="/ D2D" />
          <PaymentCard handleClick={setIsModalOpen} />
          <D2dTransactionHistory />

          {isModalOpen && (
            <CreateDueSettling closeModal={closeModal} isOpen={isModalOpen} />
          )}
        </div>
      </div>
    </div>
  );
}
