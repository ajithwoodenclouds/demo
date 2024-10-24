import React, { useState, useEffect } from "react";
import CustomButton from "../buttons/CustomButton";
import { toast } from "react-hot-toast";
const RequestRejectionModal = ({ isOpen, onClose, data }) => {
  const [showModal, setShowModal] = useState(isOpen);
  const [isAnimating, setIsAnimating] = useState(false);
  const [reason, setReason] = useState("");

  const request_confirm = () => {
    if (data) {
      toast.error("Request rejected", {
        icon: (
          <img
            src="/image/error_icon.svg" // Replace with your image URL
            alt="Custom Icon"
          />
        ),
        style: {
          color: "#D76060",
          borderRadius: "86px",
          font: 400,
          fontSize: "14px",
        },
      });
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      setShowModal(true);
      setTimeout(() => setIsAnimating(true), 10); // Slight delay for smooth entry
    } else {
      setIsAnimating(false); // Start closing animation
      setTimeout(() => setShowModal(false), 300); // Wait for animation to complete before unmounting
    }
  }, [isOpen]);

  if (!showModal) return null;

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-opacity duration-700 ${
        isAnimating ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`bg-white rounded-lg shadow-lg p-6 w-full max-w-md transition-transform transform duration-700 ease-in-out ${
          isAnimating
            ? "translate-y-0 opacity-100 scale-100"
            : "translate-y-10 opacity-0 scale-95"
        }`}
      >
        {/* Modal Title */}
        <h3 className="text-[18px] font-interSemibold font-[500] text-[#010101] border-b border-[#0E32811A] pb-4 mb-4">
          Request rejection
        </h3>

        {/* Reason Textarea */}
        <label className="block mb-2 text-[14px] font-interSemibold font-[500] text-[#6A7683]">
          Reason
        </label>
        <textarea
          className="w-full h-24 placeholder:text-[#B0B3B9] placeholder:text-[12px] placeholder:font-[400] p-2 border bg-[#F8F9FB] border-[#EDEEF2] rounded-lg outline-none focus:outline-none appearance-none"
          placeholder="Type reason for leave rejection"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
        />

        {/* Action Buttons */}
        <div className="flex justify-end space-x-4 mt-6">
          <CustomButton
            text="Cancel"
            style="py-2 px-4 border border-[#0E3281] text-[#0E3281] rounded-lg"
            onClick={onClose}
          />
          <CustomButton
            text="Confirm"
            style="py-2 px-4 bg-[#0E3281] text-white rounded-lg"
            onClick={request_confirm}
          />
        </div>
      </div>
    </div>
  );
};

export default RequestRejectionModal;
