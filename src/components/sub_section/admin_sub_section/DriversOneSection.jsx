import React from "react";
import Sidebar from "../../general/Sidebar";
import Header from "../../general/Header";

export default function DriversOneSection() {
  return (
    <div className="bg-[#F5F7FA] w-full">
      <div className="flex w-full justify-between">
        <Sidebar />
        <div className="w-full">
          <Header
            current="James Gonsalves"
            pervious="Franchisees / Franchisee One / Drivers"
          />
        </div>
      </div>
    </div>
  );
}
