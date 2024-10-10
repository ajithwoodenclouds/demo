import React from "react";
import Sidebar from "../../components/general/Sidebar";
import Header from "../../components/general/Header";
import CustomBoxes from "../../components/cards/CustomBoxes";
import { data } from "../../utils/home_card_data";

import GraphSection from "../../components/sub_section/admin_sub_section/GraphSection";
import FranchiseOrderSection from "../../components/sub_section/admin_sub_section/FranchiseOrderSection";

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