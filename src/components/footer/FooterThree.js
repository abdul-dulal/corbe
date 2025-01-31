"use client";
import React, { useEffect } from "react";
import footerbg from "@/public/img/HomeTwo/footerbg-2.png";
import FooterBootom from "./FooterBootom";
import Link from "next/link";
import "aos/dist/aos.css";
import AOS from "aos";
const FooterThree = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      AOS.init({
        duration: 600,
        offset: 100,
        easing: "ease-in-out",
        once: true,
      });
    }
  }, []);
  return (
    <footer className="">
      <div className="bg-primary">
        <div className="container">
          <div className="relative  ">
            <div
              className="group relative z-[99] flex flex-wrap items-center justify-between  mb-[100px] xl:pl-[130px] xs:pl-10 pl-5 pt-[10px] pb-[200px] xl:pr-[122px] xs:pr-10 pr-5"
              data-aos="fade-up"
            >
              <div className="pt-[120px]">
                <h2 className=" ">
                  Let’s Create Something <br className="xs:block hidden" />{" "}
                  Amazing Together
                </h2>
                <p className="text-secondarym leading-[26px] lg:pt-[50px] pt-5">
                  Elevate Your Brand with Inspired Design Financial planners
                  help
                </p>
                <div className="absolute right-20 sm:mt-0 mt-10">
                  <Link
                    href="#"
                    className=" sm:w-[120px] w-[100px]  sm:h-[120px] h-[100px] bg-secondary rounded-full flex items-center justify-center duration-500 group-hover:-rotate-[45deg] "
                  >
                    <svg
                      className=" sm:w-[60px] w-[40px] sm:h-[60px] h-[40px]"
                      viewBox="0 0 48 49"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 24.678H38M38 24.678L24 10.678M38 24.678L24 38.678"
                        className="group-hover:stroke-white"
                        stroke="white"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div
              style={{
                backgroundImage: `url(${footerbg.src})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="absolute inset-0  "
            ></div>
          </div>
        </div>
      </div>
      <FooterBootom />
    </footer>
  );
};

export default FooterThree;
