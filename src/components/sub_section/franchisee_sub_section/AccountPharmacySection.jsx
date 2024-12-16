import React, { useState } from "react";

import { Outlet } from "react-router-dom";
import DoubleCard from "../../cards/DoubleCard";

import GeneratedInvoicesSection from "./GeneratedInvoicesSection";
import SectionMiniHeader from "../../general/SectionMiniHeader";
import Header from "../../general/Header";
import Sidebar from "../../general/Sidebar";
import { accounts_admin_card_data } from "../../../utils/home_card_data";

export default function AccountPharmacySection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="bg-[#F5F7FA] w-full">
      <div className="flex w-full justify-between">
        <Sidebar franchisee={true} />
        <div className="w-full">
          <Header
            pervious="Accounts"
            current="/ Pharmacies "
            franchisee={true}
          />
          <SectionMiniHeader
            title="Delivery list"
            type="Admin-Accounts"
            handlClick={setIsModalOpen}
          />
          <DoubleCard
            data={accounts_admin_card_data}
            style="double"
            type="Admin-Accounts"
          />
          <GeneratedInvoicesSection />
        </div>
      </div>
      <Outlet />
    </div>
  );
}
