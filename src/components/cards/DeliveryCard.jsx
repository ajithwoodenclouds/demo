import React from "react";

const DeliveryCard = ({ data, cloumns }) => {
  console.log(data, cloumns);
  return (
    <div className="grid grid-cols-2 gap-3 p-4 mx-auto">
      {data.map((item) => {
        return (
          <div
            className={`${item.color} rounded-lg p-4 flex justify-between items-center shadow-lg`}
          >
            {/* Left Section */}
            <div className="flex flex-col h-[100%] justify-center items-start">
              <div className="flex items-center gap-3 text-gray-600 mb-2">
                <img src="/image/hospital_icon.svg" alt="icon" />
                <span className="text-[#1C1C1C] text-[16px] font-[400]">
                  {item.title}
                </span>
              </div>
              <span className="text-[24px] font-[600] text-[#1C1C1C]">
                {item.amount}
              </span>
            </div>

            {/* Right Section */}
            <div className="flex flex-col items-start justify-start h-[100%] gap-3 ">
              {cloumns.map((column) => {
                return (
                  item[column.accessor] && (
                    <div className="bg-[#FFFFFF52] w-[260px] flex items-center justify-between  rounded-[8px] p-[15px]  text-center shadow-sm">
                      <span className="text-gray-500 text-sm">
                        {column.header}
                      </span>
                      <div className="text-lg font-bold text-gray-900">
                        {item[column.accessor]}
                      </div>
                    </div>
                  )
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DeliveryCard;
