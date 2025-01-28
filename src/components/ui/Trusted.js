import Image from "next/image";
import React from "react";
import tr1 from "@/public/img/HomeThree/tr1.png";
import tr2 from "@/public/img/HomeThree/tr2.png";
import tr3 from "@/public/img/HomeThree/tr3.png";
import tr4 from "@/public/img/HomeThree/tr4.png";
import tr5 from "@/public/img/HomeThree/tr5.png";
import tr6 from "@/public/img/HomeThree/tr6.png";
import tr7 from "@/public/img/HomeThree/tr7.png";
import tr8 from "@/public/img/HomeThree/tr8.png";
import tr9 from "@/public/img/HomeThree/tr9.png";

const Trusted = () => {
  return (
    <div className="bg-accent pb-[120px]">
      <div className="container">
        <p className="text-center text-light">We’re Trusted By Thousands </p>
        <div className="flex flex-wrap justify-around mt-10 ">
          <Image
            src={tr1}
            className="duration-[.9s] hover:duration-[.9s]  hover:-translate-y-6 cursor-pointer"
            alt="Trusted Thousands"
          />
          <Image
            className="duration-[.9s] hover:duration-[.9s]  hover:-translate-y-6 cursor-pointer"
            src={tr2}
            alt="Trusted Thousands"
          />
          <Image
            className="duration-[.9s] hover:duration-[.9s]  hover:-translate-y-6 cursor-pointer"
            src={tr3}
            alt="Trusted Thousands"
          />
          <Image
            className="duration-[.9s] hover:duration-[.9s]  hover:-translate-y-6 cursor-pointer"
            src={tr4}
            alt="Trusted Thousands"
          />
          <Image
            className="duration-[.9s] hover:duration-[.9s]  hover:-translate-y-6 cursor-pointer"
            src={tr5}
            alt="Trusted Thousands"
          />
        </div>
        <div className="flex flex-wrap justify-around mt-8">
          <Image
            className="duration-[.9s] hover:duration-[.9s]  hover:-translate-y-6 cursor-pointer"
            src={tr6}
            alt="Trusted Thousands"
          />
          <Image
            className="duration-[.9s] hover:duration-[.9s]  hover:-translate-y-6 cursor-pointer"
            src={tr7}
            alt="Trusted Thousands"
          />
          <Image
            className="duration-[.9s] hover:duration-[.9s]  hover:-translate-y-6 cursor-pointer"
            src={tr8}
            alt="Trusted Thousands"
          />
          <Image
            className="duration-[.9s] hover:duration-[.9s]  hover:-translate-y-6 cursor-pointer"
            src={tr9}
            alt="Trusted Thousands"
          />
        </div>
      </div>
    </div>
  );
};

export default Trusted;
