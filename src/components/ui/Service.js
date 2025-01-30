import React from "react";

import Link from "next/link";

const Service = ({ title, svg }) => {
  return (
    <div className=" ">
      <div className="group sm:p-10 p-8 bg-white ">
        <span className="">{svg}</span>
        <h4 className="sm:pt-[60px] pt-10 pb-5">
          <Link href="/service-details">{title}</Link>
        </h4>
        <p className="text-light leading-[26px]">
          Elevate Your Brand with Inspired people to gain knowledge about to is
          invest and save their money
        </p>
        <Link
          href="/service-details"
          className=" inline-block text-[17px] font-medium leading-[15px]   group  relative z-[9] mt-6 py-[22px] px-[30px] bg-transparent text-secondary capitalize group-hover:text-white duration-500 border border-solid border-secondary overflow-hidden"
        >
          <span className="absolute inset-0 bg-secondary scale-x-0 group-hover:scale-x-100 transform transition-transform duration-500 origin-center z-[-1]"></span>
          learn more
          <span className="inline-block pl-[10px]">
            <svg
              width="15"
              height="13"
              viewBox="0 0 15 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="group-hover:fill-white"
            >
              <path
                d="M13.6875 7.71875L8.6875 12.7188C8.5 12.9062 8.25 13 8 13C7.71875 13 7.46875 12.9062 7.28125 12.7188C6.875 12.3438 6.875 11.6875 7.28125 11.3125L10.5625 8H1C0.4375 8 0 7.5625 0 7C0 6.46875 0.4375 6 1 6H10.5625L7.28125 2.71875C6.875 2.34375 6.875 1.6875 7.28125 1.3125C7.65625 0.90625 8.3125 0.90625 8.6875 1.3125L13.6875 6.3125C14.0938 6.6875 14.0938 7.34375 13.6875 7.71875Z"
                fill="#0A0C00"
                className="fill-current"
              />
            </svg>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Service;
