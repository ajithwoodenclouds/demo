import React from "react";
import MiniButton from "../buttons/MiniButton";
import SingleTotalCard from "./SingleTotalCard";
import { driversOne_admin_data } from "../../utils/home_card_data";

const DetailsCardSection = () => {
  return (
    <div className="w-[60%]  bg-white shadow-md rounded-lg">
      {/* Top Section */}
      <div className="p-6  border-b border-[#F5F7FA]">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <img
              src="/image/driver_image.svg"
              alt="Profile"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <h3 className="text-[18px] text-[#212529] font-[500]">
                James Gonsalves
              </h3>
              <span className="text-[14px] text-[#575A5E]">#82921433423</span>
            </div>
          </div>
          <MiniButton title="Active" />
        </div>
        <SingleTotalCard data={driversOne_admin_data} />
      </div>

      {/* Mid Section */}
      <div className=" px-6 pt-6">
        <div className="mb-2 flex items-center justify-between">
          <h4 className="text-[14px] font-[400] text-[#575A5E]">Sin number</h4>
          <h3 className="text-[14px] text-[#212529] font-[400]">PPGTE7821Y</h3>
        </div>
        <div className="mb-2 flex items-center justify-between">
          <h4 className="text-[14px] font-[400] text-[#575A5E]">
            License number
          </h4>
          <h3 className="text-[14px] text-[#212529] font-[400]">29834723232</h3>
        </div>
        <div className="flex items-center  justify-between">
          <h4 className="text-[14px] font-[400] text-[#575A5E]">
            Plate number
          </h4>
          <h3 className="text-[14px] text-[#212529] font-[400]">BCD-666</h3>
        </div>
        <div className="border-b border-[#F5F7FA] pt-6"></div>
      </div>

      {/* Bottom Section */}
      <div className="p-6">
        <div className="flex items-center  justify-between">
          <div className="flex items-center gap-2 mb-2">
            <img src="/image/mail_icon.svg" alt="Icon" />
            <h3 className="text-[14px] font-[400] text-[#575A5E]">Email</h3>
          </div>
          <h3 className="text-[14px] text-[#212529] font-[400]">
            demomedicaldelivery@gmail.com
          </h3>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 mb-2">
            <img src="/image/phone_icon.svg" alt="Icon" />
            <h3 className="text-[14px] font-[400] text-[#575A5E]">Phone</h3>
          </div>
          <h3 className="text-[14px] text-[#212529] font-[400]">
            +1 250 555 0199
          </h3>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 mr-2">
            <img src="/image/location_icon.svg" alt="Icon" />
            <h3 className="text-[14px] font-[400] text-[#575A5E]">Location</h3>
          </div>
          <h3 className="text-[14px] text-[#212529] font-[400]">
            Toronto Medical Deliveries 124 street, Toronto.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default DetailsCardSection;
