import React from "react";
import logo from "@/public/img/corbo_logo.png";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
    <header className="relative z-[9999] mt-10">
      <div className="container flex items-center justify-between bg-transparent z-[999] ">
        <div>
          <Image src={logo} alt="Logo" />
        </div>
        <ul className="flex  gap-10 text-white">
          <li className="py-5 relative">
            <Link href="" className="duration-500 hover:text-primary">
              Home
            </Link>
            <ul className="sub-menu bg-accent rounded-sm w-[250px] z-[9] text-left py-4 mt-6 px-5 block -left-[25px] m-auto absolute invisible opacity-0  transition-all duration-500 ease-out origin-top-left transform">
              <li className="relative  inline-block mr-10 transition-all duration-500  ">
                <Link
                  className="py-[9px]  m-0 text-white leading-[26px] capitalize  block  duration-500 hover:text-primary"
                  href="/"
                >
                  home one
                </Link>
              </li>
              <li className="relative  inline-block mr-10 transition-all duration-500  ">
                <Link
                  className="py-[9px]  m-0 text-white leading-[26px] capitalize  block  duration-500 hover:text-primary"
                  href="/homeTwo"
                >
                  home two
                </Link>
              </li>
              <li className="relative  inline-block mr-10 transition-all duration-500  ">
                <Link
                  className="py-[9px]  m-0 text-white leading-[26px] capitalize  block  duration-500 hover:text-primary"
                  href="/homeThree"
                >
                  home three
                </Link>
              </li>
              <li className="relative  inline-block mr-10 transition-all duration-500  ">
                <Link
                  className="py-[9px]  m-0 text-white leading-[26px] capitalize  block duration-500 hover:text-primary "
                  href="/HomeFour"
                >
                  home freight
                </Link>
              </li>
            </ul>
          </li>
          <li className="py-5">
            <Link href="/" className="duration-500 hover:text-primary">
              Services
            </Link>
          </li>
          <li className="py-5">
            <Link href="/" className="duration-500 hover:text-primary">
              Projects
            </Link>
          </li>
          <li className="py-5">
            <Link href="/" className="duration-500 hover:text-primary">
              Blog
            </Link>
          </li>
          <li className="py-5">
            <Link href="/" className="duration-500 hover:text-primary">
              Contact
            </Link>
          </li>
        </ul>
        <button className="relative py-[22px] px-[30px]  text-white hover:text-secondary duration-500 border border-solid border-white after:absolute after:content-['']  after:h-full after:left-[50%] after:top-0 after:w-0 after:transition-all after:duration-500 after:bg-primary after:-z-[1]  after:hover:right-[50%] after:hover:left-0 after:hover:w-[100%] ">
          <Link
            href="/"
            className="text-[17px] font-medium leading-[15px] capitalize"
          >
            contact us
          </Link>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
