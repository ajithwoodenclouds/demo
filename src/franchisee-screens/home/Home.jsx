import React from "react";
import Sidebar from "../../components/general/Sidebar";
import Header from "../../components/general/Header";
import { franchisee_home_data } from "../../utils/home_card_data";
import FranchiseCustomBox from "../../components/cards/FranchiseCustomBox";
import GraphSection from "../../components/sub_section/admin_sub_section/GraphSection";
import PharmacyWiseOrderssection from "../../components/sub_section/franchisee_sub_section/PharmacyWiseOrderssection";
import PresentDrivers from "../../components/general/PresentDrivers";

export default function Home() {
  return (
    <div className="bg-[#F5F7FA] w-full">
      <div className="flex w-full justify-between">
        <Sidebar franchisee={true} />
        <div className="w-full">
          <Header current="Home" franchisee={true} />
          <FranchiseCustomBox data={franchisee_home_data} />
          <GraphSection type="frachisee-home" />
          <div className="flex justify-between items-stretch h-auto">
            <div className="flex-1">
              <PharmacyWiseOrderssection />
            </div>
            <div>
              <PresentDrivers />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
