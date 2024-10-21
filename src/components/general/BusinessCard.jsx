import React from "react";
import MiniButton from "../buttons/MiniButton";
import SingleTotalCard from "../cards/SingleTotalCard";
import {
  driversOne_admin_data,
  due_list_One_admin_data,
} from "../../utils/home_card_data";

const BusinessCard = ({ data, title = "", type = "", franchisee = false }) => {
  return (
    <div className="container p-4 mx-auto font-interRegular">
      <div className="bg-white py-[40px] px-[32px] grid grid-cols-1  rounded-[16px] h-full">
        {/* First Row - Top Content */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ${
            title == "Pharmacy 01" ? " lg:grid-cols-4" : "lg:grid-cols-3"
          } gap-6 border-b-2 border-[#F5F7FA] pb-6`}
        >
          {/* Franchisee Info */}
          <div className="flex items-center space-x-4">
            <div className="bg-[#F3F5F9] p-[14px] rounded-full flex justify-center items-center">
              <img src="/image/franchisee_icon_light.svg" alt="icon" />
            </div>
            <div>
              <h2 className="text-[18px] font-interRegular font-[500]">
                {title}
              </h2>
              <p className="text-[14px] font-interRegular font-[500] text-[#575A5E]">
                #82921433423
              </p>
            </div>
          </div>

          {/* Company Name */}
          <div>
            <p className="text-[#575A5E] text-[16px] font-[400]">
              Company name
            </p>
            <p className="text-[16px] text-[#212529] font-[400]">
              Trinity Medicare & Pharmaceuticals
            </p>
          </div>

          {/* Company Reg Number */}
          {type !== "Admin-Due-OneSection" && (
            <div>
              <p className="text-[#575A5E] text-[16px] font-[400]">
                Company Reg no
              </p>
              <p className="text-[16px] text-[#212529] font-[400]">
                MPC82926329836202
              </p>
            </div>
          )}
          {type == "Admin-Due-OneSection" && (
            <div className="flex space-x-4 items-start">
              <img src="/image/location_icon.svg" alt="location icon" />
              <div>
                <p className="text-[#575A5E] text-[16px] font-[400]">
                  Location
                </p>
                <p className="text-[16px] text-[#212529] font-[400]">
                  Toronto Medical Deliveries 124 Street, Toronto
                </p>
              </div>
            </div>
          )}

          {/* Action Button */}
          {title === "Pharmacy 01" && (
            <div className="flex items-center ">
              {!franchisee && (
                <h3 className="font-[500] font-interSemibold text-[16px] text-[#269149]">
                  Basic plan
                </h3>
              )}

              <MiniButton title="Active" />
            </div>
          )}
        </div>

        {/* Second Row - Bottom Content */}
        {type !== "Admin-Due-OneSection" ? (
          <div className="grid grid-cols-1 pt-6 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Location */}
            <div className="flex space-x-4 items-start">
              <img src="/image/location_icon.svg" alt="location icon" />
              <div>
                <p className="text-[#575A5E] text-[16px] font-[400]">
                  Location
                </p>
                <p className="text-[16px] text-[#212529] font-[400]">
                  Toronto Medical Deliveries 124 Street, Toronto
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex space-x-4 items-start">
              <img src="/image/phone_icon.svg" alt="phone icon" />
              <div>
                <p className="text-[#575A5E] text-[16px] font-[400]">Phone</p>
                <p className="text-[16px] text-[#212529] font-[400]">
                  +91 90 6313 2363
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex space-x-4 items-start">
              <img src="/image/mail_icon.svg" alt="email icon" />
              <div>
                <p className="text-[#575A5E] text-[16px] font-[400]">Email</p>
                <p className="text-[16px] text-[#212529] font-[400]">
                  demomedicaldelivery@gmail.com
                </p>
              </div>
            </div>
          </div>
        ) : (
          <SingleTotalCard
            data={due_list_One_admin_data}
            type="Admin-Due-OneSection"
          />
        )}
      </div>
    </div>
  );
};

export default BusinessCard;
