import React from "react";
import { FiEdit, FiTrash } from "react-icons/fi";

export default function SubBox({ isOpen, onClose, content, title }) {
  if (!isOpen) return null;
  console.log(content);
  return (
    <div className="relative z-10">
      <div
        className="absolute mt-2 top-[-155px]
    right-[0]  items-center w-[150px] bg-white border border-gray-300 rounded-lg shadow-lg"
      >
        <div className="flex items-center p-[20px] gap-2 border-b">
          <img src="/image/edit_icon.svg" alt="icon" />
          <h1>Edit</h1>
        </div>
        <div className="flex items-center p-[20px] gap-2">
          <img src="/image/delete_icon.svg" alt="icon" />
          <h1>Delete</h1>
        </div>
      </div>
    </div>
  );
}
