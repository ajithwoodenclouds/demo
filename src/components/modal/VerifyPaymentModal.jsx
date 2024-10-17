import React, { useState } from "react";

const VerifyPaymentModal = ({ isOpen = {}, setIsOpen = {}, data = {} }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center transition-opacity duration-300">
          {/* Modal content */}
          <div
            className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative transform transition-all duration-300 ease-in-out"
            onClick={(e) => e.stopPropagation()} // Prevent closing modal on content click
          >
            <div className="flex justify-between items-center">
              <h3 className="text-[20px] font-[500] text-[#010101]">
                Verify payment
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-800"
              >
                &#x2715;
              </button>
            </div>

            <hr className="my-4" />

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-[14px] text-[#7F7F7F]">Payment type</p>
                <p className="text-[#212529] text-[16px] font-[400]">
                  Custom payment
                </p>
              </div>
              <div>
                <p className="text-[14px] text-[#7F7F7F]">Date</p>
                <p className="text-[#212529] text-[16px] font-[400]">
                  01 January, 2024
                </p>
              </div>
              <div>
                <p className="text-[14px] text-[#7F7F7F]">Amount</p>
                <p className="text-[#212529] text-[16px] font-[400]">$600</p>
              </div>
              <div>
                <p className="text-[14px] text-[#7F7F7F]">Transaction id</p>
                <p className="text-[#212529] text-[16px] font-[400]">
                  9832923120
                </p>
              </div>
              <div className="col-span-2">
                <p className="text-[14px] text-[#7F7F7F]">Payment method</p>
                <p className="text-[#212529] text-[16px] font-[400]">
                  Card (Cash on delivery)
                </p>
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <button className="bg-[#0E3281] text-white px-6 py-2 rounded-lg">
                Approve
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VerifyPaymentModal;
