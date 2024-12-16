import React from "react";
import Sidebar from "../../components/general/Sidebar";
import Header from "../../components/general/Header";
import CustomBoxes from "../../components/cards/CustomBoxes";
import {
  pharmaciesOne_franchise_data,
  pharmaciesOne_pharmacie_data,
} from "../../utils/home_card_data";
import BarChart from "../../components/charts/BarChart";
import RecentOrdersSection from "../../components/sub_section/pharmacy_sub_section/RecentOrdersSection";

export default function Home() {
  return (
    <div className="bg-[#F5F7FA] w-full">
      <div className="flex w-full justify-between">
        <Sidebar pharmacy={true} />
        <div className="w-full">
          <Header pharmacy={true} />
          <CustomBoxes
            data={pharmaciesOne_pharmacie_data}
            type="pharmacies_One"
            style="double"
          />
          <BarChart />
          <RecentOrdersSection />
        </div>
      </div>
    </div>
  );
}
