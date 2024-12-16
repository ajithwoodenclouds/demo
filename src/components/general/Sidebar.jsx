import React, { useState } from "react";
import {
  admin_menuItems,
  franchisee_menuItems,
  pharmacy_menuItems,
} from "../../utils/navlist";
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = ({ franchisee = false, pharmacy = false, type = "" }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(null);

  const data = franchisee
    ? franchisee_menuItems
    : pharmacy
    ? pharmacy_menuItems
    : admin_menuItems;

  const handleMenuClick = (id, path, hasSub) => {
    if (hasSub) {
      setOpenMenu(openMenu === id ? null : id);
    } else {
      navigate(path);
    }
  };

  return (
    <div
      className={`h-[100vh] bg-[#FFFFFF] flex flex-col px-4 border-[rgba(14, 50, 129, 0.1)] border-[1px]
        ${
          type === "OrdersCalendarViewSection"
            ? "w-auto min-w-[48px] max-w-[64px] md:min-w-[80px] md:max-w-[100px]"
            : "w-[260px]"
        }`}
    >
      {/* Logo Section */}
      <div className="flex items-center gap-1 py-5 md:py-7">
        <img
          src="/image/d2d_logo.svg"
          className="w-[24px] md:w-[30px]"
          alt="Logo"
        />
        <img
          src="/image/healthcare_logo.svg"
          className="w-[80px] md:w-[100px]"
          alt="Logo"
        />
      </div>

      {/* Navigation Menu */}
      <nav className="mb-4">
        <ul className="space-y-2">
          {data.map((item) => {
            const isActive = location.pathname === item.path;
            const isSubOpen = openMenu === item.id;
            const showOnlyIcon = type === "OrdersCalendarViewSection";

            return (
              <li key={item.id} className="w-full">
                <div
                  onClick={() =>
                    handleMenuClick(item.id, item.path, item.sub?.length)
                  }
                  className={`flex items-center w-[100%] justify-between ${
                    showOnlyIcon ? " px-[8px]" : "px-[10px] md:px-[16px]"
                  } rounded-[8px] py-[6px] cursor-pointer ${
                    isActive ? "bg-[#F3F5F9]" : "hover:bg-[#F3F5F9]"
                  }`}
                >
                  <div className="flex items-center w-full">
                    <img
                      src={
                        isActive ||
                        (location.pathname === "/calendar-view" &&
                          item.title === "Orders")
                          ? item.light_icon
                          : item.icon
                      }
                      alt={item.title}
                    />
                    {!showOnlyIcon && (
                      <span
                        className={`ml-3 text-[16px] font-interRegular hidden md:inline ${
                          isActive ? "text-[#0E3281]" : "text-[#1C1C1C]"
                        }`}
                      >
                        {item.title}
                      </span>
                    )}
                  </div>
                  {item.sub && !showOnlyIcon && (
                    <span className="hidden md:inline">
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

                {/* Submenu */}
                {item.sub && isSubOpen && (
                  <ul className="ml-8 mt-2 space-y-1 hidden md:block">
                    {item.sub.map((subItem) => {
                      const isSubActive = location.pathname === subItem.path;

                      return (
                        <li
                          key={subItem.id}
                          onClick={() => navigate(subItem.path)}
                          className={`flex items-center relative rounded-[8px] py-[6px] cursor-pointer ${
                            isSubActive
                              ? "bg-[#F3F5F9] text-[#0E3281]"
                              : "hover:bg-[#F3F5F9] text-[#0A0A0A]"
                          }`}
                        >
                          <span className="before:content-[''] before:w-[2px] before:h-[2px] before:bg-[#1C1C1C] before:rounded-full before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2"></span>
                          <span className="ml-4 text-[14px]">
                            {subItem.title}
                          </span>
                        </li>
                      );
                    })}
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
