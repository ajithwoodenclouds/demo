import React, { useEffect, useState } from "react";
import CustomButton from "../buttons/CustomButton";
import SearchMapComponent from "../Map/SerachMapComponent";
import ImageUpload from "../input/ImageUpload";

const CreateDrivers = ({ closeModal, isOpen }) => {
  const [step, setStep] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);

  const nextStep = () => {
    if (step < 2) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

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

  const handleSearch = (e) => {
    e.preventDefault();
    // Add your search logic here, you could integrate with a geolocation API
    console.log(`Searching for: ${searchTerm}`);
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
          <div className="flex gap-3 mb-[25px]">
            <img src="/image/drive_icon.svg" alt="icon" />
            <h2 className="text-[#212529] text-[20px] font-[500] font-interSemibold">
              Create driver
            </h2>
          </div>

          {step === 1 && (
            <div className="flex flex-col justify-end">
              <h4 className="mb-[25px] text-[#212529] text-[16px] font-interSemibold">
                <span className="text-[24px]">1</span>{" "}
                <span className="text-[16px] text-[#67696A]">/3 </span> Basic
                details
              </h4>
              <ImageUpload />
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
                    placeholder="Enter driver’s name"
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
                    placeholder="Enter email id"
                    className="w-full border-b-2 placeholder:text-[16px]  border-[#C9D2DB] focus:border-blue-500 outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block font-interRegular mb-[10px] font-[400] text-[16px] text-[#6A7683]"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="Enter driver’s phone no"
                    className="w-full border-b-2 placeholder:text-[16px] border-[#C9D2DB] focus:border-blue-500 outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="Drivinglicense "
                    className="block font-interRegular mb-[10px] font-[400] text-[16px] text-[#6A7683]"
                  >
                    Driving license
                  </label>
                  <input
                    id="Drivinglicense"
                    type="text"
                    placeholder="Enter driving license no "
                    className="w-full border-b-2 placeholder:text-[16px] border-[#C9D2DB] focus:border-blue-500 outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="licensePlateNumber"
                    className="block font-interRegular mb-[10px] font-[400] text-[16px] text-[#6A7683]"
                  >
                    License plate number
                  </label>
                  <input
                    id="licensePlateNumber"
                    type="text"
                    placeholder="Enter license plate no"
                    className="w-full border-b-2 placeholder:text-[16px] border-[#C9D2DB] focus:border-blue-500 outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="sinNumber"
                    className="block font-interRegular mb-[10px] font-[400] text-[16px] text-[#6A7683]"
                  >
                    SIN number
                  </label>
                  <input
                    id="sinNumber"
                    type="text"
                    placeholder="Enter SIN number"
                    className="w-full border-b-2 placeholder:text-[16px] border-[#C9D2DB] focus:border-blue-500 outline-none"
                  />
                </div>
              </form>
              <div className="flex mt-[20px] justify-end gap-5">
                <CustomButton
                  onClick={closeModal}
                  style="border border-[#0E3281] text-[#0E3281] w-[200px] h-[48px] py-[10px] px-[24px] rounded"
                  text="Cancel"
                />
                <CustomButton
                  onClick={nextStep}
                  style=" bg-[#0E3281] text-[#fff] w-[200px] h-[48px] py-[10px] px-[24px] rounded"
                  text="Next"
                />
              </div>
            </div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <div className="flex flex-col">
              <h4 className=" text-[#212529] mb-[25px] text-[16px] font-interSemibold">
                <span className="text-[24px]">2</span>{" "}
                <span className="text-[16px] text-[#67696A]">/2 </span>{" "}
                Credential creation
              </h4>

              <form>
                <div className=" grid grid-cols-2 gap-8">
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
                      placeholder="Enter driver’s name"
                      className="w-full border-b-2 placeholder:text-[16px] border-[#C9D2DB] focus:border-blue-500 outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="Emailid"
                      className="block font-interRegular mb-[10px] font-[400] text-[16px] text-[#6A7683]"
                    >
                      Email id
                    </label>
                    <input
                      id="Emailid"
                      type="text"
                      placeholder="Enter franchisee email id"
                      className="w-full border-b-2 placeholder:text-[16px] border-[#C9D2DB] focus:border-blue-500 outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block font-interRegular mb-[10px] text-[16px] text-[#6A7683]"
                    >
                      Password
                    </label>
                    <input
                      id="password"
                      type="password"
                      placeholder="Create a password "
                      className="w-full border-b-2 placeholder:text-[16px] border-[#C9D2DB] focus:border-blue-500 outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="confirmPassword"
                      className="block font-interRegular mb-[10px] text-[16px] text-[#6A7683]"
                    >
                      Confirm Password
                    </label>

                    <input
                      id="confirmPassword"
                      type="password"
                      placeholder="Re-enter the password"
                      className="w-full border-b-2 placeholder:text-[16px] border-[#C9D2DB] focus:border-blue-500 outline-none"
                    />
                  </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-end mt-[25px] gap-5">
                  <CustomButton
                    onClick={prevStep}
                    style="border border-[#0E3281] text-[#0E3281] w-[200px] h-[48px] py-[10px] px-[24px] rounded"
                    text="Back"
                  />

                  <CustomButton
                    onClick={nextStep}
                    style=" bg-[#0E3281] text-[#fff] w-[200px] h-[48px] py-[10px] px-[24px] rounded"
                    text="Submit"
                  />
                </div>
              </form>
            </div>
          )}

          {/* Progress lines */}
          <div className="absolute bottom-0 left-0 right-0 ">
            <div className="flex justify-between gap-2">
              {/* Line 1 */}
              <div
                className={`h-1 w-full ${
                  step >= 1 ? "bg-[#3AAC43]" : "bg-[#C9D2DB]"
                }`}
              ></div>
              {/* Line 2 */}
              <div
                className={`h-1 w-full ${
                  step >= 2 ? "bg-[#3AAC43]" : "bg-[#C9D2DB]"
                }`}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateDrivers;
