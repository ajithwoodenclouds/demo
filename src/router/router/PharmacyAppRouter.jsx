import React from "react";
import Home from "../../pharmacy-screens/Home/Home";
import { Route, Routes } from "react-router-dom";
import TransactionHistorySection from "../../components/sub_section/pharmacy_sub_section/TransactionHistorySection";
import Orders from "../../pharmacy-screens/orders/Orders";
import OrdersCalendarViewSection from "../../components/sub_section/pharmacy_sub_section/OrdersCalendarViewSection";
import DeliveryHistory from "../../pharmacy-screens/delivery-history/DeliveryHistory";
import Customers from "../../pharmacy-screens/customers/Customers";
import Account from "../../pharmacy-screens/accounts/Account";
import Users from "../../pharmacy-screens/users/Users";

export default function PharmacyAppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/history" element={<TransactionHistorySection />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/calendar-view" element={<OrdersCalendarViewSection />} />
      <Route path="/delivery-history" element={<DeliveryHistory />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/accounts" element={<Account />} />
      <Route path="/users" element={<Users />} />
    </Routes>
  );
}
