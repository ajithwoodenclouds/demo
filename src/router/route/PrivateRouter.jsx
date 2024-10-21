import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRouter = ({ children }) => {
  const { is_verifiyed } = useSelector((state) => state.userdata);

  return is_verifiyed ? children : <Navigate to="/login" replace />;
};

export default PrivateRouter;
