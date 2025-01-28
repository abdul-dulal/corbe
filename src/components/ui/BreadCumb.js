import Link from "next/link";
import React from "react";

const BreadCumb = ({ currentPage }) => {
  return (
    <section className="md:h-[500px] sm:h-[450px] h-[300px] bg-[#F0F2F0] sm:-mt-[178px] -mt-[150px] flex items-center justify-center">
      <div className="mt-8">
        <h2 className="mb-5 capitalize">{currentPage}</h2>
        <h5 className="sm:text-xl text-lg leading-[26px] font-bold text-center">
          <Link href="/homeOne"> Home</Link>
          <span className="inline-block mx-5">
            <svg
              width="8"
              height="13"
              viewBox="0 0 8 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.49463 13C1.21338 13 0.963379 12.9062 0.775879 12.7188C0.369629 12.3438 0.369629 11.6875 0.775879 11.3125L5.05713 7L0.775879 2.71875C0.369629 2.34375 0.369629 1.6875 0.775879 1.3125C1.15088 0.90625 1.80713 0.90625 2.18213 1.3125L7.18213 6.3125C7.58838 6.6875 7.58838 7.34375 7.18213 7.71875L2.18213 12.7188C1.99463 12.9062 1.74463 13 1.49463 13Z"
                fill="#083C2F"
              />
            </svg>
          </span>
          <Link href="/#" className="inline-block capitalize">
            {currentPage}
          </Link>
        </h5>
      </div>
    </section>
  );
};

export default BreadCumb;
