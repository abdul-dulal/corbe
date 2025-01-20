import Link from "next/link";
import React from "react";

const NavList = ({ listColor }) => {
  return (
    <div>
      <ul className={`lg:flex  gap-10 text-${listColor} hidden`}>
        <li className="py-5 relative">
          <Link href="" className="duration-500 hover:text-primary">
            Home
          </Link>
          <ul className="sub-menu bg-[#083C2F] rounded-sm w-[250px] z-[9] text-left py-4 mt-6 px-5 block -left-[25px] m-auto absolute invisible opacity-0  transition-all duration-500 ease-out origin-top-left transform">
            <li className="relative  inline-block mr-10 transition-all duration-500  ">
              <Link
                className="py-[9px]  m-0 text-white leading-[26px] capitalize  block  duration-500 hover:text-primary"
                href="/homeOne"
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
          </ul>
        </li>
        <li className="py-5">
          <Link href="/aboutUs" className="duration-500 hover:text-primary">
            About Us
          </Link>
        </li>
        <li className="py-5">
          <Link href="/services" className="duration-500 hover:text-primary">
            Services
          </Link>
        </li>

        <li className="py-5">
          <Link href="/blog" className="duration-500 hover:text-primary">
            Blog
          </Link>
        </li>
        <li className="py-5">
          <Link href="/contact" className="duration-500 hover:text-primary">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavList;
