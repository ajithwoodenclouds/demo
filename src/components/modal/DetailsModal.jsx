import React, { useEffect } from "react";

const DetailsModal = ({ isOpen, onClose, data }) => {
  console.log(data);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Adding event listener for 'Escape' key to close the modal
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

  return (
    <>
      {isOpen && (
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={handleOverlayClick}
        ></div>
      )}

      {/* Modal */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 transform ${
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
        style={{
          pointerEvents: isOpen ? "auto" : "none",
        }}
      >
        <div className="bg-[#FFFFFF] shadow-lg rounded-[16px] max-w-[600px] w-full p-[22px] transition-transform duration-300 transform">
          {/* Top Section */}
          <div className="modal-header flex justify-between items-center border-b pb-4 mb-4">
            <h3 className="text-[18px] text-[#010101] font-[500] font-interSemibold">
              Details
            </h3>
            <img
              src="/image/close_icon.svg"
              alt="Close"
              className="cursor-pointer w-6 h-6"
              onClick={onClose} // Close action
            />
          </div>

          {/* Mid Section */}
          <div className="modal-mid-section border-b pb-4 mb-4">
            <h3 className="text-[16px] text-[#212529] font-[500] mb-3 font-interSemibold">
              Order details:
            </h3>
            <div className="flex justify-between">
              <div className="mb-3 ">
                <div className="mb-3">
                  <span className="text-[14px] text-[#7F7F7F] font-[400]">
                    Order status
                  </span>
                  <h3 className="text-[14px] text-[#48AE50] font-[400]">
                    Delivered
                  </h3>
                </div>
                <div className="mb-3">
                  <span className="text-[14px] text-[#7F7F7F] font-[400]">
                    Payment method
                  </span>
                  <h3 className="text-[14px] text-[#212529] font-[400]">
                    Card (Cash on delivery)
                  </h3>
                </div>
                <div className="">
                  <span className="text-[14px] text-[#7F7F7F] font-[400]">
                    Assigned Driver
                  </span>
                  <div className="flex mt-[10px] gap-3 items-center">
                    <img src="/image/driver_image.svg" alt="Icon" />
                    <h3 className="text-[14px] text-[#212529] font-[400]">
                      James Gonsalves
                    </h3>
                  </div>
                </div>
              </div>

              <div className="mb-3 ">
                <div className="mb-3">
                  <span className="text-[14px] text-[#7F7F7F] font-[400]">
                    Order type
                  </span>
                  <h3 className="text-[14px] text-[#212529] font-[400]">
                    Delivery
                  </h3>
                </div>
                <div className="mb-3">
                  <span className="text-[14px] text-[#7F7F7F] font-[400]">
                    Amount
                  </span>
                  <h3 className="text-[14px] text-[#212529] font-[400]">$80</h3>
                </div>
                <div>
                  <span className="text-[14px] text-[#7F7F7F] font-[400]">
                    Location
                  </span>
                  <h3 className="text-[14px] w-[60%] text-[#212529] font-[400]">
                    Toronto Medical Deliveries 124 street, Toronto.
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="modal-bottom-section">
            <h3 className="text-[16px] text-[#212529] font-[500] mb-3 font-interSemibold">
              Delivery details:
            </h3>
            <div className="modal-header flex justify-between items-center border-b pb-4 mb-3">
              {/* First Div */}
              <div className="mb-3">
                <div className="mb-3">
                  <span className="text-[14px] text-[#7F7F7F] font-[400]">
                    Recipient name
                  </span>
                  <h3 className="text-[14px] text-[#212529] font-[400]">
                    David Abraham
                  </h3>
                </div>
                <div>
                  <h3 className="text-[14px] text-[#212529] font-[400]">
                    Signature
                  </h3>
                  <img
                    src="/image/signature.png"
                    className="mt-[10px] "
                    alt="Icon"
                  />
                </div>
              </div>

              {/* Second Div */}
              <div>
                <div className="mb-3">
                  <span className="text-[14px] text-[#7F7F7F] font-[400]">
                    Delivery time
                  </span>
                  <h3 className="text-[14px] text-[#212529] font-[400]">
                    10:00 am
                  </h3>
                </div>
                <div>
                  <h3 className="text-[14px] text-[#7F7F7F] font-[400]">
                    Photos
                  </h3>
                  <div className="bg-[#F5F7FA] grid grid-cols-2 gap-2 p-[8px]">
                    <img src="/image/demo1.png" alt="Icon" />
                    <img src="/image/demo1.png" alt="Icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Input Field */}
          <div className="flex flex-col">
            <span className="text-[14px] mb-3 text-[#7F7F7F] font-[400]">
              Notes
            </span>
            <input
              type="text"
              id="input-field"
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
