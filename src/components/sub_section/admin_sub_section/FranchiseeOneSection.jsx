import React from "react";
import Header from "../../general/Header";
import Sidebar from "../../general/Sidebar";
import SectionMiniHeader from "../../general/SectionMiniHeader";
import BusinessCard from "../../general/BusinessCard";
import CustomBoxes from "../../cards/CustomBoxes";
import { data } from "../../../utils/home_card_data";
import Graph from "../../charts/Graph";
import GraphSection from "./GraphSection";

export default function FranchiseeOneSection() {
  return (
    <div className="bg-[#F5F7FA] w-full">
      <div className="flex w-full justify-between">
        <Sidebar />
        <div className="w-full">
          <Header current="Home" />
          <SectionMiniHeader
            title="Franchisee one"
            type="Admin-Franchisee-One"
          />
          <BusinessCard />
          <CustomBoxes data={data} />
          <GraphSection type="FranchiseeOneSection" />
        </div>
      </div>
    </div>
  );
}
