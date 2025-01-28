"use client";
import BreadCumb from "@/src/components/ui/BreadCumb";
import GetInTouch from "@/src/components/ui/GetInTouch";
import InputField from "@/src/components/ui/InputField";
import {
  faArrowRight,
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <BreadCumb currentPage="Contact" />
      <section className="sm:pt-[120px] pt-[70px] pb-[350px] bg-accent">
        <div className="container">
          <div className="md:p-20 sm:p-12 p-6 bg-white rounded-[15px]">
            <div className="grid grid-cols-12 lg:gap-[60px]">
              <div className="lg:col-span-7 col-span-12">
                <h4 className="inline-block relative after:absolute after:-bottom-5 after:left-0 after:bg-[#083C2F] after:h-[1px] after:w-[90%] mb-[63px]">
                  Feel free to messege
                </h4>
                <form onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-[30px]">
                    <InputField type="text" placeholder="Your Name" />
                    <InputField type="email" placeholder="Your Email" />
                    <InputField type="tel" placeholder="Phome" />
                    <InputField type="text" placeholder="Sort by popular" />
                  </div>
                  <textarea
                    placeholder="Messege"
                    className="w-full h-[134px] bg-transparent border-2 border-opacity-20 rounded-[15px] pl-4 pt-4 placeholder:text-secondary outline-none focus:outline-none my-[30px]"
                  ></textarea>
                  <button
                    type="submit"
                    className=" text-[17px] leading-4 font-medium capitalize group relative z-20    py-[22px] w-full bg-[#083C2F] text-white hover:text-black duration-500  after:absolute after:content-['']  after:h-0 after:top-[50%] after:right-0 after:w-full after:transition-all after:duration-500 after:bg-primary after:-z-[1]  after:hover:bottom-[50%] after:hover:top-0 after:hover:h-full"
                  >
                    send a message{" "}
                    <FontAwesomeIcon
                      className="inline-block ml-2 mt-1"
                      icon={faArrowRight}
                    />
                  </button>
                </form>
              </div>
              <div className="lg:col-span-5 col-span-12 lg:mt-0 mt-10">
                <h4 className="inline-block relative after:absolute after:-bottom-5 after:left-0 after:bg-[#083C2F] after:h-[1px] after:w-[90%] mb-[63px] mt-3">
                  Get in touch
                </h4>
                <p>
                  It is a long established fact that a reader will be distrol
                  acted bioiiy desig the rea dablea contentIt
                </p>
                <GetInTouch
                  icon={faLocationDot}
                  title="Address"
                  address="2972 Westheimer Rd. Santa Ana, Illinois 85486"
                />
                <GetInTouch
                  icon={faEnvelope}
                  title="Email Address"
                  address="simmons@example.com"
                />
                <GetInTouch
                  icon={faPhone}
                  title="Phone number"
                  address="(704) 555-0127"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
