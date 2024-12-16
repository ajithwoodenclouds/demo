import React from "react";

export default function HeaderButton({ text, handlClick }) {
  return (
    <div
      onClick={() => handlClick(true)}
      className="flex justify-center gap-1 cursor-pointer rounded-[8px] items-center py-[6px] px-[16px]  bg-[#0E3281]"
    >
      <img src="/image/add_white_icon.svg" alt="icon" />
      <span className="text-[14px] font-[400] font-interRegular text-[#FFFFFF]">
        {text}
      </span>
    </div>
  );
}
