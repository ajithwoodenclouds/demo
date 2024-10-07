import React, { useEffect } from "react";
import Login from "../../screens/auth/Login";
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import AppRouter from "./AppRouter";
import PrivateRouter from "../route/PrivateRouter";
import { userUpdate } from "../../store/UserSlice";

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

  return (
    <Router>
      <Routes>
        {/* Conditional routing based on user authentication */}
        {is_verifiyed ? (
          <Route
            path="/*"
            element={
              <PrivateRouter>
                <AppRouter />
              </PrivateRouter>
            }
          />
        ) : (
          <>
            {/* Public routes for unauthenticated users */}
            <Route path="/login" element={<Login />} />
            {/* Redirect all other routes to login if not authenticated */}
            <Route path="/*" element={<Navigate to="/login" replace />} />
          </>
        )}
      </Routes>
    </Router>
  );
}
