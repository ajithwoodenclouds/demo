// src/components/route/AppRouter.jsx
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../screens/home/Home";

import TransactionHistorySection from "../../components/sub_section/TransactionHistorySection";
import Franchisee from "../../screens/franchisee/Franchisee";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/history" element={<TransactionHistorySection />} />
      <Route path="/franchisee" element={<Franchisee />} />
    </Routes>
  );
};

export default AppRouter;
