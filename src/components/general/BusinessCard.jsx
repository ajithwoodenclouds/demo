import React from "react";

const BusinessCard = () => {
  return (
    <div className="container p-4 mx-auto font-interRegular">
      <div className="bg-white py-[40px] px-[32px] grid grid-cols-1 gap-10 rounded-[16px] md:grid-cols-2 lg:grid-cols-3 h-full">
        {/* Top Content */}
        <div className="flex items-center space-x-4">
          <div className="bg-[#F3F5F9] p-[14px] rounded-full flex justify-center items-center">
            <img src="/image/franchisee_icon_light.svg" alt="icon" />
          </div>
          <div>
            <h2 className="text-[18px] font-interRegular font-[500]">
              Franchisee One
            </h2>
            <p className="text-[14px] font-interRegular font-[500] text-[#575A5E]">
              #82921433423
            </p>
          </div>
        </div>

        <div>
          <p className="text-[#575A5E] text-[16px] font-[400]">Company name</p>
          <p className="text-[16px] text-[#212529] font-[400]">
            Trinity Medicare & Pharmaceuticals
          </p>
        </div>

        <div>
          <p className="text-[#575A5E] text-[16px] font-[400]">
            Company Reg no
          </p>
          <p className="text-[16px] text-[#212529] font-[400]">
            MPC82926329836202
          </p>
        </div>

        {/* Bottom Content */}
        <div className="flex space-x-2">
          <div>
            <p className="text-[#575A5E] text-[16px] flex gap-2 font-[400]">
              <img src="/image/location_icon.svg" alt="icon" />
              Location
            </p>
            <p className="text-[16px] text-[#212529] font-[400]">
              Toronto Medical Deliveries 124 Street, Toronto
            </p>
          </div>
        </div>

        <div>
          <p className="text-[#575A5E] text-[16px] flex gap-2 font-[400]">
            <img src="/image/phone_icon.svg" alt="icon" />
            Phone
          </p>
          <p className="text-[16px] text-[#212529] font-[400]">
            +91 90 6313 2363
          </p>
        </div>

        <div>
          <p className="text-[#575A5E] text-[16px] flex gap-2 font-[400]">
            <img src="/image/mail_icon.svg" alt="icon" />
            Email
          </p>
          <p className="text-[16px] text-[#212529] font-[400]">
            demomedicaldelivery@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
