import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../franchisee-screens/home/Home";
import Pharmacies_list from "../../components/sub_section/franchisee_sub_section/Pharmacies_list";
import TransactionHistorySection from "../../components/sub_section/franchisee_sub_section/TransactionHistorySection";
import Orders from "../../franchisee-screens/orders/Orders";
import PharmaciesOneSection from "../../components/sub_section/franchisee_sub_section/PharmaciesOneSection";

const FranchiseeAppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/history" element={<TransactionHistorySection />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/pharmacies" element={<Pharmacies_list />} />
      <Route path="/pharmacies/:id" element={<PharmaciesOneSection />} />
    </Routes>
  );
};

export default FranchiseeAppRouter;
