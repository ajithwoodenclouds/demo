import React from "react";
import Sidebar from "../../general/Sidebar";
import Header from "../../general/Header";
import BusinessCard from "../../general/BusinessCard";
import CustomBoxes from "../../cards/CustomBoxes";
import { pharmaciesOne_franchise_data } from "../../../utils/home_card_data";
import { useParams } from "react-router-dom";
import { data } from "../../../utils/pharmacies_list";
import RecentOrdersSection from "./RecentOrdersSection";

export default function PharmaciesOneSection() {
  const { id } = useParams();

  return (
    <div className="bg-[#F5F7FA] w-full">
      <div className="flex w-full justify-between">
        <Sidebar franchisee={true} />
        <div className="w-full">
          <Header franchisee={true} current="Home" />
          <BusinessCard
            data={data.filter((item) => item.pharmacyID == id)}
            title="Pharmacy 01"
            franchisee={true}
          />
          <CustomBoxes
            data={pharmaciesOne_franchise_data}
            type="pharmacies_One"
            style="double"
          />

          <RecentOrdersSection />
        </div>
      </div>
    </div>
  );
}
