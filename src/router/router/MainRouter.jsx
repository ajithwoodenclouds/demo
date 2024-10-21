import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import AdminAppRouter from "./AdminAppRouter";
import PrivateRouter from "../route/PrivateRouter";
import { userUpdate } from "../../store/UserSlice";
import FranchiseeAppRouter from "./FranchiseeAppRouter";
import PharmacyAppRouter from "./PharmacyAppRouter";
import Login from "../../auth/Login";

export default function MainRouter() {
  const [loading, setLoading] = useState(true);
  const { is_verifiyed } = useSelector((state) => state.userdata || {});
  const dispatch = useDispatch();

  useEffect(() => {
    const userToken = localStorage.getItem("token");

    // Check if token exists and update the Redux state
    dispatch(userUpdate({ is_verifiyed: Boolean(userToken) }));
    setLoading(false); // End loading after token check
  }, [dispatch]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        {/* Optional: Add a spinner or loading animation */}
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        {!is_verifiyed ? (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<Navigate to="/" />} />
            <Route
              path="/*"
              element={
                <PrivateRouter>
                  {localStorage.getItem("token") === "acess-token-admin" ? (
                    <AdminAppRouter />
                  ) : localStorage.getItem("token") ===
                    "acess-token-franchisee" ? (
                    <FranchiseeAppRouter />
                  ) : (
                    <PharmacyAppRouter />
                  )}
                </PrivateRouter>
              }
            />
          </>
        )}
      </Routes>
    </Router>
  );
}
