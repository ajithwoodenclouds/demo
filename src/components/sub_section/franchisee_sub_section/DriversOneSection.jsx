import React from "react";
import Sidebar from "../../general/Sidebar";
import Header from "../../general/Header";
import DetailsCardSection from "../../cards/DetailsCardSection";
import MapSection from "../../Map/MapSection";
import DeliveryCard from "../../cards/DeliveryCard";
import {
  driversOne_admin_card_data,
  columns,
} from "../../../utils/home_card_data";
import DriverRecentActivities from "./DriverRecentActivities";

export default function DriversOneSection() {
  return (
    <div className="bg-[#F5F7FA] w-full">
      <div className="flex w-full justify-between">
        <Sidebar franchisee={true} />
        <div className="w-full">
          <Header
            franchisee={true}
            current="James Gonsalves"
            pervious="Franchisees / Franchisee One / Drivers /"
          />
          <div className="flex gap-5 p-4 mx-auto">
            <DetailsCardSection />
            <MapSection />
          </div>
          <DeliveryCard data={driversOne_admin_card_data} cloumns={columns} />
          <DriverRecentActivities />
        </div>
      </div>
    </div>
  );
}
