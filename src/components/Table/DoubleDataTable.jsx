import React, { useState, useEffect, useRef } from "react";
import SubBox from "../filtter_box/SubBox";
import { useNavigate } from "react-router-dom";
import CustomButton from "../buttons/CustomButton";
import Tooltip from "../tooltip/Tooltip";

const DoubleDataTable = ({
  data = [],
  columns = [],
  colors = [],
  head_colors = [],
  type = "default",
  onRowClick,
  handleModal,
  renderSubComponent,
  modalComponent: ModalComponent,
  path = "",
  action = false,
  link = false,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [modalRowIndex, setModalRowIndex] = useState(null);
  const modalRef = useRef(null);
  const navigate = useNavigate();

  // Define conditional classes for the Status column
  const getStatusClass = (status) => {
    switch (status) {
      case "Delivered":
        return "text-[#3AAC43]"; // Green for Delivered
      case "Pending":
      case "Attempted":
        return "text-[#E69C1D]"; // Yellow for Pending and Attempted
      case "Out for delivery":
      case "Scheduled":
        return "text-[#2080D9]"; // Blue for Out for Delivery and Scheduled
      case "Successful":
        return "text-[#269149]"; // Green for Successful
      case "Failed":
      case "Debit":
      case "-$847":
        return "text-[#D14B4B]";
      default:
        return ""; // Default class if no match found
    }
  };

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
            {/* Admin-Franchisee */}
            {action && (
              <th className="py-[22px] px-[10px]  text-[#6A7683] font-[400] text-[14px]">
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
                {columns.map((column, colIndex) => {
                  const cellValue = item[column.accessor];
                  console.log(cellValue);

                  return Array.isArray(cellValue) ? (
                    <div>
                      {/* Admin-Recent-Orders */}
                      {type === "Admin-Recent-Orders" && (
                        <td
                          key={colIndex}
                          className={`py-[22px] px-[14px] flex items-center gap-2 text-[14px] border-0`}
                        >
                          <img
                            src={cellValue[0]}
                            alt={`Image at ${cellValue}`}
                            className="w-10 h-10 object-cover"
                          />
                          <span className={`text-[14px] text-[#6A7683]`}>
                            {cellValue[1]}
                          </span>
                        </td>
                      )}
                      {/* Admin-Recent-Orders End */}

                      {/* Admin-FranchiseOrderSection */}
                      {type === "Admin-FranchiseOrderSection" && (
                        <td
                          key={colIndex}
                          className={`py-[22px] px-[14px] flex text-left flex-col gap-2 text-[14px] border-0`}
                        >
                          <div>
                            <span>{cellValue[0]}</span>
                          </div>

                          <span className={`text-[14px] text-[#6A7683]`}>
                            {cellValue[1]}
                          </span>
                        </td>
                      )}
                      {/* Admin-FranchiseOrderSection End */}

                      {/* Admin-Drivers-List */}
                      {(type === "Admin-Drivers-List") |
                      (type === "Leave-Request-Section") |
                      (type === "Pharmcy-Orders-List") ? (
                        <td
                          key={colIndex}
                          className={`py-[22px] px-[14px] items-center gap-3  justify-end flex  text-[14px] border-0`}
                          onClick={() => handleModal(item)}
                        >
                          <img
                            src={cellValue[0]}
                            alt={`Image at ${cellValue}`}
                          />
                          <div className="flex flex-col   w-[60%] justify-center items-start ">
                            <span className={`text-[14px]  text-[#212529]`}>
                              {cellValue[1]}
                            </span>
                            <span className={`text-[14px]  text-[#6A7683]`}>
                              {cellValue[2]}
                            </span>
                          </div>
                        </td>
                      ) : null}
                      {/* Admin-Drivers-List End */}
                      {/* Driver-Recent-Activities */}
                      {type === "Driver-Recent-Activities" && (
                        <td
                          key={colIndex}
                          className={`py-[22px] px-[14px] items-center gap-3  justify-center flex  text-[14px] border-0`}
                        >
                          <img
                            src={cellValue[1]}
                            alt={`Image at ${cellValue}`}
                          />
                          <div className="flex flex-col   w-[60%] justify-center items-start ">
                            <span className={`text-[14px]  text-[#212529]`}>
                              {cellValue[0]}
                            </span>
                          </div>
                        </td>
                      )}
                      {/* Driver-Recent-Activities End */}
                      {/* Admin-Generated-Invoices */}
                      {type == "Admin-Generated-Invoices" &&
                        (column.accessor == "franchisee_deatils" ? (
                          <td
                            key={colIndex}
                            className={`py-[22px] px-[14px] flex  items-center flex-col gap-2 text-[14px] border-0`}
                          >
                            <div className="flex flex-col items-start">
                              <span>{cellValue[0]}</span>

                              <span className={`text-[14px] text-[#6A7683]`}>
                                {cellValue[1]}
                              </span>
                            </div>
                          </td>
                        ) : (
                          <td
                            key={colIndex}
                            className={`py-[22px] px-[14px] flex  items-center flex-col gap-2 text-[14px] border-0`}
                          >
                            <div className="flex flex-col  items-start">
                              <CustomButton
                                text="Verify"
                                onClick={() => onRowClick(item)}
                                style="w-[94px] h-[32px] bg-[#0E3281] text-[14px] font-[400] font-interRegular flex items-center text-[#fff] justify-center py-[10px] px[16px] rounded-[20px]"
                              />
                            </div>
                          </td>
                        ))}
                      {/* Admin-Generated-Invoices End */}
                      {/* Admin-DuesList */}
                      {type === "Admin-DuesList" && (
                        <td
                          key={colIndex}
                          className={`py-[22px] px-[14px] flex  items-center flex-col gap-2 text-[14px] border-0`}
                        >
                          <div className="flex flex-col items-start">
                            <span>{cellValue[0]}</span>

                            <span className={`text-[14px] text-[#6A7683]`}>
                              {cellValue[1]}
                            </span>
                          </div>
                        </td>
                      )}
                      {/* Admin-DuesList End */}
                    </div>
                  ) : (
                    <td
                      onClick={() =>
                        link
                          ? navigate(`${path}/${item[column.id]}`)
                          : handleModal(item)
                      }
                      key={colIndex}
                      className={`py-[22px] px-[14px] max-w-[300px]  text-[14px] ${
                        type === "Admin-FranchiseOrderSection"
                          ? "border-l border-[#F5F7FA] border-r"
                          : "border-0"
                      }`}
                      style={{ color: colors[colIndex % colors.length] }}
                    >
                      {isImage(cellValue) ? (
                        <img
                          src={cellValue}
                          alt={`Image at ${cellValue}`}
                          className="w-10 h-10 object-cover"
                        />
                      ) : (column.accessor === "Status") |
                        (column.accessor == "type") |
                        (column.accessor == "paid_amount") ? (
                        <span className={getStatusClass(cellValue)}>
                          {cellValue == "Failed" ? (
                            <div className="flex items-center justify-center gap-3">
                              <span> {cellValue}</span>
                              <img src="/image/failed_icon.svg" alt="icon" />
                            </div>
                          ) : (
                            <span>{cellValue}</span>
                          )}
                        </span>
                      ) : (
                        cellValue
                      )}
                    </td>
                  );
                })}
                {/* Admin-Recent-Orders */}
                {type === "Admin-Recent-Orders" && (
                  <td
                    className={`py-[22px] px-[14px] text-[#2080D9] text-[14px]`}
                  >
                    <span onClick={() => onRowClick(item)}>Details</span>
                  </td>
                )}
                {/* Admin-Recent-Orders End */}
                {/* Admin-Generated-Invoices */}
                {type === "Admin-Generated-Invoices" && (
                  <td>
                    <div className="flex items-center gap-3">
                      <img src="/image/download_arrow.svg" alt="icon" />
                      <span className="text-[#0E3281] text-[16px]">
                        Download Invoice
                      </span>
                    </div>
                  </td>
                )}
                {/* Admin-Generated-Invoices End */}
                {/* Admin-DuesList */}
                {type === "Admin-DuesList" && (
                  <td
                    className={`py-[22px] px-[14px] justify-center flex items-center text-[#2080D9] text-[14px]`}
                  >
                    <CustomButton
                      onClick={() => onRowClick(item)}
                      text="Generate bill"
                      style="w-[104px] h-[32px] bg-[#0E3281] text-[14px] font-[400] font-interRegular flex items-center text-[#fff] justify-center py-[10px] px[16px] rounded-[20px]"
                    />
                  </td>
                )}
                {/* Admin-DuesList End */}
                {/* Leave-Request-Section */}
                {type === "Leave-Request-Section" && (
                  <td>
                    <div className="flex gap-3">
                      <Tooltip content={"Approve"}>
                        <img
                          onClick={() => onRowClick(item, (type = "approved"))}
                          src="/image/approved_icon.svg"
                          className="w-10"
                          alt="image"
                        />
                      </Tooltip>
                      <Tooltip content={"Reject"}>
                        <img
                          onClick={() => onRowClick(item, (type = "rejected"))}
                          src="/image/remove_icon.svg"
                          className="w-10"
                          alt="image"
                        />
                      </Tooltip>
                    </div>
                  </td>
                )}
                {type === "Pharmcy-Orders-List" ? (
                  <td
                    onClick={() => handleActionClick(item, rowIndex)}
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

export default DoubleDataTable;
