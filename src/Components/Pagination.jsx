import React from "react";

const Pagination = ({ page, totalPages, prevPage, nextPage, changePage }) => {
  return (
    <ul className="flex items-center justify-center gap-2 mt-4 mb-2 flex-wrap">
      <li
        className={`border px-3 py-1 rounded-lg border-slate-900 ${
          page > 1 ? "block" : "hidden"
        } cursor-pointer`}
        onClick={prevPage}
      >
        Prev
      </li>
      {[...Array(totalPages)].map((_, i) => (
        <li
          className={`border px-3 py-1 rounded-lg border-slate-900 ${
            page === i + 1 ? "bg-gray-300" : ""
          } cursor-pointer`}
          key={i}
          onClick={() => changePage(i + 1)}
        >
          {i + 1}
        </li>
      ))}
      <li
        className={`border px-3 py-1 rounded-lg border-slate-900 ${
          page < totalPages ? "block" : "hidden"
        } cursor-pointer`}
        onClick={nextPage}
      >
        Next
      </li>
    </ul>
  );
};

export default Pagination;
