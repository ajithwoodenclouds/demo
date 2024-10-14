// SectionMiniHeader.js
import React from "react";
import CreateActions from "./CreateActions";
import UpdateAction from "./UpdateAction";
import FilterActions from "./FilterAction";

const SectionMiniHeader = ({ handlClick, type = "", title = "" }) => {
  return (
    <div className="container p-4 mx-auto">
      <div className="flex justify-between items-center rounded-lg px-[20px] py-[12px] bg-[#fff]">
        <h4 className="text-[#1C1C1C] text-[16px] font-interRegular">
          {title}
        </h4>
        {type === "Admin-Franchisee-List" && (
          <CreateActions openModal={handlClick} />
        )}
        {type === "Admin-Franchisee-One" && <UpdateAction />}
        {type === "Admin-Pharmacies_List" && <FilterActions />}
      </div>
    </div>
  );
};

export default SectionMiniHeader;
