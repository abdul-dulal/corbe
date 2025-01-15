import React from "react";
import footerbg from "@/public/img/HomeTwo/footerbg-2.png";
import footerLogo from "@/public/img/logo-black.png";
import Image from "next/image";
import FooterSocial from "./FooterSocial";
import List from "../ui/List";
const FooterTwo = () => {
  return (
    <footer className="-mt-[200px]">
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
        <div className="grid lg:grid-cols-2 pb-14 border-b">
          <div className="space-y-5">
            <Image src={footerLogo} alt="Logo" />
            <p className=" sm:w-[448px] leading-[26px]">
              There are many variations of passages of Lorem Ipsum avalable, but
              the majority have suffered alteration
            </p>
            <FooterSocial />
          </div>
          <div className="flex flex-wrap justify-between lg:mt-0 mt-10">
            <div>
              <h5 className="text-xl text-secondary leading-[26px] font-bold mb-[30px]">
                Company
              </h5>
              <ul className="space-y-[15px]">
                <List path="/" title="Our company" />
                <List path="/" title="Security" />
                <List path="/" title="Company" />
              </ul>
            </div>
            <div>
              <h5 className="text-xl text-secondary leading-[26px] font-bold mb-[30px]">
                Page
              </h5>
              <ul className="space-y-[15px] sm:mb-0 mb-5">
                <List path="/" title="Pricing" />
                <List path="/" title="Features" />
                <List path="/" title="FAQ" />
              </ul>
            </div>
            <div className="">
              <h5 className="text-xl text-secondary leading-[26px] font-bold mb-[30px]">
                Company
              </h5>
              <ul className="space-y-[15px]">
                <List path="/" title="Privacy policy" />
                <List path="/" title="Terms of service" />
                <List path="/" title="Prohibited use policy" />
              </ul>
            </div>
          </div>
        </div>
        <div className="flex gap-5 flex-wrap justify-between items-center text-light mb-10 mt-[30px]">
          <p className="leading-[26px]">
            &copy; Copyright 2025, All Rights Reserved
          </p>

          <p className="leading-[26px] sm:mt-0 mt-3">
            Privacy Policy <span>Terms & Conditions</span>{" "}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterTwo;
