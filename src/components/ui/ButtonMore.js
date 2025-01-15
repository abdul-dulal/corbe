import Link from "next/link";
import React from "react";

const ButtonMore = ({ buttonTitle }) => {
  return (
    <div>
      <button className="group relative z-[9] mt-6 py-[22px] px-[30px] bg-transparent  text-secondary hover:text-white duration-500 border border-solid border-secondary after:absolute after:content-['']  after:h-full after:left-[50%] after:top-0 after:w-0 after:transition-all after:duration-500 after:bg-[#083C2F] after:-z-[1]  after:hover:right-[50%] after:hover:left-0 after:hover:w-[100%] ">
        <Link
          href="/"
          className="inline-block text-[17px] font-medium leading-[15px] capitalize"
        >
          {buttonTitle}
          <span className="inline-block pl-[10px] ">
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
      </button>
    </div>
  );
};

export default ButtonMore;
