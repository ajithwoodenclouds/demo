// src/components/route/AppRouter.jsx
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../admin-screens/home/Home";
import Franchisee from "../../admin-screens/franchisee/Franchisee";
import TransactionHistorySection from "../../components/sub_section/admin_sub_section/TransactionHistorySection";
import FranchiseeOneSection from "../../components/sub_section/admin_sub_section/FranchiseeOneSection";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/history" element={<TransactionHistorySection />} />
      <Route path="/franchisee" element={<Franchisee />} />
      <Route path="/franchisee/:id" element={<FranchiseeOneSection />} />
    </Routes>
  );
};

export default AppRouter;
