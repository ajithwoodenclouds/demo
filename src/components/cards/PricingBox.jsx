import React from "react";
import { data } from "../../utils/subscription-plans";

const PricingBox = ({ onclick }) => {
  return (
    <div className="grid grid-cols-3 gap-3">
      {data.map((item) => {
        return (
          <div className="p-8 border   border-gray-300 rounded-[16px] shadow-md">
            <h3 className="text-[#007FFF] font-interRegular text-[16px] font-[400]">
              Basic
            </h3>
            <p className="text-[#000000] font-[500] text-[24px] my-[15px]">
              ${item.plan_amount}.0
            </p>
            <div className=" border-b my-[15px]"></div>
            <ul className="space-y-1 text-gray-700 ">
              <li className="text-[#575A5E] text-[15px] font-[400] font-interRegular">
                <span className="text-[#000000]">• </span>Area: {item.area}{" "}
                sq.km
              </li>
              <li className="text-[#575A5E] text-[15px] font-[400] font-interRegular">
                <span className="text-[#000000]">• </span> Commission within{" "}
                {item.area} sq.km: ${item.per_delivery1} per delivery
              </li>
              <li className="text-[#575A5E] text-[15px] font-[400] font-interRegular">
                <span className="text-[#000000]">• </span> Commission beyond{" "}
                {item.area} sq.km: ${item.per_delivery1} per delivery
              </li>
            </ul>
          </div>
        );
      })}
      <div className="p-8 border   border-gray-300 flex justify-center rounded-[16px] shadow-md">
        <div
          className="flex flex-col justify-center cursor-pointer items-center"
          onClick={onclick}
        >
          <img src="/image/pricing_add_icon.svg" alt="icon" />
          <p className="text-[#AFAFAF] text-[14px] font-[400] font-interRegular">
            Create subscription plan
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingBox;
