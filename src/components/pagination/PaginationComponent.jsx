// PaginationComponent.jsx
import React from "react";
import ReactPaginate from "react-paginate";

const PaginationComponent = ({ totalPages, handlePageClick }) => {
  return (
    <ReactPaginate
      previousLabel={"←"}
      nextLabel={"→"}
      breakLabel={"..."}
      pageCount={totalPages}
      marginPagesDisplayed={2}
      pageRangeDisplayed={3}
      onPageChange={handlePageClick}
      containerClassName={"flex justify-center items-center space-x-2 "}
      pageClassName={
        "rounded-full border border-gray-300  text-[#0E3281] flex w-[35px] h-[35px] items-center justify-center "
      }
      activeClassName={"bg-[#0E3281]  text-[#fff] "}
      nextClassName={"text-[20px] text-[#363636]"}
      previousClassName={"text-[20px] text-[#363636]"}
      breakClassName={"px-2 py-3"}
      disabledClassName={"opacity-50 cursor-not-allowed"}
    />
  );
};

export default PaginationComponent;
