import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userUpdate } from "../../store/UserSlice";
import HeaderButton from "../buttons/HeaderButton";
import CreateOrder from "../form/CreateOrder";

const Header = ({
  pervious = "",
  current = "",
  franchisee = false,
  pharmacy = false,
}) => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const handleClick = () => {
    localStorage.removeItem("token");
    dispatch(userUpdate({ is_verifiyed: false }));
    navigate("/login");
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <header className="flex w-full h-[70px] justify-between items-center bg-[#FFFFFF] px-4 py-2 border-[rgba(14, 50, 129, 0.1)] border-[1px] md:flex-wrap md:gap-4">
      {/* Left side */}
      <div className="text-[16px] text-[#1C1C1C] font-interRegular">
        <h1 className="text-sm md:text-base lg:text-lg">
          <span className="text-[#838383]">{pervious}</span> {current}
        </h1>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-3 flex-wrap md:justify-between lg:flex-nowrap lg:gap-4">
        {franchisee && <HeaderButton text={"create"} />}

        {pharmacy && (
          <div className="py-[6px] flex items-center justify-center px-[8px] md:px-[16px] border-[#48AE50] rounded-[8px] border-[1px]">
            <span className="font-interRegular font-[400] text-[#48AE50] text-[12px] md:text-[14px]">
              Basic plan
            </span>
          </div>
        )}

        {pharmacy && (
          <HeaderButton handlClick={setIsModalOpen} text={"Create order"} />
        )}

        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={handleClick}
        >
          <img
            src="/image/profile.svg"
            alt="profile"
            className="w-6 h-6 md:w-8 md:h-8"
          />
          <h1 className="text-[16px] md:text-[18px] text-[#1C1C1C]">Admin</h1>
        </div>
      </div>

      {isModalOpen && (
        <CreateOrder closeModal={closeModal} isOpen={isModalOpen} />
      )}
    </header>
  );
};

export default Header;
