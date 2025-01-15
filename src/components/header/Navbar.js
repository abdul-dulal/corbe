import React from "react";
import logo from "@/public/img/corbe_logo.png";
import Image from "next/image";
import Link from "next/link";
import Drawer from "./Drawer";
import NavList from "../ui/NavList";

const Navbar = () => {
  return (
    <header className="relative z-[9999] mt-10">
      <div className="container flex items-center justify-between bg-transparent z-[999] ">
        <div>
          <Image src={logo} priority={true} alt="Logo" />
        </div>
        <NavList listColor="white" />
        <button className=" relative py-[22px] px-[30px]  text-white hover:text-secondary duration-500 border border-solid border-white after:absolute after:content-['']  after:h-full after:left-[50%] after:top-0 after:w-0 after:transition-all after:duration-500 after:bg-primary after:-z-[1]  after:hover:right-[50%] after:hover:left-0 after:hover:w-[100%] lg:block hidden">
          <Link
            href="/"
            className="text-[17px] font-medium leading-[15px] capitalize"
          >
            contact us
          </Link>
        </button>
        <Drawer iconColor="white" />
      </div>
    </header>
  );
};

export default Navbar;
