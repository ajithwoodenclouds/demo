import React, { useState } from "react";
import Header from "../../components/general/Header";
import Sidebar from "../../components/general/Sidebar";
import PricingBox from "../../components/cards/PricingBox";

import CreateSubscription from "../../components/form/CreateSubscription";

export default function Subscription() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="bg-[#F5F7FA] w-full">
      <div className="flex w-full justify-between">
        <Sidebar />
        <div className="w-full">
          <Header current="Users" />
          <div className="flex justify-between items-center px-4 pt-4 rounded w-full">
            <div className="flex-grow relative">
              <h3 className="text-[#0A0A0A] font-interRegular text-[16px]">
                Subscription plans
              </h3>
            </div>
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => setIsModalOpen(true)}
            >
              <img src="/image/blue_add_icon.svg" alt="Add Icon" />
              <h3 className="text-[16px] text-[#0E3281] font-interRegular">
                Create subscription
              </h3>
            </div>
          </div>
          <div className="p-4">
            <PricingBox onclick={setIsModalOpen} />
          </div>
          {isModalOpen && (
            <CreateSubscription closeModal={closeModal} isOpen={isModalOpen} />
          )}
        </div>
      </div>
    </div>
  );
}
