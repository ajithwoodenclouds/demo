import React, { useEffect, useState } from "react";

const DetailsModal = ({ isOpen, onClose, data }) => {
  const [showModal, setShowModal] = useState(isOpen);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShowModal(true); // Show the modal
      setTimeout(() => setIsAnimating(true), 10); // Start animation after a brief delay
    } else {
      setIsAnimating(false); // Start closing animation
      setTimeout(() => setShowModal(false), 300); // Unmount modal after animation
    }
  }, [isOpen]);

  // Close modal when pressing 'Escape' key
  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEscapeKey);
    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, [onClose]);

  // Prevent rendering when not needed
  if (!showModal) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isAnimating ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Modal Content */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 transform ${
          isAnimating ? "scale-100 opacity-100" : "scale-95 opacity-0 "
        }`}
        style={{
          pointerEvents: isAnimating ? "auto" : "none",
        }}
      >
        <div className="bg-white shadow-lg rounded-lg max-w-[600px] w-full p-6 transform transition-all duration-300">
          {/* Top Section */}
          <div className="modal-header flex justify-between items-center border-b pb-4 mb-4">
            <h3 className="text-[18px] text-[#010101] font-semibold">
              Details
            </h3>
            <img
              src="/image/close_icon.svg"
              alt="Close"
              className="cursor-pointer w-6 h-6"
              onClick={onClose}
            />
          </div>

          {/* Mid Section */}
          <div className="modal-mid-section border-b pb-4 mb-4">
            <h3 className="text-[16px] text-[#212529] font-semibold mb-3">
              Order details:
            </h3>
            <div className="flex justify-between">
              <div className="mb-3">
                <div className="mb-3">
                  <span className="text-[14px] text-[#7F7F7F]">
                    Order status
                  </span>
                  <h3 className="text-[14px] text-[#48AE50]">Delivered</h3>
                </div>
                <div className="mb-3">
                  <span className="text-[14px] text-[#7F7F7F]">
                    Payment method
                  </span>
                  <h3 className="text-[14px] text-[#212529]">
                    Card (Cash on delivery)
                  </h3>
                </div>
                <div>
                  <span className="text-[14px] text-[#7F7F7F]">
                    Assigned Driver
                  </span>
                  <div className="flex mt-[10px] gap-3 items-center">
                    <img src="/image/driver_image.svg" alt="Icon" />
                    <h3 className="text-[14px] text-[#212529]">
                      James Gonsalves
                    </h3>
                  </div>
                </div>
              </div>

              <div className="mb-3">
                <div className="mb-3">
                  <span className="text-[14px] text-[#7F7F7F]">Order type</span>
                  <h3 className="text-[14px] text-[#212529]">Delivery</h3>
                </div>
                <div className="mb-3">
                  <span className="text-[14px] text-[#7F7F7F]">Amount</span>
                  <h3 className="text-[14px] text-[#212529]">$80</h3>
                </div>
                <div>
                  <span className="text-[14px] text-[#7F7F7F]">Location</span>
                  <h3 className="text-[14px] w-[60%] text-[#212529]">
                    Toronto Medical Deliveries 124 street, Toronto.
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="modal-bottom-section">
            <h3 className="text-[16px] text-[#212529] font-semibold mb-3">
              Delivery details:
            </h3>
            <div className="modal-header flex justify-between items-center border-b pb-4 mb-3">
              <div className="mb-3">
                <span className="text-[14px] text-[#7F7F7F]">
                  Recipient name
                </span>
                <h3 className="text-[14px] text-[#212529]">David Abraham</h3>
                <h3 className="text-[14px] text-[#212529]">Signature</h3>
                <img
                  src="/image/signature.png"
                  className="mt-[10px]"
                  alt="Icon"
                />
              </div>
              <div>
                <span className="text-[14px] text-[#7F7F7F]">
                  Delivery time
                </span>
                <h3 className="text-[14px] text-[#212529]">10:00 am</h3>
                <h3 className="text-[14px] text-[#7F7F7F]">Photos</h3>
                <div className="bg-[#F5F7FA] grid grid-cols-2 gap-2 p-[8px]">
                  <img src="/image/demo1.png" alt="Icon" />
                  <img src="/image/demo1.png" alt="Icon" />
                </div>
              </div>
            </div>
          </div>

          {/* Input Field */}
          <div className="flex flex-col">
            <span className="text-[14px] mb-3 text-[#7F7F7F]">Notes</span>
            <input
              type="text"
              className="p-[12px] bg-[#F5F7FA] h-[99px] rounded-md focus:outline-none"
              placeholder="Enter text"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsModal;
