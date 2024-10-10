import React, { useState, useEffect, useRef } from "react";
import SubBox from "../filtter_box/SubBox";

const TableComponent = ({ data, type = "default", colors }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [modalRowIndex, setModalRowIndex] = useState(null); // Track which row to show modal in
  const modalRef = useRef(null); // Reference for the modal box

  const handleActionClick = (item, rowIndex) => {
    setModalTitle(item.Sno); // Set the title to the Sno
    setModalContent(
      `Details for ${item.Sno}: ${item["Franchisee Name"]}, Total Orders: ${item["Total Orders"]}`
    );
    setModalRowIndex(rowIndex); // Set the row index for displaying the modal
    setIsModalOpen(true);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsModalOpen(false); // Close modal if click is outside
      }
    };

    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // Cleanup
    };
  }, [isModalOpen]);

  const isImage = (value) =>
    typeof value === "string" &&
    (value.endsWith(".jpg") ||
      value.endsWith(".png") ||
      value.endsWith(".jpeg") ||
      value.endsWith(".svg"));

  return (
    <div className="overflow-x-auto p-4">
      <table className="min-w-full bg-white border border-[#F5F7FA] rounded-lg overflow-hidden">
        <thead>
          <tr className="text-[#6A7683] border-b border-[#F5F7FA]">
            {data.length > 0 &&
              Object.keys(data[0]).map((key, index) => (
                <th
                  key={index}
                  className={`py-[22px] px-[16px] text-[#6A7683] font-[400] text-[15px] ${
                    type === "FranchiseOrderSection"
                      ? "border-l border-[#F5F7FA] border-r"
                      : "border-0"
                  }`}
                  style={{ color: colors[index % colors.length] }}
                >
                  {key}
                </th>
              ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, rowIndex) => (
            <React.Fragment key={rowIndex}>
              <tr
                className={`text-center hover:bg-[#F5F7FA] border-b border-[#F5F7FA]`}
              >
                {Object.keys(item).map((key, colIndex) => (
                  <td
                    key={colIndex}
                    className={`py-[22px] ${
                      type === "Admin-FranchiseOrderSection"
                        ? "border-l border-[#F5F7FA] border-r"
                        : "border-0"
                    } px-[16px]`}
                    style={{ color: colors[colIndex % colors.length] }}
                    onClick={
                      colIndex === Object.keys(item).length - 1 &&
                      type === "franchisee"
                        ? () => handleActionClick(item, rowIndex)
                        : undefined
                    }
                  >
                    {isImage(item[key]) ? (
                      <img
                        src={item[key]}
                        alt={`Image at ${item[key]}`}
                        className="w-10 h-10 object-cover"
                      />
                    ) : (
                      item[key]
                    )}
                  </td>
                ))}
              </tr>
              {/* Render SubBox inside the row when clicked */}
              {isModalOpen && modalRowIndex === rowIndex && (
                <tr>
                  <td colSpan={Object.keys(item).length} className="px-4 py-2">
                    <div ref={modalRef}>
                      <SubBox
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                        content={modalContent}
                        title={modalTitle}
                      />
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
