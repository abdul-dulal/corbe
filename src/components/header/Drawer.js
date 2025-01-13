"use client";
import { useState } from "react";
import Link from "next/link";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebook,
  faPinterest,
  faVimeoV,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import logo from "@/public/img/corbo_logo.png";

const Drawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [home, setHome] = useState(true);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative lg:hidden block">
      <button
        className="relative z-[99] w-[30px] h-[20px] flex  flex-col justify-between overflow-hidden"
        onClick={toggleDrawer}
      >
        <span className="w-[80px] h-[2px] bg-white"></span>
        <span className="w-[80px] h-[2px] bg-white"></span>
        <span className="w-[80px] h-[2px] bg-white"></span>
      </button>

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-screen lg:w-[500px] md:w-[420px] w-[300px] bg-[#083C2F] border-l border-solid border-white text-white transform z-[10000] overflow-y-scroll overflow-x-hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500 ease-in-out`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="h-full flex flex-col">
          <div className="px-[35px] pt-10 pb-2 flex-shrink-0">
            <div className="flex justify-between items-center border-b border-solid border-[rgba(255,255,255,0.079)] pb-5 mb-[35px]">
              <Image src={logo} className="w-[160px]" alt="Logo" />
              <button className="text-3xl" onClick={toggleDrawer}>
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>
          </div>

          <div className=" px-[35px] pb-5">
            <header>
              <ul className="relative">
                <li className="relative  ">
                  <Link
                    href="javascript:void(0)"
                    className="flex justify-between items-center border-b border-solid border-[rgba(255,255,255,0.079)] pb-5"
                  >
                    Home
                    <span
                      onClick={() => setHome(!home)}
                      className={`text-center h-[35px] w-[35px] border border-solid border-[rgba(255,255,255,0.079)] rounded-[3px] font-normal text-2xl duration-500 ${
                        home ? "" : "bg-primary text-black"
                      }`}
                    >
                      {home ? "+" : "-"}
                    </span>
                  </Link>
                  <ul
                    className={`transition-all duration-500 bg-transparent  ease-in-out overflow-hidden px-3   ${
                      home ? "max-h-0" : "max-h-40"
                    } `}
                  >
                    <li>
                      <Link
                        href="/"
                        className={`capitalize text-[16px] leading-[50px] font-normal text-white  border-b  border-solid border-[rgba(255,255,255,0.079)]  flex items-center justify-between`}
                      >
                        Home One
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/"
                        className={`capitalize text-[16px] leading-[50px] font-normal text-white  border-b  border-solid border-[rgba(255,255,255,0.079)]  flex items-center justify-between`}
                      >
                        Home Two
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/"
                        className={`capitalize text-[16px] leading-[50px] font-normal text-white  border-b  border-solid border-[rgba(255,255,255,0.079)]  flex items-center justify-between`}
                      >
                        Home Three
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="mt-3 border-b border-solid border-[rgba(255,255,255,0.079)] pb-5">
                  <Link href="/about">About</Link>
                </li>
                <li className="relative  mt-3">
                  <Link
                    href="javascript:void(0)"
                    className="flex justify-between items-center border-b border-solid border-[rgba(255,255,255,0.079)] pb-5"
                  >
                    Service
                  </Link>
                </li>
                <li className="relative  mt-3">
                  <Link
                    href="javascript:void(0)"
                    className="flex justify-between items-center border-b border-solid border-[rgba(255,255,255,0.079)] pb-5"
                  >
                    Projects
                  </Link>
                </li>
                <li className="relative  mt-3">
                  <Link
                    href="javascript:void(0)"
                    className="flex justify-between items-center border-b border-solid border-[rgba(255,255,255,0.079)] pb-5"
                  >
                    Blog
                  </Link>
                </li>
                <li className="mt-3 border-b border-solid border-[rgba(255,255,255,0.079)] pb-5">
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </header>
            <div className="mt-10">
              <span className="text-xl text-white font-bold">
                Subscribe & Follow
              </span>
              <ul className="my-5 flex gap-3">
                <li className="h-9 w-9 bg-black rounded-full flex items-center justify-center">
                  <Link
                    href="https://www.facebook.com/"
                    className="text-white "
                  >
                    <FontAwesomeIcon icon={faFacebook} />
                  </Link>
                </li>
                <li className="h-9 w-9 bg-black rounded-full flex items-center justify-center">
                  <Link
                    href="https://x.com/i/flow/login?mx=2"
                    className="text-white"
                  >
                    <FontAwesomeIcon icon={faXTwitter} />
                  </Link>
                </li>
                <li className="h-9 w-9 bg-black rounded-full flex items-center justify-center">
                  <Link
                    href="https://www.pinterest.com/"
                    className="text-white"
                  >
                    <FontAwesomeIcon icon={faPinterest} />
                  </Link>
                </li>
                <li className="h-9 w-9 bg-black rounded-full flex items-center justify-center">
                  <Link href="https://www.vimo.com/" className="text-white">
                    <FontAwesomeIcon icon={faVimeoV} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[9999]"
          onClick={toggleDrawer}
        ></div>
      )}
    </div>
  );
};

export default Drawer;
