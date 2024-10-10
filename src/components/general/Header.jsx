import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userUpdate } from "../../store/UserSlice";

const Header = ({ pervious = "", current = "" }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = () => {
    localStorage.removeItem("token");
    dispatch(userUpdate({ is_verifiyed: false }));
    navigate("/login");
  };
  return (
    <header className="flex w-full h-[70px] justify-between items-center bg-[#FFFFFF] px-4 py-2 border-[rgba(14, 50, 129, 0.1)] border-[1px]">
      {/* Left side */}
      <div className="text-[16px] text-[#1C1C1C] font-interRegular ">
        <h1>
          <span className="text-[#838383]">{pervious}</span> {current}
        </h1>
      </div>

      {/* Right side */}
      <div className="flex items-center space-x-4" onClick={handleClick}>
        <img src="/image/profile.svg" alt="profile" />
        <h1 className="text-[18px] text-[#1C1C1C]">Admin</h1>
      </div>
    </header>
  );
};

export default Header;
