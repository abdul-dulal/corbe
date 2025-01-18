import React from "react";
import logo from "@/public/img/logo-black.png";
import Image from "next/image";
import Link from "next/link";
import Drawer from "./Drawer";
import NavList from "../ui/NavList";

const NavbarThree = () => {
  return (
    <header className="relative z-[9999] mt-10 mb-[70px]">
      <div className="container flex items-center justify-between bg-transparent z-[999] ">
        <div>
          <Image src={logo} alt="Logo" />
        </div>
        <NavList listColor="black" />
        <button className=" relative py-[22px] px-[30px] bg-transparent  text-secondary hover:text-secondary duration-500 border border-solid border-secondary hover:border-primary after:absolute after:content-['']  after:w-full after:top-[50%] after:right-0 after:h-0 after:transition-all after:duration-500 after:bg-primary after:-z-[1]  after:hover:bottom-[50%] after:hover:top-0 after:hover:h-full lg:block hidden">
          <Link
            href="/"
            className="text-[17px] font-medium leading-[15px] capitalize"
          >
            contact us
          </Link>
        </button>
        <Drawer iconColor="black" />
      </div>
    </header>
  );
};

export default NavbarThree;
