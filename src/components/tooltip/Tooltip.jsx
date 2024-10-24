import React from "react";

const Tooltip = ({ children, content }) => {
  return (
    <div className="relative group">
      {/* Wrapped children */}
      <span className="text-black border-b border-dotted">{children}</span>

      {/* Tooltip content */}
      <div className="absolute invisible group-hover:visible bg-[#FFFFFF] text-[#667085]  text-[14px] font-interSemibold font-[500] text-center rounded-lg px-3 py-1 z-10 bottom-full left-1/2 transform -translate-x-1/2 mb-2">
        {content}
        <div className="absolute left-1/2 transform -translate-x-1/2 mt-1 w-0 h-0 border-t-8 border-[#FFFFFF] border-x-transparent border-x-8 border-b-0"></div>
      </div>
    </div>
  );
};

export default Tooltip;
