import React, { useState, useEffect, useRef } from "react";
import SubBox from "../filtter_box/SubBox";
import { useNavigate } from "react-router-dom";

const Table = ({
  data = [],
  columns = [],
  colors = [],
  type = "default",
  onRowClick,
  action = false,
  renderSubComponent,
  modalComponent: ModalComponent,
  path = "",
  head_colors,
  link = true,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [modalRowIndex, setModalRowIndex] = useState(null); // Track which row to show modal in
  const modalRef = useRef(null); // Reference for the modal box
  const navigate = useNavigate();

  // Handle row click and pass modal opening as callback
  const handleActionClick = (item, rowIndex) => {
    onRowClick?.(item, rowIndex, {
      openModal: (content, title) => {
        setModalTitle(title || `Details for ${item.Sno}`);
        setModalContent(
          content ||
            `Details for ${item.Sno}: ${item["Franchisee Name"]}, Total Orders: ${item["Total Orders"]}`
        );
        setModalRowIndex(rowIndex); // Set the row index for displaying the modal
        setIsModalOpen(true);
      },
    });
  };

  const getPendingBalance = (status) => {
    switch (status) {
      case "Nill":
        return "text-[#1C1C1C]"; // Green for Delivered
      default:
        return "text-[#E69C1D]"; // Default color
    }
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

  // Function to detect if a cell value is an image URL
  const isImage = (value) =>
    typeof value === "string" &&
    (value.endsWith(".jpg") ||
      value.endsWith(".png") ||
      value.endsWith(".jpeg") ||
      value.endsWith(".svg"));
  console.log();

  return (
    <div className="overflow-x-auto p-4">
      <table className="min-w-full bg-white border border-[#F5F7FA] rounded-lg overflow-hidden">
        <thead>
          <tr className="text-[#6A7683] border-b border-[#F5F7FA]">
            {columns.map((column, index) => (
              <th
                key={index}
                className={`py-[22px] px-[10px] text-[#6A7683] font-[400] text-[14px] ${
                  type === "Admin-FranchiseOrderSection"
                    ? "border-l border-[#F5F7FA] border-r"
                    : "border-0"
                }`}
                style={{ color: head_colors[index % head_colors.length] }}
              >
                {column.header}
              </th>
            ))}
            {action && (
              <th className="py-[22px] px-[10px] text-[#6A7683] font-[400] text-[14px]">
                Action
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {data.map((item, rowIndex) => (
            <React.Fragment key={rowIndex}>
              <tr
                className={`text-center hover:bg-[#F5F7FA] border-b border-[#F5F7FA]`}
              >
                {columns.map((column, colIndex) => (
                  <td
                    onClick={() =>
                      link && navigate(`${path}/${item[column.id]}`)
                    }
                    key={colIndex}
                    className={`py-[22px] px-[16px] text-[14px] ${
                      type === "Admin-FranchiseOrderSection"
                        ? "border-l border-[#F5F7FA] border-r"
                        : "border-0"
                    }`}
                    style={{ color: colors[colIndex % colors.length] }}
                  >
                    {isImage(item[column.accessor]) ? (
                      <img
                        src={item[column.accessor]}
                        alt={`Image at ${item[column.accessor]}`}
                        className="w-10 h-10 object-cover"
                      />
                    ) : column.accessor === "pending_balance" ? (
                      <span
                        className={getPendingBalance(item[column.accessor])}
                      >
                        {item[column.accessor]}
                      </span>
                    ) : (
                      item[column.accessor]
                    )}
                  </td>
                ))}
                {/* Admin-Franchisee */}
                {(type == "Admin-Franchisee") | (type == "Admin-Users") ? (
                  <td
                    onClick={() =>
                      (type === "Admin-Franchisee") | (type == "Admin-Users") &&
                      handleActionClick(item, rowIndex)
                    }
                    className={`py-[22px] px-[16px] items-center justify-center flex text-[14px]`}
                  >
                    <img src="/image/option_icon.svg" alt="icon" />
                  </td>
                ) : null}
              </tr>

              {isModalOpen && modalRowIndex === rowIndex && (
                <tr>
                  <td colSpan={columns.length} className="px-4 py-2">
                    <div ref={modalRef}>
                      {renderSubComponent ? (
                        renderSubComponent(
                          modalContent,
                          modalTitle,
                          setIsModalOpen
                        )
                      ) : (
                        <SubBox
                          isOpen={isModalOpen}
                          onClose={() => setIsModalOpen(false)}
                          content={modalContent}
                          title={modalTitle}
                        />
                      )}
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>

      {/* Separate Modal */}
      {isModalOpen && ModalComponent && (
        <ModalComponent
          content={modalContent}
          title={modalTitle}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default Table;
