import React from "react";

export default function PresentDrivers({ data }) {
  return (
    <div className="pr-4 pt-[25px] flex w-fit flex-col">
      <h3 className="text-[18px] text-[#0A0A0A] font-interRegular font-[400]">
        Present drivers
      </h3>
      <div className="pt-[25px]">
        {/* Container with scroll on Y-axis */}
        <div className="bg-[#FFFFFF] rounded-[12px] max-h-[540px] overflow-y-auto">
          <div className="w-[360px] border-b p-[24px] last:border-b-0">
            <div className="flex justify-between items-center">
              <div className="flex gap-3">
                <img src="/image/driver_image.svg" alt="image" />
                <div>
                  <h4 className="text-[16px] font-[400] font-interRegular text-[#212529]">
                    James Gonsalves
                  </h4>
                  <span className="text-[#575A5E] text-[14px] font-[400]">
                    #82921433423
                  </span>
                </div>
              </div>
              <div>
                <img src="/image/arrow_right_black.svg" alt="icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
