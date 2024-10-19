import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CustomButton from "../components/buttons/CustomButton";
import { userUpdate } from "../store/UserSlice";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, "name", value);
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    if (userData.email && userData.password) {
      dispatch(userUpdate({ ...userData, is_verifiyed: true }));
      if (userData.email === "admin@gmail.com") {
        localStorage.setItem("token", "acess-token-admin");
      } else if (userData.email === "franchisee@gmail.com") {
        localStorage.setItem("token", "acess-token-franchisee");
      } else {
        localStorage.setItem("token", "acess-token-pharmacy");
      }
    }
    setUserData({
      email: "",
      password: "",
    });
    navigate("/");
  };

  return (
    <div className="flex flex-col lg:flex-row font-clash min-h-screen bg-gray-50">
      {/* Left Side Image */}
      <div
        className="hidden lg:block lg:w-1/2 bg-cover bg-center"
        style={{ backgroundImage: 'url("/image/login.png")' }}
      >
        <div className="flex flex-col items-center justify-center h-full px-12">
          <img
            src="/image/delivery_boy.png"
            alt="Courier"
            className="h-auto rounded-lg"
          />
        </div>
      </div>
      {/* Right Side Form */}
      <div className="flex items-center justify-center w-full lg:w-1/2 p-8">
        <div className="w-full max-w-md text-center">
          <h2 className="text-[36px] leading-[42.73px] font-clash text-[#212529] font-[500]">
            Login to your account
          </h2>
          <p className="text-[#5D5D5D] font-causten-regular font-causten text-[14px] font-[400]">
            Welcome! Get ready to kickstart your journey with us
          </p>

          <form className="mt-8 space-y-6">
            <div className="space-y-4">
              <div className="text-left">
                <label
                  htmlFor="email"
                  className="text-left font-[500] text-[18px] text-[#717171]"
                >
                  E-mail *
                </label>
                <input
                  id="email"
                  name="email"
                  value={userData.email}
                  onChange={handleChange}
                  type="email"
                  required
                  className="w-full px-4 py-3 mt-2 border border-[#949494] rounded-[16px] focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your email"
                />
              </div>

              <div className="text-left">
                <label
                  htmlFor="password"
                  className="text-left font-[500] text-[18px] text-[#717171]"
                >
                  Password *
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={userData.password}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 mt-2 border border-[#949494] rounded-[16px] focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <CustomButton
              text="Continue"
              style="w-full px-4 py-3 bg-[#0E3281] text-[#F9FBFC] text-[16px] rounded-[16px] focus:outline-none"
              onClick={handleSubmit}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
