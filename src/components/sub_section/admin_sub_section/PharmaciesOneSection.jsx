import React from "react";
import Sidebar from "../../general/Sidebar";
import Header from "../../general/Header";
import BusinessCard from "../../general/BusinessCard";
import CustomBoxes from "../../cards/CustomBoxes";
import { pharmaciesOne_admin_data } from "../../../utils/home_card_data";
import { useParams } from "react-router-dom";
import { data } from "../../../utils/pharmacies_list";
import RecentOrdersSection from "./RecentOrdersSection";

export default function PharmaciesOneSection() {
  const { id } = useParams();

  return (
    <div className="bg-[#F5F7FA] w-full">
      <div className="flex w-full justify-between">
        <Sidebar />
        <div className="w-full">
          <Header current="Home" />
          <BusinessCard
            data={data.filter((item) => item.pharmacyID == id)}
            title="Pharmacy 01"
          />
          <CustomBoxes
            data={pharmaciesOne_admin_data}
            type="pharmacies_One"
            style="double"
          />
          <RecentOrdersSection />
        </div>
      </div>
    </div>
  );
}
