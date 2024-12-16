import React, { useState } from "react";
import { columns, data, colors } from "../../utils/users-data";
import Sidebar from "../../components/general/Sidebar";
import Header from "../../components/general/Header";
import Table from "../../components/Table/Table";
import PaginationComponent from "../../components/pagination/PaginationComponent";
import SubBox from "../../components/filtter_box/SubBox";
import CreatUser from "../../components/form/CreatUser";

export default function Users() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const startIndex = currentPage * itemsPerPage;
  const currentUsers = data.slice(startIndex, startIndex + itemsPerPage);
  console.log(currentUsers, "hvasdv");
  return (
    <div className="bg-[#F5F7FA] w-full">
      <div className="flex w-full justify-between">
        <Sidebar />
        <div className="w-full">
          <Header current="Users" />
          <div className="flex justify-between items-center px-4 pt-4 rounded w-full">
            <div className="flex-grow relative">
              <h3 className="text-[#0A0A0A] font-interRegular text-[16px]">
                Users
              </h3>
            </div>

            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => setIsModalOpen(true)}
            >
              <img
                src="/image/add_icon.svg"
                alt="Add Icon"
                className="w-[20px]"
              />
              <h3 className="text-[16px] font-interRegular">Create</h3>
            </div>
          </div>
          <Table
            data={currentUsers}
            columns={columns}
            colors={colors}
            link={false}
            action={true}
            head_colors={[]}
            onRowClick={(item, rowIndex, { openModal }) => {
              openModal();
            }}
            modalComponent={SubBox}
            type="Admin-Users"
          />
          <div className="flex font-interRegular text-[#7B7B75] px-4  text-[12px] justify-between items-center">
            <h4>
              Showing {currentPage + 1} to {totalPages} of {data.length} data
            </h4>
            <PaginationComponent
              totalPages={totalPages}
              handlePageClick={handlePageClick}
            />
          </div>
          {isModalOpen && (
            <CreatUser closeModal={closeModal} isOpen={isModalOpen} />
          )}
        </div>
      </div>
    </div>
  );
}
