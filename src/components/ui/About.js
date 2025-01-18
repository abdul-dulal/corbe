import React from "react";
import Image from "next/image";
import Review from "./Review";
import about from "@/public/img/HomeThree/about.png";
const About = () => {
  return (
    <div className="relative">
      <div className="absolute 2xl:left-[17%] md:left-[5%] left-[3%] -top-16 sm:w-[100px] w-[90px] sm:h-[100px] h-[90px] bg-[#083C2F] "></div>
      <div className="pt-[120px]  md:pl-[140px] sm:pl-10 pl-3 bg-primary 2xl:w-[75%] sm:w-[80%] w-[65%] 2xl:h-[740px] lg:h-[800px] sm:h-[740px] h-[600px] absolute right-0 -top-[280px] ">
        <h2 className="xl:text-[60px] lg:text-[45px] lg:leading-[80px] sm:text-[36px] text-[25px] md:leading-[50px] sm:leading-[50px] leading-[35px] text-secondary capitalize font-bold">
          Driven by Creativity <br className="xl:block hidden" /> and Passion
        </h2>
      </div>
      <div className="container relative pt-[60px]">
        <div className="relative grid lg:grid-cols-2 xl:gap-0 gap-10  z-[99]">
          <div>
            <Image src={about} className=" " alt="About" />
          </div>

          <div>
            <p>
              Elevate Your Brand with Inspired Design Financial planners help
              people to gain knowledge about to is invest and save their money
              Elevate Your Brand with Inspired Design Elevate Your Brand with
              Inspired Design Financial planners help people to gain
            </p>
            <div className="flex flex-wrap gap-8 mt-[60px]">
              <Review reviewNumber="4k+" reviewTitle="Team member" />
              <Review reviewNumber="80k+" reviewTitle="Client review" />
              <Review reviewNumber="10k+" reviewTitle="Complete project" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
