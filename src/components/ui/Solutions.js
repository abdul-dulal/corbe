import Image from "next/image";
import Link from "next/link";
import React from "react";

const Solutions = ({ svg, t1, t2, img }) => {
  return (
    <div className="mb-[50px]">
      <div className="flex flex-wrap gap-4  md:flex-row items-center justify-between group transition-all relative   pb-[30px]  duration-500 border-b border-solid border-secondary ">
        <div className="group  flex items-center  gap-[30px]">
          <span>{svg}</span>
          <div>
            <h5 className="lg:text-[28px] sm:text-2xl text-xl text-secondary sm:leading-[30px] leading-7 font-bold  duration-500">
              {t1} <br /> {t2}
            </h5>
          </div>
        </div>
        <Link
          href="#"
          className="sm:w-20 w-[70px] sm:h-20 h-[70px] border border-solid border-secondary rounded-full flex items-center justify-center duration-500 group-hover:-rotate-[45deg] group-hover:bg-secondary group"
        >
          <svg
            className=" sm:w-[48px] w-[40px] sm:h-[49px] h-[40px]"
            viewBox="0 0 48 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 24.678H38M38 24.678L24 10.678M38 24.678L24 38.678"
              className="group-hover:stroke-white"
              stroke="#0A0C00"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>

        <Image
          src={img}
          alt={t1}
          className="absolute opacity-0 invisible  ease-out duration-[.9s] transition-all sm:w-[320px] w-[230px]   right-[15%]  object-cover  group-hover:right-[25%] group-hover:opacity-100 group-hover:visible  group-hover:rotate-[10deg]"
        />
      </div>
    </div>
  );
};

export default Solutions;
