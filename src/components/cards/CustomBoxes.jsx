import React from "react";
import { useNavigate } from "react-router-dom";

export default function CustomBoxes({
  data = "",
  type = "deafult",
  link = false,
  style = "",
}) {
  const navigate = useNavigate();
  const style_deafut = {
    backgroundSize: "50%",
    backgroundPosition: "100% 203%",
  };

  return (
    <div className="container mx-auto px-5 py-5">
      <div
        className={`grid grid-cols-1 ${
          style == "double" ? "md:grid-cols-2" : "md:grid-cols-3"
        }  gap-6`}
      >
        {data.map((item) => {
          return (
            <div
              key={item.id}
              className={`flex flex-col items-left ${item.color} bg-[url('/image/card_bg.svg')] bg-cover bg-no-repeat  p-6 rounded-[16px] shadow-md`}
              style={
                !item.color
                  ? {
                      backgroundImage:
                        "url('/image/card_bg.svg'), linear-gradient(192.82deg, #424953 5.95%, #1C1C1C 94.05%)",
                      backgroundSize: "50%, cover", // Use cover for both layers or adjust accordingly
                      backgroundPosition: "100% 203%, center", // Set positions for each background
                      backgroundRepeat: "no-repeat, no-repeat",
                    }
                  : style_deafut
              }
            >
              <div className="icon flex items-center justify-start container mb-4">
                <img src={item.image} alt="icon" className="mr-[10px]" />
                <h3
                  className={`text-[16px] ${
                    !item.color ? "text-[#fff]" : "text-[#1C1C1C]"
                  }  font-interRegular`}
                >
                  {item.title}
                </h3>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3
                    className={`text-[24px] font-interSemibold ${
                      !item.color ? " text-[#41DD75]" : "text-[#1C1C1C]"
                    } `}
                  >
                    {item.amount}
                  </h3>
                  <span className={`text-[#fff]  font-[400] text-[12px]`}>
                    {item.amount_des}
                  </span>
                </div>
                {!item.color && type === "pharmacies_One" && (
                  <div>
                    <img src="/image/bg_line.svg" alt="icon" />
                  </div>
                )}
                {!item.color && type === "pharmacies_One" && (
                  <div>
                    <h3
                      className={`text-[24px] font-interSemibold ${
                        !item.color ? " text-[#41DD75]" : "text-[#1C1C1C]"
                      } `}
                    >
                      {item.amount}
                    </h3>
                    <span className={`text-[#fff] font-[400] text-[12px]`}>
                      {item.amount_des1}
                    </span>
                  </div>
                )}

                {item.path && (
                  <div
                    className="flex items-center gap-3 cursor-pointer"
                    onClick={() => navigate(item.path)}
                  >
                    <h4
                      className={`text-[16px] font-interRegular font-[400] ${
                        !item.color ? "text-[#fff]" : "text-[#1C1C1C]"
                      }`}
                    >
                      {item.path_name}
                    </h4>
                    {!item.color ? (
                      <img src="/image/arrow _right.svg" alt="arrow" />
                    ) : (
                      <img
                        src="/image/arrow_right_black.svg"
                        alt="arrow"
                        className="w-[20px]"
                      />
                    )}
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
