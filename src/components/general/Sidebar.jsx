import React from "react";
import { menuItems } from "../../utils/navlist";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="h-[100vh] w-64 bg-[#FFFFFF]  flex flex-col px-4   border-[rgba(14, 50, 129, 0.1)] border-[1px]">
      {/* Header Section */}
      <div className="flex items-center p-4">
        <img src="/image/logo_icon.svg" alt="Logo" />
        <h1 className="text-[16px] text-[#1C1C1C] font-interRegular ml-4">
          Medicals
        </h1>
      </div>

      {/* Navigation List */}
      <nav className="mb-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            return (
              <li
                key={item.id}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(item.path);
                }}
                className="flex items-center px-[16px] rounded-[8px] py-[8px] hover:bg-gray-100 cursor-pointer"
              >
                {/* <HomeIcon className="w-6 h-6 text-gray-600" /> */}
                <img src={item.icon} alt={item.title} />
                <span className="ml-3 text-[16px] text-[#1C1C1C] font-interRegular">
                  {item.title}
                </span>
              </li>
            );
          })}

          {/* Add more nav items below as needed */}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
