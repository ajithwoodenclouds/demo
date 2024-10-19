import React from "react";
import { useNavigate } from "react-router-dom";

export default function DoubleCard({
  data = "",
  type = "deafult",
  link = false,
  style = "",
}) {
  const navigate = useNavigate();

  const style_deafut = {
    backgroundSize: "30%",
    backgroundPosition: "111% -100px",
  };

  return (
    <div className="container mx-auto px-5 py-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.map((item) => {
          return (
            <div
              key={item.id}
              className={`flex  ${item.bg_color}  bg-[url('/image/card_bg.svg')] bg-cover bg-no-repeat items-left py-[24px] p-[32px] h-[148px] rounded-[16px] shadow-md`}
              style={
                !item.bg_color
                  ? {
                      backgroundImage:
                        "url('/image/card_bg.svg'), linear-gradient(192.82deg, #424953 5.95%, #1C1C1C 94.05%)",
                      backgroundSize: "30%, cover", // Use cover for both layers or adjust accordingly
                      backgroundPosition: "111% -100px, center", // Set positions for each background
                      backgroundRepeat: "no-repeat, no-repeat",
                    }
                  : style_deafut
              }
            >
              <div className="icon flex items-center justify-start container ">
                {/* <img src="/image/icon.png" alt="icon" className="mr-[10px]" /> */}
                <h3
                  className={`text-[16px] text-[${item.text_color}] font-interRegular`}
                >
                  {item.title}
                  {item.bg_color && type === "Admin-Accounts" && (
                    <h3
                      className={`text-[24px] font-interSemibold ${
                        !item.bg_color ? "text-[#41DD75]" : "text-[#1C1C1C]"
                      }`}
                    >
                      {item.amount}
                    </h3>
                  )}
                </h3>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  {!item.bg_color && type === "Admin-Accounts" && (
                    <h3
                      className={`text-[24px] font-interSemibold ${
                        !item.bg_color ? "text-[#41DD75]" : "text-[#1C1C1C]"
                      }`}
                    >
                      {item.amount}
                    </h3>
                  )}
                </div>
                {item.path && (
                  <div
                    className="flex w-[100px] gap-3 cursor-pointer"
                    onClick={() => navigate(item.path)}
                  >
                    <h4 className="text-[16px] font-interRegular font-[400] text-[#1C1C1C]">
                      {item.path_name}
                    </h4>
                    <img
                      src="/image/arrow_right_black.svg"
                      alt="arrow"
                      className="w-[20px]"
                    />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
