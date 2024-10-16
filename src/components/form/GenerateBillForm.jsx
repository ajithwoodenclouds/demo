import React, { useState, useEffect } from "react";
import CustomButton from "../buttons/CustomButton";

export default function GenerateBillForm({ closeModal, data, isOpen }) {
  const [paymentType, setPaymentType] = useState("full"); // Default to Full Amount
  const [customAmount, setCustomAmount] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Delay showing the modal to allow for animation
      setTimeout(() => {
        setShowModal(true);
      }, 10); // Small delay to allow CSS transition
    } else {
      setShowModal(false);
    }
  }, [isOpen]);

  const handleClose = () => {
    setShowModal(false);
    setTimeout(() => {
      closeModal(); // Close the modal after the animation ends
    }, 300); // Match this with your transition duration
  };

  return (
    <div
      className={`fixed inset-0 flex p-[10px] bg-black bg-opacity-50 transition-opacity duration-500 ${
        showModal ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`w-full transition-transform duration-500 ${
          showModal ? "translate-y-0 scale-100" : "translate-y-4 scale-95"
        }`}
      >
        <div className="bg-white px-[180px] py-[72px] rounded-lg shadow-lg w-full h-fit relative">
          <div className="flex gap-3 mb-[30px]">
            <img src="/image/franchisee_icon.svg" alt="icon" />
            <h2 className="text-[#212529] text-[20px] font-[500] font-interSemibold">
              Bill generation
            </h2>
          </div>

          <div className="flex flex-col justify-end">
            <form className="grid grid-cols-2 gap-10">
              {/* Franchisee Selection */}
              <div>
                <label
                  htmlFor="franchisee"
                  className="block font-interRegular mb-[10px] font-[400] text-[16px] text-[#6A7683]"
                >
                  Franchisee
                </label>
                <select
                  id="franchisee"
                  className="w-full border-b-2 placeholder:text-[16px] border-[#C9D2DB] focus:border-blue-500 outline-none"
                >
                  <option value="">Select franchisee</option>
                  {/* Add more options as needed */}
                </select>
              </div>

              {/* Payment Type with Buttons */}
              <div>
                <label className="block font-interRegular mb-[10px] font-[400] text-[16px] text-[#6A7683]">
                  Payment Type
                </label>
                <div className="flex gap-5">
                  <button
                    type="button"
                    className={`flex items-center justify-center px-4 py-2 rounded-md border ${
                      paymentType === "full"
                        ? "border-[#0E3281] text-[#0E3281]"
                        : "border-gray-300 text-gray-500"
                    }`}
                    onClick={() => setPaymentType("full")}
                  >
                    <span
                      className={`w-4 h-4 mr-2 rounded-full border flex items-center justify-center ${
                        paymentType === "full"
                          ? "border-[#0E3281] text-[#0E3281]"
                          : "border-gray-400"
                      }`}
                    >
                      {paymentType === "full" && (
                        <span className="w-2 h-2 bg-[#0E3281] rounded-full"></span>
                      )}
                    </span>
                    Full Amount
                  </button>
                  <button
                    type="button"
                    className={`flex items-center justify-center px-4 py-2 rounded-md border ${
                      paymentType === "custom"
                        ? "border-[#0E3281] text-[#0E3281]"
                        : "border-gray-300 text-gray-500"
                    }`}
                    onClick={() => setPaymentType("custom")}
                  >
                    <span
                      className={`w-4 h-4 mr-2 rounded-full border flex items-center justify-center ${
                        paymentType === "custom"
                          ? "border-[#0E3281]"
                          : "border-gray-400"
                      }`}
                    >
                      {paymentType === "custom" && (
                        <span className="w-2 h-2 bg-[#0E3281] rounded-full"></span>
                      )}
                    </span>
                    Custom Amount
                  </button>
                </div>
              </div>

              {/* Custom Amount Input - Shows only if 'Custom Amount' is selected */}
              {paymentType === "custom" && (
                <div>
                  <label
                    htmlFor="customAmount"
                    className="block font-interRegular mb-[10px] text-[16px] text-[#6A7683]"
                  >
                    Custom Amount
                  </label>
                  <input
                    id="customAmount"
                    type="number"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    placeholder="Enter custom amount"
                    className="w-full border-b-2 placeholder:text-[16px] border-[#C9D2DB] focus:border-blue-500 outline-none"
                  />
                </div>
              )}

              {/* Due Date Input */}
              <div>
                <label
                  htmlFor="dueDate"
                  className="block font-interRegular mb-[10px] font-[400] text-[16px] text-[#6A7683]"
                >
                  Due Date
                </label>
                <input
                  id="dueDate"
                  type="date"
                  className="w-full border-b-2 placeholder:text-[16px] border-[#C9D2DB] focus:border-blue-500 outline-none"
                />
              </div>
            </form>

            <div className="flex mt-[20px] justify-end gap-5">
              <CustomButton
                style="border border-[#0E3281] text-[#0E3281] w-[200px] h-[48px] py-[10px] px-[24px] rounded"
                text="Cancel"
                onClick={handleClose}
              />
              <CustomButton
                style=" bg-[#0E3281] text-[#fff] w-[200px] h-[48px] py-[10px] px-[24px] rounded"
                text="Submit"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
