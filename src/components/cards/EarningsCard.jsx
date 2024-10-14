import { useState } from "react";
import YearSelector from "../filtter_box/YearSelector";
import { useNavigate } from "react-router-dom";

const EarningsCard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("This year");
  const navigate = useNavigate();

  return (
    <div
      className="bg-custom-gradient flex flex-col justify-between text-white w-[370px] rounded-lg p-6 shadow-lg relative h-full"
      style={{
        backgroundImage:
          "url('/image/card_bg.svg'), linear-gradient(192.82deg, #424953 5.95%, #1C1C1C 94.05%)",
        backgroundSize: "80%, cover", // Use cover for both layers or adjust accordingly
        backgroundPosition: "217% -86%, center", // Set positions for each background
        backgroundRepeat: "no-repeat, no-repeat", // Prevent repetition for both layers
      }}
    >
      <div className="flex justify-end items-center">
        <div className="relative text-[#000]">
          <YearSelector
            color="bg-custom-rgba p-4 text-[#FFFFFF] font-interRegular"
            selectedYear={selectedPeriod}
            onSelectYear={setSelectedPeriod}
          />
        </div>
      </div>
      <div>
        <div className="my-4">
          <h3 className="text-[16px] text-[#F1F1F1] font-interRegular">
            Total Earnings
          </h3>
          <span className="text-[24px] font-bold text-[#41DD75]">
            $20,318.3
          </span>
        </div>
        <div className="border-t border-gray-700 mt-4 pt-4">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault(); // Prevent the default anchor behavior
              navigate("/history"); // Navigate to the dashboard
            }}
            className="text-[#FFFFFF] text-[16px] flex justify-between items-center space-x-1"
          >
            <span>Transaction history</span>
            <img src="/image/arrow _right.svg" alt="arrow" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default EarningsCard;
