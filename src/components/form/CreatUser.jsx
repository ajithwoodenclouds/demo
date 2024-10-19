import React, { useEffect, useState } from "react";
import CustomButton from "../buttons/CustomButton";

const CreatUser = ({ closeModal, isOpen }) => {
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
            <img src="/image/users.svg" alt="icon" />
            <h2 className="text-[#212529] text-[20px] font-[500] ">
              Create user
            </h2>
          </div>

          <div className="flex flex-col justify-end">
            <form className="grid grid-cols-2 gap-10">
              <div>
                <label
                  htmlFor="firstName"
                  className="block font-interRegular mb-[10px] font-[400] text-[16px] text-[#6A7683]"
                >
                  Name
                </label>
                <input
                  id="Name"
                  type="text"
                  placeholder="Enter franchisee name"
                  className="w-full border-b-2 placeholder:text-[16px] border-[#C9D2DB] focus:border-blue-500 outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block font-interRegular mb-[10px] font-[400] text-[16px] text-[#6A7683]"
                >
                  Email Id
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter franchisee email id"
                  className="w-full border-b-2 placeholder:text-[16px]  border-[#C9D2DB] focus:border-blue-500 outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block font-interRegular mb-[10px] font-[400] text-[16px] text-[#6A7683]"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="text"
                  placeholder="Create a password"
                  className="w-full border-b-2 placeholder:text-[16px] border-[#C9D2DB] focus:border-blue-500 outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="Confirm password"
                  className="block font-interRegular mb-[10px] font-[400] text-[16px] text-[#6A7683]"
                >
                  Company Name
                </label>
                <input
                  id="confirmPassword"
                  type="text"
                  placeholder="Re-enter the password"
                  className="w-full border-b-2 placeholder:text-[16px] border-[#C9D2DB] focus:border-blue-500 outline-none"
                />
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

export default CreatUser;
