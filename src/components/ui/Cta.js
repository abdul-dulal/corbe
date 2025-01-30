import React from "react";
import ButtonMore from "./ButtonMore";
import Link from "next/link";

const Cta = () => {
  return (
    <div>
      <div className="container">
        <div
          className="flex flex-wrap items-center justify-between"
          data-aos="fade-up"
        >
          <div>
            <h3 className="lg:text-[28px] md:text-[25px] text-xl leading-[30px] font-bold mb-[10px]">
              Want to Transform Your Brand too?
            </h3>
            <p className="text-light">
              Elevate Your Brand with Inspired Design{" "}
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-block text-[17px] font-medium leading-[15px]  group relative z-[9] mt-6 py-[26px] px-[30px] bg-secondary   text-white capitalize hover:text-secondary duration-500  after:absolute after:content-['']  after:h-0 after:top-[50%] after:right-0 after:w-full after:transition-all after:duration-500 after:bg-primary after:-z-[1]  after:hover:bottom-[50%] after:hover:top-0 after:hover:h-full "
          >
            Contact Us
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
        </div>
      </div>
    </div>
  );
};

export default Cta;
