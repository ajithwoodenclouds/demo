import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../franchisee-screens/home/Home";
import TransactionHistorySection from "../../components/sub_section/franchisee_sub_section/TransactionHistorySection";
import Orders from "../../franchisee-screens/orders/Orders";
import PharmaciesOneSection from "../../components/sub_section/franchisee_sub_section/PharmaciesOneSection";
import DriversOneSection from "../../components/sub_section/franchisee_sub_section/DriversOneSection";
import AttendanceSection from "../../components/sub_section/franchisee_sub_section/AttendanceSection";
import Pharmacies from "../../franchisee-screens/pharmacies/Pharmacies";
import Drivers from "../../franchisee-screens/drivers/Drivers";
import LeaveRequestSection from "../../components/sub_section/franchisee_sub_section/LeaveRequestSection";
import DriverTrack from "../../components/sub_section/franchisee_sub_section/DriverTrack";
import Accounts from "../../franchisee-screens/accounts/Accounts";
import AccountPharmacySection from "../../components/sub_section/franchisee_sub_section/AccountPharmacySection";
import DuesList from "../../components/sub_section/franchisee_sub_section/DuesList";
import DueOneSection from "../../components/sub_section/franchisee_sub_section/DueOneSection";
import Users from "../../franchisee-screens/users/Users";

const FranchiseeAppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/history" element={<TransactionHistorySection />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/pharmacies" element={<Pharmacies />} />
      <Route path="/pharmacies/:id" element={<PharmaciesOneSection />} />
      <Route path="/drivers" element={<Drivers />} />
      <Route path="/drivers/:id" element={<DriversOneSection />} />
      <Route path="/attendance" element={<AttendanceSection />} />
      <Route path="/requests" element={<LeaveRequestSection />} />
      <Route path="/driver-track" element={<DriverTrack />} />
      <Route path="/d2d" element={<Accounts />} />
      <Route path="/account-pharmacies" element={<AccountPharmacySection />} />
      <Route path="/due-list" element={<DuesList />} />
      <Route path="/due-list/:id" element={<DueOneSection />} />
      <Route path="/users" element={<Users />} />
    </Routes>
  );
};

export default FranchiseeAppRouter;
