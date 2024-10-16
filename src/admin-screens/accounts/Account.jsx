import React, { useState } from "react";
import Sidebar from "../../components/general/Sidebar";
import Header from "../../components/general/Header";
import SectionMiniHeader from "../../components/general/SectionMiniHeader";
import { Outlet } from "react-router-dom";
import DoubleCard from "../../components/cards/DoubleCard";
import { accounts_admin_card_data } from "../../utils/home_card_data";
import GeneratedInvoicesSection from "../../components/sub_section/admin_sub_section/GeneratedInvoicesSection";

export default function Account() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="bg-[#F5F7FA] w-full">
      <div className="flex w-full justify-between">
        <Sidebar />
        <div className="w-full">
          <Header current="Accounts" />
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
