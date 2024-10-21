import React, { useState } from "react";
import Header from "../../components/general/Header";
import Sidebar from "../../components/general/Sidebar";
import { FiFilter } from "react-icons/fi";
import FilterCard from "../../components/filtter_box/FilterCard";
import OrderList from "../../components/sub_section/franchisee_sub_section/OrderList";

export default function Orders() {
  return (
    <div className="bg-[#F5F7FA] w-full">
      <div className="flex w-full justify-between">
        <Sidebar franchisee={true} />
        <div className="w-full">
          <Header current="Home" franchisee={true} />
          <OrderList />
        </div>
      </div>
    </div>
  );
}
