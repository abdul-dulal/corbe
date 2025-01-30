import React from "react";
import Image from "next/image";
import Review from "./Review";
import about from "@/public/img/HomeThree/about.png";
const About = () => {
  return (
    <div className=" relative">
      <div
        className="sm:pt-[120px] pt-[60px]  md:pl-[140px] sm:pl-10 pl-3 pr-3 bg-primary 2xl:w-[70%] sm:w-[80%] w-[65%] xl:h-[740px] lg:h-[800px] sm:h-[740px] h-[500px] absolute right-0 lg:-top-[280px] sm:-top-[210px] -top-[180px] "
        data-aos="fade-down"
      >
        <h2 className="xl:text-[60px] lg:text-[45px] lg:leading-[80px] sm:text-[36px] text-[25px] md:leading-[50px] sm:leading-[50px] leading-[35px] text-secondary capitalize font-bold ">
          Driven by Creativity <br className="xl:block hidden" /> and Passion
        </h2>
      </div>
      <div className="container relative pt-[60px]">
        <div className="absolute  2xl:left-[10%] left-[5%] -top-[110px] sm:w-[100px] w-[90px] sm:h-[100px] h-[90px] bg-[#083C2F] corbe_circle"></div>

        <div className="relative grid lg:grid-cols-2 xl:gap-0 gap-10  z-[99]">
          <div className="relative transition-all duration-[.4s] ease-out after:absolute after:content-[''] after:pointer-events-none after:opacity-[1] after:z-[3] after:left-1/2 after:top-0 after:right-1/2 after:bottom-0 after:bg-[rgba(255,255,255,0.3)] hover:after:right-0 hover:after:left-0 hover:after:opacity-0 hover:after:transition-all hover:after:duration-[.9s] hover:after:ease-linear">
            <Image src={about} className=" " alt="About" />
          </div>

          <div>
            <p>
              Elevate Your Brand with Inspired Design Financial planners help
              people to gain knowledge about to is invest and save their money
              Elevate Your Brand with Inspired Design Elevate Your Brand with
              Inspired Design Financial planners help people to gain
            </p>
            <div className="flex flex-wrap gap-6 mt-[60px] sm:justify-between justify-center">
              <div data-aos="zoom-in-up">
                <Review reviewNumber="4k+" reviewTitle="Team member" />
              </div>
              <div data-aos="zoom-in">
                <Review reviewNumber="80k+" reviewTitle="Client review" />
              </div>
              <div data-aos="zoom-in-down">
                <Review reviewNumber="10k+" reviewTitle="Complete project" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
