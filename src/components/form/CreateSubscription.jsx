import React, { useEffect, useState } from "react";
import CustomButton from "../buttons/CustomButton";

const CreateSubscription = ({ closeModal, isOpen }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    // Submit form logic here
  };
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
            <img src="/image/sub_icon.svg" alt="icon" />
            <h2 className="text-[#212529] text-[20px] font-[500] ">
              Create subscription plan
            </h2>
          </div>

          <div className="flex flex-col justify-end">
            <form className="grid grid-cols-2 gap-10">
              <div>
                <label
                  htmlFor="planName"
                  className="block font-interRegular mb-[10px] font-[400] text-[16px] text-[#6A7683]"
                >
                  Plan name
                </label>
                <div className="flex justify-between items-center">
                  <input
                    id="planName"
                    type="text"
                    placeholder="Enter subscription plan name"
                    className="w-[70%] border-b-2 placeholder:text-[16px] border-[#C9D2DB] focus:border-blue-500 outline-none"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="amount"
                  className="block font-interRegular mb-[10px] font-[400] text-[16px] text-[#6A7683]"
                >
                  Amount
                </label>
                <div className="flex justify-between items-center">
                  <input
                    id="amount"
                    type="email"
                    placeholder="Enter basic amount of the plan"
                    className="w-[70%] border-b-2 placeholder:text-[16px] border-[#C9D2DB] focus:border-blue-500 outline-none"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="area"
                  className="block font-interRegular mb-[10px] font-[400] text-[16px] text-[#6A7683]"
                >
                  Area
                </label>
                <div className="flex w-[70%] border-b-2 placeholder:text-[16px] border-[#C9D2DB] justify-between">
                  <input
                    id="area"
                    type="text"
                    placeholder="50"
                    className=" focus:border-blue-500 outline-none"
                  />
                  <span className="text-[#212529] text-[12px]">sq.km</span>
                </div>
              </div>

              <div>
                <label
                  htmlFor="rate"
                  className="block font-interRegular mb-[10px] font-[400] text-[16px] text-[#6A7683]"
                >
                  Rate per Km
                </label>
                <div className="border-b-2 border-[#C9D2DB] w-[70%] flex  items-center justify-between">
                  <input
                    id="rate"
                    type="text"
                    placeholder="Enter commission"
                    className=" placeholder:text-[16px]  focus:border-blue-500 outline-none"
                  />
                  <span className="text-[#212529] text-[12px]">
                    per delivery
                  </span>
                </div>
              </div>
              <div>
                <label
                  htmlFor="rate"
                  className="block font-interRegular mb-[10px] font-[400] text-[16px] text-[#6A7683]"
                >
                  Rate per Km
                </label>
                <div className="border-b-2 border-[#C9D2DB] w-[70%] flex  items-center justify-between">
                  <input
                    id="rate"
                    type="text"
                    placeholder="Enter commission"
                    className=" placeholder:text-[16px]  focus:border-blue-500 outline-none"
                  />
                  <span className="text-[#212529] text-[12px]">
                    per delivery
                  </span>
                </div>
              </div>
            </form>

            <div className="flex mt-[20px] justify-end gap-5">
              <CustomButton
                style="border border-[#0E3281] text-[#0E3281] w-[200px] h-[48px] py-[10px] px-[24px] rounded"
                text="Cancel"
                onClick={closeModal}
              />
              <CustomButton
                style=" bg-[#0E3281] text-[#fff] w-[200px] h-[48px] py-[10px] px-[24px] rounded"
                text="Create"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateSubscription;
