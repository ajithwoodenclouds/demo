import React, { useState } from "react";
import CustomButton from "../buttons/CustomButton";

const CreateFranchisee = ({ closeModal }) => {
  const [step, setStep] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    // Submit form logic here
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Add your search logic here, you could integrate with a geolocation API
    console.log(`Searching for: ${searchTerm}`);
  };

  return (
    <div className="fixed inset-0 flex  p-[10px]  bg-black bg-opacity-50">
      <div className="w-full">
        <div className="bg-white px-[180px] py-[72px] rounded-lg shadow-lg w-full h-fit relative">
          <div className="flex gap-3 mb-[30px]">
            <img src="/image/franchisee_icon.svg" alt="icon" />
            <h2 className="text-[#212529] text-[20px] font-[500] font-interSemibold">
              Create franchisee
            </h2>
          </div>

          {step === 1 && (
            <div className="flex flex-col justify-end">
              <h4 className="mb-[50px] text-[#212529] text-[16px] font-interSemibold">
                1/3 Basic details
              </h4>
              <form className="grid grid-cols-2 gap-10">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block font-interRegular mb-[10px] text-[16px] text-[#6A7683]"
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
                    className="block font-interRegular mb-[10px] text-[16px] text-[#6A7683]"
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
                    className="block font-interRegular mb-[10px] text-[16px] text-[#6A7683]"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="Enter franchisee phone no"
                    className="w-full border-b-2 placeholder:text-[16px] border-[#C9D2DB] focus:border-blue-500 outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="companyName"
                    className="block font-interRegular mb-[10px] text-[16px] text-[#6A7683]"
                  >
                    Company Name
                  </label>
                  <input
                    id="companyName"
                    type="text"
                    placeholder="Enter company name"
                    className="w-full border-b-2 placeholder:text-[16px] border-[#C9D2DB] focus:border-blue-500 outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="companyRegNo"
                    className="block font-interRegular mb-[10px] text-[16px] text-[#6A7683]"
                  >
                    Company Reg No.
                  </label>
                  <input
                    id="companyRegNo"
                    type="text"
                    placeholder="Enter company reg no"
                    className="w-full border-b-2 placeholder:text-[16px] border-[#C9D2DB] focus:border-blue-500 outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="commission"
                    className="block font-interRegular mb-[10px] text-[16px] text-[#6A7683]"
                  >
                    Commission
                  </label>
                  <input
                    id="commission"
                    type="text"
                    placeholder="Enter commission percentage"
                    className="w-full border-b-2 placeholder:text-[16px] border-[#C9D2DB] focus:border-blue-500 outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="hst"
                    className="block font-interRegular mb-[10px] text-[16px] text-[#6A7683]"
                  >
                    HST
                  </label>
                  <input
                    id="hst"
                    type="text"
                    placeholder="Enter HST (in percentage)"
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
              <h4 className=" text-[#212529] text-[16px] font-interSemibold">
                1/3 Basic details
              </h4>
              {/* Map Section */}
              <div className="w-full my-[20px]">
                <img src="/image/Tracking.png" alt="Tracking" />
              </div>

              {/* Form Section */}
              <form>
                <div className=" grid grid-cols-2 gap-8">
                  <div>
                    <label
                      className="block font-interRegular mb-[10px] text-[16px] text-[#6A7683]"
                      htmlFor="province"
                    >
                      Province
                    </label>
                    <input
                      type="text"
                      id="province"
                      placeholder="Enter Province"
                      className="w-full border-b-2 placeholder:text-[16px]  border-[#C9D2DB] focus:border-blue-500 outline-none"
                    />
                  </div>

                  <div>
                    <label
                      className="block font-interRegular mb-[10px] text-[16px] text-[#6A7683]"
                      htmlFor="city"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      placeholder="Enter City"
                      className="w-full border-b-2 placeholder:text-[16px]  border-[#C9D2DB] focus:border-blue-500 outline-none"
                    />
                  </div>

                  <div>
                    <label
                      className="block font-interRegular mb-[10px] text-[16px] text-[#6A7683]"
                      htmlFor="zipcode"
                    >
                      Zip Code
                    </label>
                    <input
                      type="text"
                      id="zipcode"
                      placeholder="Enter Zip Code"
                      className="w-full border-b-2 placeholder:text-[16px]  border-[#C9D2DB] focus:border-blue-500 outline-none"
                    />
                  </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-end gap-5">
                  <CustomButton
                    onClick={prevStep}
                    style="border border-[#0E3281] text-[#0E3281] w-[200px] h-[48px] py-[10px] px-[24px] rounded"
                    text="Back"
                  />

                  <CustomButton
                    onClick={nextStep}
                    style=" bg-[#0E3281] text-[#fff] w-[200px] h-[48px] py-[10px] px-[24px] rounded"
                    text="Next"
                  />
                </div>
              </form>
            </div>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <div className="flex flex-col justify-end">
              <h4 className="mb-[50px] text-[#212529] text-[16px] font-interSemibold">
                1/3 Basic details
              </h4>
              <form className="grid grid-cols-2 gap-10">
                <div>
                  <label
                    htmlFor="name"
                    className="block font-interRegular mb-[10px] text-[16px] text-[#6A7683]"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Enter franchisee name"
                    className="w-full border-b-2 placeholder:text-[16px] border-[#C9D2DB] focus:border-blue-500 outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block font-interRegular mb-[10px] text-[16px] text-[#6A7683]"
                  >
                    Email Id
                  </label>
                  <input
                    id="email"
                    type="email"
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
              </form>
              <div className="flex mt-[50px] justify-end gap-5">
                <CustomButton
                  onClick={prevStep}
                  style="border border-[#0E3281] text-[#0E3281] w-[200px] h-[48px] py-[10px] px-[24px] rounded"
                  text="Back"
                />
                <CustomButton
                  onClick={nextStep}
                  style="bg-[#0E3281] text-[#fff] w-[200px] h-[48px] py-[10px] px-[24px] rounded"
                  text="Submit"
                />
              </div>
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
              {/* Line 3 */}
              <div
                className={`h-1 w-full ${
                  step >= 3 ? "bg-[#3AAC43]" : "bg-[#C9D2DB]"
                }`}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateFranchisee;