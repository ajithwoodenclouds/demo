import React from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../buttons/CustomButton";

export default function SingleTotalCard({
  data = "",
  type = "deafult",
  link = false,
}) {
  const navigate = useNavigate();
  const style_deafut = {
    backgroundSize: "12%",
    backgroundPosition: "-4% -69px",
  };

  return (
    <div className="container mx-auto ">
      <div className={`grid grid-cols-1 gap-6`}>
        {data.map((item) => {
          return (
            <div
              key={item.id}
              className={`flex items-center ${item.color} bg-[url('/image/card_bg.svg')] bg-cover bg-no-repeat  p-6 rounded-[16px] shadow-md`}
              style={
                !item.color
                  ? {
                      backgroundImage:
                        "url('/image/card_bg.svg'), linear-gradient(192.82deg, #424953 5.95%, #1C1C1C 94.05%)",
                      backgroundSize: "12%, cover", // Use cover for both layers or adjust accordingly
                      backgroundPosition: "-4% -69px, center", // Set positions for each background
                      backgroundRepeat: "no-repeat, no-repeat",
                    }
                  : style_deafut
              }
            >
              <div className="icon flex items-center justify-start container ">
                {item.image && (
                  <img src={item.image} alt="icon" className="mr-[10px]" />
                )}
                <h3
                  className={`text-[16px] ${
                    !item.color ? "text-[#fff]" : "text-[#1C1C1C]"
                  }  font-interRegular`}
                >
                  {item.title}
                </h3>
              </div>
              <div className="flex justify-between items-center w-[30%]">
                <h3
                  className={`text-[24px] font-interSemibold ${
                    !item.color ? " text-[#41DD75]" : "text-[#1C1C1C]"
                  } `}
                >
                  {item.amount}
                </h3>
                {type == "Admin-Due-OneSection" && (
                  <CustomButton
                    text="Generate bill"
                    style="font-[400] text-[#FFFFFF] font-Regular bg-[#269149] py-[10px] rounded-[4px] px-[16px]"
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
