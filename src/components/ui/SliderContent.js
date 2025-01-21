import Image from "next/image";
import Link from "next/link";
import React from "react";

const SliderContent = ({ bgImg, title, activeIndex, index }) => {
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
      <div className="container relative ">
        <div className="relative z-10">
          <h2
            className={`lg:text-[80px] md:text-[60px] sm:text-[45px] text-[28px] font-light text-white md:leading-[100px] sm:leading-[70px] leading-[45px] ${
              activeIndex == index ? "slider_title" : ""
            }`}
          >
            Creative Solution
            <span className="block font-semibold">{title}</span>
          </h2>
          <p
            className={`text-white mt-[10px] ${
              activeIndex == index ? "slider_parag " : ""
            }`}
          >
            Elevate Your Brand with Inspired Design Financial planners help{" "}
            <br />
            people to gain knowledge about to is invest and save
          </p>
          <div className="group inline-block relative z-20  mt-[62px] py-[22px] px-8 bg-primary  after:absolute after:content-['']  after:w-full after:top-[50%] after:left-0 after:h-0 after:transition-all after:duration-500 after:bg-[#083C2F] after:-z-[1]  after:hover:bottom-[50%] after:hover:top-0 after:hover:h-full">
            <Link
              href="/"
              className="text-[17px] text-secondary group-hover:text-white duration-500 font-medium leading-[15px] capitalize"
            >
              view profile
            </Link>
          </div>
          <div className="flex justify-end absolute sm:-bottom-[140px] -bottom-[170px] right-0 Corbe_counter">
            <div className="inline-block py-10 px-[30px] backdrop-blur-lg bg-[#FFFFFF1A] rounded-[20px] text-white">
              <h5 className="lg:text-[56px] md:text-[43px] sm:text-[38px] text-[30px] font-normal lg:leading-[74px] md:leading-[65px]  leading-[50px]">
                $4.5M+
              </h5>
              <span className="lg:text-2xl sm:text-[22px] text-[19px] leading-8 font-light">
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
