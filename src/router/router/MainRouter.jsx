import React, { useEffect } from "react";

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
  const { is_verifiyed } = useSelector((state) => state.userdata || {});
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch token for regular user
    const userToken = localStorage.getItem("token");

    if (userToken) {
      // Update user authentication status in Redux
      dispatch(userUpdate({ is_verifiyed: !!userToken }));
    }
  }, [dispatch]);

  const userToken = localStorage.getItem("token");
  return (
    <Router>
      <Routes>
        {/* Conditional routing based on user authentication */}
        {is_verifiyed ? (
          <Route
            path="/*"
            element={
              <PrivateRouter>
                {userToken == "acess-token-admin" ? (
                  <AdminAppRouter />
                ) : userToken == "acess-token-franchisee" ? (
                  <FranchiseeAppRouter />
                ) : (
                  <PharmacyAppRouter />
                )}
              </PrivateRouter>
            }
          />
        ) : (
          <>
            <Route path="/login" element={<Login />} />
          </>
        )}
      </Routes>
    </Router>
  );
}
