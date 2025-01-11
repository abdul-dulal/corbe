import Image from "next/image";
import Link from "next/link";
import React from "react";
import line from "@/public/img/HomeOne/Line.png";

const SliderContent = ({ bgImg, title }) => {
  return (
    <div
      className="relative h-[900px] flex items-center"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container relative">
        <div className="relative z-10">
          <h2 className="text-[80px] font-light text-white leading-[100px]">
            Creative Solution
            <span className="block font-semibold">{title}</span>
          </h2>
          <p className="text-white mt-[10px]">
            Elevate Your Brand with Inspired Design Financial planners help{" "}
            <br />
            people to gain knowledge about to is invest and save
          </p>
          <button className="group relative z-20 block mt-[62px] py-[22px] px-8 bg-primary  after:absolute after:content-['']  after:h-full after:left-[50%] after:top-0 after:w-0 after:transition-all after:duration-500 after:bg-accent after:-z-[1]  after:hover:right-[50%] after:hover:left-0 after:hover:w-[100%]">
            <Link
              href="/"
              className="text-[17px] text-secondary group-hover:text-white duration-500 font-medium leading-[15px] capitalize"
            >
              view profile
            </Link>
          </button>
          <div className="flex justify-end absolute -bottom-[140px] right-0 corbo_counter">
            <div className="inline-block py-10 px-[30px] backdrop-blur-lg bg-[#FFFFFF1A] rounded-[20px]">
              <h5 className="text-[56px] text-secondary font-normal leading-[74px]">
                $4.5M+
              </h5>
              <span className="text-2xl leading-8 font-light">
                Monthly Revenue
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-50 "></div>
    </div>
  );
};

export default SliderContent;
