import React from "react";
import List from "../ui/List";
import FooterSocial from "./FooterSocial";
import Image from "next/image";
import footerLogo from "@/public/img/logo-black.png";
import Link from "next/link";
const FooterBootom = () => {
  return (
    <div className="container">
      <div className="grid lg:grid-cols-2 pb-14 border-b" data-aos="fade-up">
        <div className="space-y-5">
          <Link href="/">
            <Image src={footerLogo} alt="Logo" />
          </Link>
          <p className=" sm:w-[448px] leading-[26px]">
            There are many variations of passages of Lorem Ipsum avalable, but
            the majority have suffered alteration
          </p>
          <FooterSocial />
        </div>
        <div className="flex flex-wrap gap-10 justify-between lg:mt-0 mt-10">
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
      <div className=" flex gap-5 flex-wrap justify-between items-center text-light mb-10 mt-[30px]">
        <p className="leading-[26px] text-center">
          &copy; Copyright 2025, All Rights Reserved
        </p>

        <p className="leading-[26px] sm:mt-0 mt-3 text-center">
          Privacy Policy <span>Terms & Conditions</span>{" "}
        </p>
      </div>
    </div>
  );
};

export default FooterBootom;
