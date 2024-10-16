import React from "react";

export default function PdfAction({ openModal }) {
  return (
    <div className="flex items-center gap-4">
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => openModal(true)}
      >
        <img
          src="/image/download_arrow.svg"
          alt="Add Icon"
          className="w-[30px]"
        />
        <h3 className="text-[16px] font-interRegular">Download pdf</h3>
      </div>
    </div>
  );
}
