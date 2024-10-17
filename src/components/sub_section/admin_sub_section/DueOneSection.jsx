import React from "react";
import Sidebar from "../../general/Sidebar";
import BusinessCard from "../../general/BusinessCard";
import Header from "../../general/Header";
import AccountDueTransactionHistorySection from "./AccountDueTransactionHistorySection";

export default function DueOneSection() {
  return (
    <div className="bg-[#F5F7FA] w-full">
      <div className="flex w-full justify-between">
        <Sidebar />
        <div className="w-full">
          <Header current="Accounts" />
          <BusinessCard title="Franchisee one" type="Admin-Due-OneSection" />
          <AccountDueTransactionHistorySection />
        </div>
      </div>
    </div>
  );
}
