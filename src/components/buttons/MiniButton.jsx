import React from "react";

export default function MiniButton({ title = "", onClick }) {
  return (
    <div>
      <button className="bg-[#269149] text-[#FFFFFF] text-[14px] font-interRegular font-[400] p-[10px] rounded-[8px]">
        {title}
      </button>
    </div>
  );
}
