import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userUpdate } from "../../store/UserSlice";

const Header = ({
  pervious = "",
  current = "",
  franchisee = false,
  pharmacy = false,
}) => {
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
      <div className="flex items-center gap-3">
        {franchisee && (
          <div className="flex justify-center gap-1 cursor-pointer rounded-[8px] items-center w-[101px] h-[32px] py-[6px] px-[16px]  bg-[#0E3281]">
            <img src="/image/add_white_icon.svg" alt="icon" />
            <h1 className="text-[14px] font-[400] font-interRegular text-[#FFFFFF]">
              Create
            </h1>
          </div>
        )}

        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={handleClick}
        >
          <img src="/image/profile.svg" alt="profile" />
          <h1 className="text-[18px] text-[#1C1C1C]">Admin</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
