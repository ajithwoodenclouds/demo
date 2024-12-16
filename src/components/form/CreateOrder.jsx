import React, { useEffect, useState } from "react";
import CustomButton from "../buttons/CustomButton";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import { FiCalendar } from "react-icons/fi";
import SearchMapComponent from "../Map/SerachMapComponent";
import TimeBar from "../general/TimeBar";

const CreateOrder = ({ closeModal, isOpen }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [paymentType, setPaymentTypes] = useState([]);
  const [orderType, setOrderTypes] = useState([]);
  const [orderRepeat, setOrderRepeat] = useState([]);

  const paymentTypes = ["Card", "Cheque", "Cash"];
  const orderTypes = ["Normal", "Express", "Bulk"];
  const OrderRepeat = ["No", "Every day", "Every week", "Every month"];

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
      className={`fixed inset-0 flex px-[10px] pt-[10px] bg-black bg-opacity-50 transition-opacity duration-500 ${
        showModal ? "opacity-100 z-50" : "opacity-0"
      }`}
    >
      <div
        className={`w-full transition-transform duration-500 ${
          showModal ? "translate-y-0 scale-100" : "translate-y-4 scale-95"
        }`}
      >
        <div className="bg-white px-[180px] py-[30px] z-50 rounded-lg shadow-lg w-full overflow-y-scroll h-screen   relative">
          <div className="flex gap-3 mb-[25px]">
            <img src="/image/users.svg" alt="icon" />
            <h2 className="text-[#212529] text-[20px] font-[500] ">
              Create order
            </h2>
          </div>

          <div className="flex flex-col justify-end">
            <h4 className=" text-[#212529] mb-[25px] text-[16px] font-interSemibold">
              1/3 Order details
            </h4>
            <div className="w-full mb-[25px] ">
              <SearchMapComponent />
            </div>
            <form className="grid grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="franchiseeName"
                  className="block font-interRegular mb-[10px] font-[400] text-[16px] text-[#6A7683]"
                >
                  Name
                </label>
                <select
                  id="franchiseeName"
                  className="w-full border-b-2 text-[16px] border-[#C9D2DB] focus:border-blue-500 outline-none"
                >
                  <option value="" disabled selected>
                    Enter customer name
                  </option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="address"
                  className="block font-interRegular mb-[10px] font-[400] text-[16px] text-[#6A7683]"
                >
                  Address
                </label>
                <input
                  id="address"
                  type="text"
                  placeholder="Enter delivery address"
                  className="w-full border-b-2 placeholder:text-[16px]  border-[#C9D2DB] focus:border-blue-500 outline-none"
                />
              </div>

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
                  htmlFor="phoneNumber"
                  className="block font-interRegular mb-[10px] font-[400] text-[16px] text-[#6A7683]"
                >
                  Phone Number
                </label>
                <input
                  id="phoneNumber"
                  type="tel"
                  placeholder="Enter phone number"
                  className="w-full border-b-2 placeholder:text-[16px] border-[#C9D2DB] focus:border-blue-500 outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="billamount"
                  className="block font-interRegular mb-[10px] font-[400] text-[16px] text-[#6A7683]"
                >
                  Bill amount
                </label>
                <input
                  id="billamount"
                  type="text"
                  placeholder="Enter the amount"
                  className="w-full border-b-2 placeholder:text-[16px]  border-[#C9D2DB] focus:border-blue-500 outline-none"
                />
              </div>
              <div>
                <span className="block font-interRegular mb-[10px] font-[400] text-[16px] text-[#6A7683]">
                  Order type
                </span>
                <div className="flex gap-5">
                  {paymentTypes.map((item) => (
                    <div
                      key={item}
                      onClick={() => {
                        setPaymentTypes(item);
                        // setOpen(false);
                      }}
                      className="flex items-center cursor-pointer  py-2 text-[#717578]"
                    >
                      {paymentType === item ? (
                        <img
                          src="/image/rounded_chek_light.svg"
                          className="mr-[5px]"
                          alt="icon"
                        />
                      ) : (
                        <img
                          src="/image/rounde_check_icon.svg"
                          className="mr-[5px]"
                          alt="icon"
                        />
                      )}
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <span className="block font-interRegular mb-[10px] font-[400] text-[16px] text-[#6A7683]">
                  Order type
                </span>
                <div className="flex gap-5">
                  {orderTypes.map((type) => (
                    <label key={type} className="flex items-center">
                      <input
                        type="checkbox"
                        className="hidden" // Hide the default checkbox
                        checked={orderType.includes(type)}
                        onChange={() =>
                          setOrderTypes((prev) =>
                            prev.includes(type) ? [] : [type]
                          )
                        }
                      />
                      <span
                        className={`w-4 h-4 mr-2 rounded-full border flex items-center justify-center ${
                          orderType.includes(type)
                            ? "border-[#0E3281] bg-[#0E3281]"
                            : "border-gray-400"
                        }`}
                      >
                        {orderType.includes(type) && (
                          <span className="w-2 h-2 bg-white rounded-full"></span>
                        )}
                      </span>
                      <span className={`py-2 `}>{type}</span>
                    </label>
                  ))}
                </div>
              </div>
              <TimeBar />
              <div>
                <label
                  htmlFor="deliverynotes"
                  className="block font-interRegular mb-[10px] font-[400] text-[16px] text-[#6A7683]"
                >
                  Delivery notes
                </label>
                <input
                  id="deliverynotes"
                  type="text"
                  placeholder="Enter delivery instruction"
                  className="w-full border-b-2 placeholder:text-[16px]  border-[#C9D2DB] focus:border-blue-500 outline-none"
                />
              </div>

              <div>
                <span className="block font-interRegular mb-[10px] font-[400] text-[16px] text-[#6A7683]">
                  Order repeat
                </span>
                <div className="flex gap-5">
                  {OrderRepeat.map((type) => (
                    <label key={type} className="flex items-center">
                      <input
                        type="checkbox"
                        className="hidden" // Hide the default checkbox
                        checked={orderType.includes(type)}
                        onChange={() =>
                          setOrderRepeat((prev) =>
                            prev.includes(type) ? [] : [type]
                          )
                        }
                      />
                      <span
                        className={`w-4 h-4 mr-2 rounded-full border flex items-center justify-center ${
                          orderRepeat.includes(type)
                            ? "border-[#0E3281] bg-[#0E3281]"
                            : "border-gray-400"
                        }`}
                      >
                        {orderRepeat.includes(type) && (
                          <span className="w-2 h-2 bg-white rounded-full"></span>
                        )}
                      </span>
                      <span className={`py-2 `}>{type}</span>
                    </label>
                  ))}
                </div>
              </div>
            </form>
            <div className="flex mt-[25px] justify-end gap-5">
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

export default CreateOrder;
