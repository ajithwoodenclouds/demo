import React from "react";
import CustomButton from "../buttons/CustomButton";

const PaymentCard = ({ handleClick, type }) => {
  return (
    <div
      className={`w-full ${
        type === "CreateDueSettling" ? "px-0 py-4" : "p-4"
      } `}
    >
      <div
        className="rounded-[16px] p-6 flex justify-between items-center"
        style={{
          backgroundImage:
            "url('/image/card_bg.svg'), url('/image/card_bg.svg'), linear-gradient(192.82deg, #424953 5.95%, #1C1C1C 94.05%)",
          backgroundSize: "10%,10%, cover", // Use cover for both layers or adjust accordingly
          backgroundPosition: "-4% -49px,34% 110px, center", // Set positions for each background
          backgroundRepeat: "no-repeat, no-repeat",
        }}
      >
        {/* Left Section */}
        <div>
          <div className="flex items-center space-x-2 text-[#FFFFFF]">
            <img src="/image/due_icon.svg" alt="Icon" />
            <span className="text-[14px]">Pending due amount</span>
          </div>
          <div className="text-[24px] text-[#41DD75] font-[600]">$39,671</div>
        </div>

        {/* Right Section */}
        {type === "CreateDueSettling" ? null : (
          <div
            className="bg-[#B0E2CD] rounded-[8px] p-[32px] w-[390px] items-center flex justify-between text-right "
            style={{
              backgroundImage: "url('/image/card_bg.svg')",
              backgroundSize: "30%", // Use cover for both layers or adjust accordingly
              backgroundPosition: "-22% -54px", // Set positions for each background
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className=" flex flex-col items-start ">
              <h3 className="text-[#1C1C1C] text-[16px] font-[400] font-interRegular">
                Latest bill generated
              </h3>
              <h4 className="text-[24px] text-[#1C1C1C] font-[600] font-interBold">
                $39,671
              </h4>
            </div>

            <CustomButton
              onClick={() => handleClick(true)}
              text="Mark as paid"
              style="bg-[#269149] text-[#fff] text-[12px] w-[120px] h-[35px] py-2 px-4 rounded-md hover:bg-green-700 transition duration-300"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentCard;
