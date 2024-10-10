import React from "react";

export default function UpdateAction() {
  return (
    <div className="flex items-center py-[12px] px-[20px] gap-4">
      {/* Edit Action */}
      <div className="flex items-center gap-2 cursor-pointer">
        <img src="/image/edit_icon.svg" alt="Edit Icon" className="w-[20px]" />
        <h3 className="text-[16px] font-interRegular">Edit</h3>
      </div>

      {/* Delete Action */}
      <div className="flex items-center gap-2 cursor-pointer">
        <img
          src="/image/delete_icon.svg"
          alt="Delete Icon"
          className="w-[20px]"
        />
        <h3 className="text-[16px] font-interRegular">Delete</h3>
      </div>
    </div>
  );
}
