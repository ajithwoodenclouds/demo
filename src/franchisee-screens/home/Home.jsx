import React from "react";
import Sidebar from "../../components/general/Sidebar";
import Header from "../../components/general/Header";
import CustomBoxes from "../../components/cards/CustomBoxes";
import { admin_home_data } from "../../utils/home_card_data";

export default function Home() {
  return (
    <div className="bg-[#F5F7FA] w-full">
      <div className="flex w-full justify-between">
        <Sidebar franchisee={true} />
        <div className="w-full">
          <Header current="Home" franchisee={true} />
          <CustomBoxes data={admin_home_data} />
        </div>
      </div>
    </div>
  );
}
