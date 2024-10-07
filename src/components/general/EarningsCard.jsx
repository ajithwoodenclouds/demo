import { useState } from "react";
import { FaChevronDown } from "react-icons/fa"; // for dropdown icon
import YearSelector from "../input/YearSelector";

const EarningsCard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("This year");

  const periods = ["Last 7 days", "Last 30 days", "This year", "Total"];

  return (
    <div className="bg-custom-gradient flex flex-col  justify-between text-white w-[370px] rounded-lg p-6 shadow-lg relative h-full">
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
          <h3 className="text-[16px]  text-[#F1F1F1] font-interRegular">
            Total Earnings
          </h3>
          <span className="text-[24px] font-bold text-[#41DD75]">
            $20,318.3
          </span>
        </div>
        <div className="border-t border-gray-700 mt-4 pt-4">
          <a
            href="#"
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
