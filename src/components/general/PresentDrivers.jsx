import React from "react";

export default function PresentDrivers({ data, onClick, type = "default" }) {
  const datas = [1, 2, 3, 4, 5, 6, 4, 53];

  return (
    <div
      className={`pr-4 ${
        type === "default" ? "pt-[25px]" : "pt-0 w-full"
      } flex flex-col`}
    >
      {type === "default" && (
        <h3 className="text-[18px] text-[#0A0A0A] font-interRegular font-[400]">
          Present drivers
        </h3>
      )}

      <div className={`${type === "default" ? "pt-[25px]" : "pt-0"}`}>
        <div className="bg-[#FFFFFF] rounded-[12px]  overflow-y-auto max-h-[680px]">
          {type === "DriverTrack" && (
            <div className="w-full border-b p-[24px] last:border-b-0">
              <div className="flex justify-between items-center">
                <div className="relative w-full">
                  <input
                    type="text"
                    placeholder="Search drivers"
                    className="border border-[#1C1C1C66] placeholder:text-[#1C1C1C66] placeholder:text-[14px] w-full rounded-lg py-2 pl-10 pr-4 focus:outline-none"
                  />
                  <img
                    src="/image/search_icon.svg"
                    className="absolute left-3 top-1/2 transform -translate-y-1/2"
                    alt="Search Icon"
                  />
                </div>
              </div>
            </div>
          )}

          <div>
            {datas.map((item, index) => (
              <div
                key={index}
                className="w-[360px] border-b p-[24px] last:border-b-0"
              >
                <div className="flex justify-between items-center">
                  <div className="flex gap-3">
                    <img src="/image/driver_image.svg" alt="Driver" />
                    <div>
                      <h4 className="text-[16px] font-[400] font-interRegular text-[#212529]">
                        James Gonsalves
                      </h4>
                      <span className="text-[#575A5E] text-[14px] font-[400]">
                        #82921433423
                      </span>
                    </div>
                  </div>
                  {type === "default" ? (
                    <div>
                      <img src="/image/arrow_right_black.svg" alt="Icon" />
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
