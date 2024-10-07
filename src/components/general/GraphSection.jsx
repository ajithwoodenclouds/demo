import React, { useState } from "react";
import YearSelector from "../input/YearSelector";
import Graph from "../charts/Graph";
import EarningsCard from "./EarningsCard";

export default function GraphSection() {
  const [selectedYear, setSelectedYear] = useState("This year");
  return (
    <div className="flex  justify-between w-full px-4 h-[450px] bg-gray-100 space-x-6 ">
      {/* Both sections now have equal flex-basis and height */}
      <div className="h-full">
        <EarningsCard />
      </div>
      <div className="flex-1 p-6 bg-white rounded-lg shadow-lg ">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-[18px] font-[500]">Revenue graph</h1>
          <YearSelector
            selectedYear={selectedYear}
            onSelectYear={setSelectedYear}
          />
        </div>
        <Graph />
      </div>
    </div>
  );
}
