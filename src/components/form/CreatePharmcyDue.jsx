import React, { useEffect, useState } from "react";
import CustomButton from "../buttons/CustomButton";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FiCalendar } from "react-icons/fi";
import { format } from "date-fns";

const CreatePharmcyDue = ({ closeModal, isOpen }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
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
            <img src="/image/invoice_icon.svg" alt="icon" />
            <h2 className="text-[#212529] text-[20px] font-[500] ">
              Payment update
            </h2>
          </div>

          <div className="flex flex-col justify-end">
            <form className="grid grid-cols-2 gap-10">
              <div>
                <label
                  htmlFor="date"
                  className="block font-interRegular mb-[10px] font-[400] text-[16px] text-[#6A7683]"
                >
                  Date
                </label>
                <div className="relative w-full">
                  <DatePicker
                    id="date"
                    placeholderText="Select transaction date"
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    dateFormat="MM/dd/yyyy"
                    customInput={
                      <input
                        type="text"
                        placeholder="Select a date"
                        value={
                          selectedDate ? format(selectedDate, "MM/dd/yyyy") : ""
                        }
                        className="w-full border-b-2 placeholder:text-[16px] border-[#C9D2DB] focus:border-blue-500 outline-none pr-10"
                      />
                    }
                  />
                  <FiCalendar className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>

              <div>
                <label
                  htmlFor="amount"
                  className="block font-interRegular mb-[10px] font-[400] text-[16px] text-[#6A7683]"
                >
                  Amount
                </label>
                <input
                  id="amount"
                  type="amount"
                  placeholder="Enter paying amount"
                  className="w-full border-b-2 placeholder:text-[16px]  border-[#C9D2DB] focus:border-blue-500 outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="Transaction method"
                  className="block font-interRegular mb-[10px] font-[400] text-[16px] text-[#6A7683]"
                >
                  Transaction method
                </label>
                <select
                  id="transactionmethod"
                  className="w-full border-b-2 placeholder:text-[16px] text-[#9ca3b0] border-[#C9D2DB] focus:border-blue-500 outline-none"
                >
                  <option
                    className="text-[#6A7683]"
                    value="Select transaction method"
                    disabled
                    selected
                  >
                    Select transaction method
                  </option>
                  <option value="cash">cash</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="Transaction id"
                  className="block font-interRegular mb-[10px] font-[400] text-[16px] text-[#6A7683]"
                >
                  Transaction id
                </label>
                <input
                  id="transactionid"
                  type="text"
                  placeholder="Enter transaction id"
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

export default CreatePharmcyDue;
