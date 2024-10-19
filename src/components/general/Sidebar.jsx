import React, { useState } from "react";
import {
  admin_menuItems,
  franchisee_menuItems,
  pharmacy_menuItems,
} from "../../utils/navlist";
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = ({ franchisee = false, pharmacy = false }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(null); // Track which menu is open

  const data = franchisee
    ? franchisee_menuItems
    : pharmacy
    ? pharmacy_menuItems
    : admin_menuItems;

  const handleMenuClick = (id, path, hasSub) => {
    if (hasSub) {
      setOpenMenu(openMenu === id ? null : id); // Toggle the submenu
    } else {
      navigate(path);
    }
  };

  return (
    <div className="h-[100vh] w-64 bg-[#FFFFFF] flex flex-col px-4 border-[rgba(14, 50, 129, 0.1)] border-[1px]">
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
          {data.map((item) => {
            const isActive = location.pathname === item.path;
            const isSubOpen = openMenu === item.id;

            return (
              <li key={item.id}>
                {/* Main Menu Item */}
                <div
                  onClick={() =>
                    handleMenuClick(item.id, item.path, item.sub?.length)
                  }
                  className={`flex items-center justify-between px-[16px] rounded-[8px] py-[8px] cursor-pointer ${
                    isActive ? "bg-[#F3F5F9]" : "hover:bg-[#F3F5F9]"
                  }`}
                >
                  <div className="flex items-center">
                    {isActive ? (
                      <img src={item.light_icon} alt={item.title} />
                    ) : (
                      <img src={item.icon} alt={item.title} />
                    )}
                    <span
                      className={`ml-3 text-[16px] font-interRegular ${
                        isActive ? "text-[#0E3281]" : "text-[#1C1C1C]"
                      }`}
                    >
                      {item.title}
                    </span>
                  </div>
                  {/* Arrow Icon */}
                  {item.sub && (
                    <span>
                      {isSubOpen ? (
                        <img
                          src="/image/Arrow-up-light-icon.svg"
                          alt="Up arrow"
                        />
                      ) : (
                        <img
                          src="/image/arrow-down-icon.svg"
                          alt="Down arrow"
                        />
                      )}
                    </span>
                  )}
                </div>

                {/* Submenu (if available and open) */}
                {item.sub && isSubOpen && (
                  <ul className="ml-8 mt-2 space-y-1 ">
                    {item.sub.map((subItem) => (
                      <li
                        key={subItem.id}
                        onClick={() => navigate(subItem.path)}
                        className="flex items-center relative  rounded-[8px]  py-[6px] cursor-pointer hover:bg-[#F3F5F9]"
                      >
                        {/* Custom bullet point */}
                        <span className="before:content-[''] before:w-[2px] before:h-[2px] before:bg-[#1C1C1C] before:rounded-full before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2"></span>

                        <span className="ml-4 text-[14px] text-[#0A0A0A]">
                          {subItem.title}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
