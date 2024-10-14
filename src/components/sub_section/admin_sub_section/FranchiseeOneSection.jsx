import React from "react";
import Header from "../../general/Header";
import Sidebar from "../../general/Sidebar";
import SectionMiniHeader from "../../general/SectionMiniHeader";
import BusinessCard from "../../general/BusinessCard";
import CustomBoxes from "../../cards/CustomBoxes";
import { franchiseeOne_admin_data } from "../../../utils/home_card_data";
import GraphSection from "./GraphSection";
import PharmacyWiseOrderssection from "./PharmacyWiseOrderssection";

export default function FranchiseeOneSection() {
  return (
    <div className="bg-[#F5F7FA] w-full">
      <div className="flex w-full justify-between">
        <Sidebar />
        <div className="w-full">
          <Header current="Franchisee One" pervious="Franchisees /" />
          <SectionMiniHeader
            title="Franchisee one"
            type="Admin-Franchisee-One"
          />
          <BusinessCard title="Franchisee one" />
          <CustomBoxes data={franchiseeOne_admin_data} type="franchisee_one" />
          <GraphSection type="FranchiseeOneSection" />
          <PharmacyWiseOrderssection />
        </div>
      </div>
    </div>
  );
}
