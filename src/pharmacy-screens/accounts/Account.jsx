import { useState } from "react";
import PaymentCard from "../../components/cards/PaymentCard";
import CreateDueSettling from "../../components/form/CreateDueSettling";
import Header from "../../components/general/Header";
import Sidebar from "../../components/general/Sidebar";
import D2dTransactionHistory from "../../components/sub_section/franchisee_sub_section/D2dTransactionHistory";
import AcctountTransactionHistory from "../../components/sub_section/pharmacy_sub_section/AcctountTransactionHistory";
import CreatePharmcyDue from "../../components/form/CreatePharmcyDue";

export default function Account() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="bg-[#F5F7FA] w-full">
      <div className="flex w-full justify-between">
        <Sidebar pharmacy={true} />
        <div className="w-full">
          <Header pharmacy={true} pervious="Accounts" current="/ D2D" />
          <PaymentCard handleClick={setIsModalOpen} />
          <AcctountTransactionHistory />

          {isModalOpen && (
            <CreatePharmcyDue closeModal={closeModal} isOpen={isModalOpen} />
          )}
        </div>
      </div>
    </div>
  );
}
