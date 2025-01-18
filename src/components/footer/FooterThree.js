import React from "react";
import footerbg from "@/public/img/HomeTwo/footerbg-2.png";
import FooterBootom from "./FooterBootom";
const FooterThree = () => {
  return (
    <footer className="">
      <div className="bg-primary">
        <div className="container">
          <div className="relative  ">
            <div className="relative z-[99] flex flex-wrap items-center justify-between  mb-[100px] xl:pl-[130px] pl-10 pt-[10px] pb-[200px] xl:pr-[122px] pr-10">
              <div className="pt-[120px]">
                <h2 className=" ">
                  Let’s Create Something <br /> Amazing Together
                </h2>
                <p className="text-secondarym leading-[26px] pt-[50px]">
                  Elevate Your Brand with Inspired Design Financial planners
                  help
                </p>
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
