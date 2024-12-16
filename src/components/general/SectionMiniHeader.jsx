// SectionMiniHeader.js
import React from "react";
import CreateActions from "./CreateActions";
import UpdateAction from "./UpdateAction";
import FilterActions from "./FilterAction";
import PdfAction from "./PdfAction";

const SectionMiniHeader = ({
  handlCreate,
  type = "",
  title = "",
  franchisee = false,
  placeHolder,
}) => {
  return (
    <div className="container px-4 pt-4 mx-auto">
      <div className="flex justify-between items-center rounded-lg px-[20px] py-[12px] bg-[#fff]">
        <h4 className="text-[#1C1C1C] text-[16px] font-interRegular">
          {title}
        </h4>

        {type === "Admin-Franchisee-List" ||
          (type === "Franchisee-Drivers list" && (
            <CreateActions openModal={handlCreate} />
          ))}
        {type === "Admin-Franchisee-One" && <UpdateAction />}
        {type === "Admin-Pharmacies_List" && (
          <FilterActions
            handleCreate={handlCreate}
            franchisee={franchisee}
            placeholder={placeHolder}
          />
        )}
        {type === "Admin-Accounts" && <PdfAction />}
        {type === "Customers_List" && (
          <div className="flex items-center space-x-2">
            <div className="relative">
              <input
                type="text"
                placeholder={placeHolder}
                className="border border-[#1C1C1C66] rounded-lg py-2 pl-10 pr-4 focus:outline-none"
              />
              <img
                src="/image/search_icon.svg"
                className="absolute left-3 top-1/2 transform -translate-y-1/2"
                alt="Search Icon"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SectionMiniHeader;
