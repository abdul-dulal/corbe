import React from "react";
import footerbg from "@/public/img/HomeTwo/footerbg-2.png";

import FooterBootom from "./FooterBootom";
const FooterTwo = () => {
  return (
    <footer className="-mt-[230px]">
      <div className="container">
        <div className="relative bg-primary mb-20">
          <div className="relative z-[99] flex flex-wrap items-center justify-between  mb-[100px] xl:pl-[130px] pl-10 pt-[130px] pb-[103px] xl:pr-[122px] pr-10">
            <div>
              <h2 className="mb-5 inline">
                Start Your Creative <br className="sm:block hidden" /> Journey
                With Us
              </h2>
              <p className="text-secondarym leading-[26px] mb-10">
                Elevate Your Brand with Inspired Design Financial planners help{" "}
              </p>
            </div>
            <button className="sm:w-[182px] w-[130px]  sm:h-[182px] h-[130px] m-auto bg-secondary rounded-full text-[17px] font-medium leading-4 text-white">
              Let’s Talk
            </button>
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
      <FooterBootom />
    </footer>
  );
};

export default FooterTwo;
