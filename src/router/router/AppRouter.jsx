// src/components/route/AppRouter.jsx
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../admin-screens/home/Home";
import Franchisee from "../../admin-screens/franchisee/Franchisee";
import TransactionHistorySection from "../../components/sub_section/admin_sub_section/TransactionHistorySection";
import FranchiseeOneSection from "../../components/sub_section/admin_sub_section/FranchiseeOneSection";
import Pharmacies_list from "../../components/sub_section/admin_sub_section/PharmaciesList";
import PharmaciesOneSection from "../../components/sub_section/admin_sub_section/PharmaciesOneSection";
import DriversList from "../../components/sub_section/admin_sub_section/DriversList";
import DriversOneSection from "../../components/sub_section/admin_sub_section/DriversOneSection";
import Account from "../../admin-screens/accounts/Account";
import DuesList from "../../components/sub_section/admin_sub_section/DuesList";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/history" element={<TransactionHistorySection />} />
      <Route path="/franchisee" element={<Franchisee />} />
      <Route path="/franchisee/:id" element={<FranchiseeOneSection />} />
      <Route path="/pharmacies" element={<Pharmacies_list />} />
      <Route path="/pharmacies/:id" element={<PharmaciesOneSection />} />
      <Route path="/drivers" element={<DriversList />} />
      <Route path="/drivers/:id" element={<DriversOneSection />} />
      <Route path="/accounts" element={<Account />} />
      <Route path="/due-list" element={<DuesList />} />
    </Routes>
  );
};

export default AppRouter;
