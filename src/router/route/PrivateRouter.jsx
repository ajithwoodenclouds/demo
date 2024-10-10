import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function PrivateRouter({ children }) {
  const data = useSelector((state) => state.userdata);
  return data.is_verifiyed ? children : <Navigate to="/" replace />;
}
