"use client";
import React, { useEffect, useState } from "react";
import logo from "@/public/img/logo-black.png";
import Image from "next/image";
import Link from "next/link";
import Drawer from "./Drawer";
import NavList from "../ui/NavList";

const NavbarThree = () => {
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
      className={`corbe z-[999] py-[30px] mb-[70px]  ${
        isSticky
          ? "fixed top-0 left-0 w-full bg-white shadow-lg   is_sticky mt-0"
          : "bg-transparent relative  "
      }`}
    >
      <div className="container flex items-center justify-between bg-transparent z-[999] ">
        <Link href="/">
          <Image src={logo} alt="Logo" />
        </Link>
        <NavList listColor="black" />
        <Link
          href="/contact"
          className=" text-[17px] font-medium leading-[15px] capitalize relative py-[22px] px-[30px] bg-transparent  text-secondary hover:text-secondary duration-500 border border-solid border-secondary hover:border-primary after:absolute after:content-['']  after:w-full after:top-[50%] after:right-0 after:h-0 after:transition-all after:duration-500 after:bg-primary after:-z-[1]  after:hover:bottom-[50%] after:hover:top-0 after:hover:h-full lg:inline-block hidden"
        >
          contact us
        </Link>

        <Drawer iconColor="black" />
      </div>
    </header>
  );
};

export default NavbarThree;
