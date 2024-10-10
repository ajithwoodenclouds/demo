import React from "react";

export default function CustomBoxes({ data = "", type = "" }) {
  console.log(data);
  return (
    <div className="container mx-auto px-5 py-5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.map((item) => {
          return (
            <div
              key={item.id}
              className={`flex flex-col items-left ${item.color} bg-[url('/image/card_bg.svg')] bg-cover bg-no-repeat  p-6 rounded-[16px] shadow-md`}
              style={{
                backgroundSize: "50%",
                backgroundPosition: "100% 203%",
              }}
            >
              <div className="icon flex items-center justify-start container mb-4">
                <img src={item.image} alt="icon" className="mr-[10px]" />
                <h3 className="text-[16px] text-[#1C1C1C] font-interRegular">
                  {item.title}
                </h3>
              </div>
              <h3 className="text-[24px] font-interSemibold">{item.total}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
