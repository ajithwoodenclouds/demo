import React, { useState } from "react";
import Header from "../../general/Header";
import Sidebar from "../../general/Sidebar";
import PresentDrivers from "../../general/PresentDrivers";
import TrackMapSection from "../../Map/TrackMapSection";

export default function DriverTrack() {
  return (
    <div className="bg-[#F5F7FA] h-90vh w-full">
      <div className="flex w-full justify-between">
        <Sidebar franchisee={true} />
        <div className="w-full">
          <Header franchisee={true} pervious="Drivers /" current="Track" />
          <div className="px-4 py-4 w-full flex ">
            <div className="w-[30%]">
              <PresentDrivers type={"DriverTrack"} />
            </div>
            <div className="w-[80%]">
              <TrackMapSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
