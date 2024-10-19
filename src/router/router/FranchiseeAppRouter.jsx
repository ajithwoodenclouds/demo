import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../franchisee-screens/home/Home";

const FranchiseeAppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default FranchiseeAppRouter;
