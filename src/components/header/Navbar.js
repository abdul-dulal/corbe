"use client";
import React, { useEffect, useState } from "react";
import logo from "@/public/img/corbe_logo.png";
import Image from "next/image";
import Link from "next/link";
import Drawer from "./Drawer";
import NavList from "../ui/NavList";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 10) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`z-[999] py-[30px]  ${
        isSticky
          ? "fixed top-0 left-0 w-full bg-[#083C2F]  is_sticky mt-0"
          : "bg-transparent relative  "
      }`}
    >
      <div className="container flex items-center justify-between  ">
        <div>
          <Image src={logo} priority={true} alt="Logo" />
        </div>
        <NavList listColor="white" />
        <div className=" relative py-[22px] px-[30px]  text-white hover:text-secondary duration-500 border border-solid border-white after:absolute after:content-['']  after:w-full after:top-[50%] after:left-0 after:h-0 after:transition-all after:duration-500 after:bg-primary after:-z-[1]  after:hover:bottom-[50%] after:hover:top-0 after:hover:h-full lg:inline-block hidden">
          <Link
            href="/"
            className="text-[17px] font-medium leading-[15px] capitalize"
          >
            contact us
          </Link>
        </div>
        <Drawer iconColor="white" />
      </div>
    </header>
  );
};

export default Navbar;
