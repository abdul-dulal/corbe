import Image from "next/image";
import React from "react";
import testimonial from "@/public/img/HomeTwo/testimonial.png";

const Testimonial = () => {
  return (
    <div className="p-10 bg-white w-[630px]">
      <span className="text-[25px] font-normal leading-[36px] ">
        “Bussiness is the process of repai and volves a to various materials
        such shil tiles metal services may include Proper roofing is a crucial
        for protecting”
      </span>
      <div className="flex justify-between items-center mt-[30px]">
        <div className="flex items-center gap-5 ">
          <Image
            src={testimonial}
            className="block rounded-full"
            alt="Testimonial"
          />
          <div className="">
            <span className="block text-xl font-bold leading-[26px]">
              Michael Ramirez
            </span>
            <span className="text-light ">Marketing Manager</span>
          </div>
        </div>
        <svg
          width="45"
          height="35"
          viewBox="0 0 45 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 20.0064H9.6155C10.1118 24.4681 8.98726 30.1682 0 30.1682V34.259C18.6915 34.259 19.2657 24.9854 19.2657 20.0064V0.740723H0V20.0064Z"
            fill="#083C2F"
          />
          <path
            d="M25.7344 20.0064H35.3495C35.8458 24.4682 34.7214 30.1682 25.7344 30.1682V34.259C44.4255 34.259 45.0001 24.9854 45.0001 20.0064V0.740723H25.7344V20.0064Z"
            fill="#083C2F"
          />
        </svg>
      </div>
    </div>
  );
};

export default Testimonial;
