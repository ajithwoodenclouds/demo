import React from "react";
import Sidebar from "../../components/general/Sidebar";
import Header from "../../components/general/Header";
import CustomBoxes from "../../components/general/CustomBoxes";
import { data } from "../../utils/home_card_data";
import GraphSection from "../../components/general/GraphSection";
import FranchiseOrderSection from "../../components/general/FranchiseOrderSection";

export default function Home() {
  return (
    <div className="bg-[#F5F7FA] w-full">
      <div className="flex w-full justify-between">
        <Sidebar />
        <div className="w-full">
          <Header current="Home" />
          <CustomBoxes data={data} />
          <GraphSection />
          <FranchiseOrderSection />
        </div>
      </div>
    </div>
  );
}
