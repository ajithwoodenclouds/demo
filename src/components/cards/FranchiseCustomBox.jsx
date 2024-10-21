import { useNavigate } from "react-router-dom";

export default function FranchiseCustomBox({
  data = "",
  type = "deafult",
  link = false,
  style = "",
}) {
  const navigate = useNavigate();
  const style_default = {
    backgroundSize: "40%",
    backgroundPosition: "100% -73px",
  };

  return (
    <div className="container mx-auto px-5 py-5">
      <div className={` flex justify-between gap-6`}>
        {data.map((item) => (
          <div
            key={item.id}
            className={`flex flex-col justify-between w-[40%] items-left ${item.color}  bg-[url('/image/card_bg.svg')] bg-cover bg-no-repeat  p-6 rounded-[16px] shadow-md`}
            style={
              !item.color
                ? {
                    width: "60%",
                    backgroundImage:
                      "url('/image/card_bg.svg'), linear-gradient(192.82deg, #424953 5.95%, #1C1C1C 94.05%)",
                    backgroundSize: "30%, cover", // Use cover for both layers or adjust accordingly
                    backgroundPosition: "100% -73px, center", // Set positions for each background
                    backgroundRepeat: "no-repeat, no-repeat",
                  }
                : style_default
            }
          >
            <div className="icon flex items-center justify-start container mb-4">
              <img src={item.image} alt="icon" className="mr-[10px]" />
              <h3
                className={`text-[16px] text-[#1C1C1C] ${item.text_color} font-interRegular`}
              >
                {item.title}
              </h3>
            </div>
            {!item.color ? (
              <div className="flex justify-between mb-4">
                <div>
                  <h2 className="text-[#41DD75] font-interSemibold font-[600] text-[24px]">
                    {item.To_Pharmacy}
                  </h2>
                  <span className="text-[#FFFFFF]  text-[12px] font-[400]">
                    To Pharmacy
                  </span>
                </div>
                <div>
                  <img src="/image/bg_line.svg" alt="icon" />
                </div>
                <div>
                  <h2 className="text-[#41DD75] font-interSemibold font-[600] text-[24px]">
                    {item.from_pharmacy}
                  </h2>
                  <span className="text-[#FFFFFF]  text-[12px] font-[400]">
                    From Pharmacy
                  </span>
                </div>
                <div>
                  <img src="/image/bg_line.svg" alt="icon" />
                </div>
                <div>
                  <h2 className="text-[#41DD75] font-interSemibold font-[600] text-[24px]">
                    {item.to_d2d}
                  </h2>
                  <span className="text-[#FFFFFF]  text-[12px] font-[400]">
                    To D2D
                  </span>
                </div>
              </div>
            ) : (
              ""
            )}

            <div
              className={`flex items-center ${
                !item.color ? "justify-start" : "justify-between"
              } `}
            >
              <div>
                <h3 className="text-[24px] font-interSemibold text-[#1C1C1C]">
                  {item.amount}
                </h3>
              </div>

              {item.path && (
                <div
                  className="flex items-center gap-3  cursor-pointer"
                  onClick={() => navigate(item.path)}
                >
                  <h4
                    className={`text-[16px] font-interRegular font-[400] ${item.text_color} text-[#1C1C1C]`}
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
        ))}
      </div>
    </div>
  );
}
