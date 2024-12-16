import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../franchisee-screens/home/Home";
import Pharmacies_list from "../../components/sub_section/franchisee_sub_section/Pharmacies_list";
import TransactionHistorySection from "../../components/sub_section/franchisee_sub_section/TransactionHistorySection";
import Orders from "../../franchisee-screens/orders/Orders";
import PharmaciesOneSection from "../../components/sub_section/franchisee_sub_section/PharmaciesOneSection";
import DriversList from "../../components/sub_section/franchisee_sub_section/DriversList";
import DriversOneSection from "../../components/sub_section/franchisee_sub_section/DriversOneSection";
import AttendanceSection from "../../components/sub_section/franchisee_sub_section/AttendanceSection";
import Pharmacies from "../../franchisee-screens/pharmacies/Pharmacies";
import Drivers from "../../franchisee-screens/drivers/Drivers";
import LeaveRequestSection from "../../components/sub_section/franchisee_sub_section/LeaveRequestSection";

const FranchiseeAppRouter = () => {
  return (
    <Routes>
      <Route path="/*" element={<Home />} />
      <Route path="/history" element={<TransactionHistorySection />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/pharmacies" element={<Pharmacies />} />
      <Route path="/pharmacies/:id" element={<PharmaciesOneSection />} />
      <Route path="/drivers" element={<Drivers />} />
      <Route path="/drivers/:id" element={<DriversOneSection />} />
      <Route path="/attendance" element={<AttendanceSection />} />
      <Route path="/requests" element={<LeaveRequestSection />} />
    </Routes>
  );
};

export default FranchiseeAppRouter;
