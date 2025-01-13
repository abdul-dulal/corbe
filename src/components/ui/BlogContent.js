import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogContent = ({ blogImg, blogTitle }) => {
  return (
    <div>
      <div className="group">
        <Image src={blogImg} className="mb-[27px] w-full" alt="Blog" />
        <p className="flex items-center gap-2">
          <svg
            width="11"
            height="13"
            viewBox="0 0 11 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.5625 1.67773H6.9375V0.740234C6.9375 0.435547 7.17188 0.177734 7.5 0.177734C7.80469 0.177734 8.0625 0.435547 8.0625 0.740234V1.67773H9C9.82031 1.67773 10.5 2.35742 10.5 3.17773V10.6777C10.5 11.5215 9.82031 12.1777 9 12.1777H1.5C0.65625 12.1777 0 11.5215 0 10.6777V3.17773C0 2.35742 0.65625 1.67773 1.5 1.67773H2.4375V0.740234C2.4375 0.435547 2.67188 0.177734 3 0.177734C3.30469 0.177734 3.5625 0.435547 3.5625 0.740234V1.67773ZM1.125 5.99023H3V4.67773H1.125V5.99023ZM1.125 7.11523V8.61523H3V7.11523H1.125ZM4.125 7.11523V8.61523H6.375V7.11523H4.125ZM7.5 7.11523V8.61523H9.375V7.11523H7.5ZM9.375 4.67773H7.5V5.99023H9.375V4.67773ZM9.375 9.74023H7.5V11.0527H9C9.1875 11.0527 9.375 10.8887 9.375 10.6777V9.74023ZM6.375 9.74023H4.125V11.0527H6.375V9.74023ZM3 9.74023H1.125V10.6777C1.125 10.8887 1.28906 11.0527 1.5 11.0527H3V9.74023ZM6.375 4.67773H4.125V5.99023H6.375V4.67773Z"
              fill="#0A0C00"
            />
          </svg>
          January 19, 2025
        </p>
        <h4 className="lg:text-2xl sm:text-xl text-lg capitalize leading-[30px] font-bold mt-[10px]">
          {blogTitle}
        </h4>
        <button className=" relative z-[9] mt-10 py-[22px] px-[30px] bg-transparent  text-secondary hover:text-white duration-500 border border-solid border-secondary after:absolute after:content-['']  after:h-full after:left-[50%] after:top-0 after:w-0 after:transition-all after:duration-500 after:bg-secondary after:-z-[1]  after:hover:right-[50%] after:hover:left-0 after:hover:w-[100%] ">
          <Link
            href="/"
            className="inline-block text-[17px] font-medium leading-[15px] capitalize"
          >
            Learn More
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
    </div>
  );
};

export default BlogContent;
