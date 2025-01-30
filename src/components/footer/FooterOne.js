import Image from "next/image";
import React from "react";
import logo from "@/public/img/logo-black.png";
import Link from "next/link";
import FooterSocial from "./FooterSocial";
const FooterOne = () => {
  return (
    <footer className="pt-[120px]">
      <div className="container">
        <div className="flex flex-wrap items-center justify-between mb-[100px]">
          <div>
            <h2 className="mb-5" data-aos="fade-up">
              Start your Journey <br className="sm:block hidden" />
              With Us
            </h2>
            <p className="text-light mb-10" data-aos="fade-up">
              Elevate Your Brand with Inspired Design Financial planners help{" "}
            </p>
          </div>
          <button
            className="w-[183px] h-[182px] bg-secondary rounded-full text-[17px] font-medium leading-4 text-white corbe_talk"
            data-aos="zoom-in"
          >
            Let’s Talk
          </button>
        </div>
        <div className="flex flex-wrap gap-10 justify-between items-center mb-[61px]">
          <div>
            <Link href="/">
              <Image src={logo} alt="Footer Logo" />
            </Link>
          </div>
          <ul className="flex flex-wrap sm:gap-[66px] gap-4">
            <li>
              <Link href="/aboutUs">About</Link>
            </li>
            <li>
              <Link href="/">Features</Link>
            </li>
            <li>
              <Link href="/">Works</Link>
            </li>
            <li>
              <Link href="/">Support</Link>
            </li>
          </ul>
          <FooterSocial />
        </div>
        <div className="flex flex-wrap gap-8 justify-between items-center text-light mb-10">
          <p className="text-center">
            &copy; Copyright 2025, All Rights Reserved
          </p>

          <p className=" text-center">
            Privacy Policy <span>Terms & Conditions</span>{" "}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterOne;
