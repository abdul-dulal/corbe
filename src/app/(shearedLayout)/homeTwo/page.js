"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import hero from "@/public/img/HomeTwo/hero.png";
import heroTwo from "@/public/img/HomeTwo/hero2.png";
import about from "@/public/img/HomeTwo/about2.png";
import Review from "@/src/components/ui/Review";
import ButtonMore from "@/src/components/ui/ButtonMore";
import client from "@/public/img/HomeTwo/c1.png";
import client2 from "@/public/img/HomeTwo/c2.png";
import client3 from "@/public/img/HomeTwo/c3.png";
import client4 from "@/public/img/HomeTwo/c4.png";
import client5 from "@/public/img/HomeTwo/c5.png";
import client6 from "@/public/img/HomeTwo/c6.png";
import client7 from "@/public/img/HomeTwo/c7.png";
import client8 from "@/public/img/HomeTwo/c8.png";
import client9 from "@/public/img/HomeTwo/c9.png";
import client10 from "@/public/img/HomeTwo/c10.png";
import client11 from "@/public/img/HomeTwo/c11.png";
import client12 from "@/public/img/HomeTwo/c12.png";
import client13 from "@/public/img/HomeTwo/c13.png";
import gellary from "@/public/img/HomeTwo/gellary.png";
import gellary2 from "@/public/img/HomeTwo/gellary2.png";
import gellary3 from "@/public/img/HomeTwo/gellary3.png";
import video from "@/public/img/HomeTwo/video.png";
import Gellary from "@/src/components/ui/Gellary";
import Testimonial from "@/src/components/ui/Testimonial";
import GellaryButton from "@/src/components/ui/GellaryButton";
import PlayVideo from "@/src/components/ui/PlayVideo";
import "aos/dist/aos.css";
import AOS from "aos";
const HomeTwo = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const alwaysOpenIndex = 1;

  const cards = [
    {
      id: 1,
      title: "Graphic Design",
      svg: (
        <svg
          width="160"
          height="160"
          viewBox="0 0 65 66"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M55.3313 15.5897L37.0162 3.83826C34.4825 2.21326 30.5162 2.21326 27.9839 3.83826L9.67011 15.5911C7.18793 17.1836 5.31647 20.6083 5.31647 23.5576V56.5871C5.31647 59.9468 8.05053 62.6809 11.4102 62.6809H53.5898C56.9495 62.6809 59.6836 59.9468 59.6836 56.5871V23.5576C59.6836 20.6069 57.8121 17.1836 55.3313 15.5897ZM55.6211 56.5858C55.6211 57.7056 54.7097 58.617 53.5898 58.617H11.4102C10.2903 58.617 9.37897 57.7056 9.37897 56.5858V23.5576C9.37897 22.0125 10.5639 19.8445 11.8639 19.0103L30.1776 7.25753C30.7856 6.86753 31.6428 6.67253 32.5 6.67253C33.3572 6.67253 34.2144 6.86753 34.8211 7.25753L53.1362 19.009C54.4375 19.8432 55.6211 22.0112 55.6211 23.5563V56.5858ZM32.5 30.1876C24.8733 30.1876 18.6699 36.3924 18.6699 44.0177V53.2166C18.6699 54.3378 19.5786 55.2478 20.7012 55.2478C21.8238 55.2478 22.7324 54.3378 22.7324 53.2166V44.0177C22.7324 38.6309 27.1145 34.2488 32.5 34.2488C37.8855 34.2488 42.2676 38.6309 42.2676 44.0177V53.2166C42.2676 54.3378 43.1776 55.2478 44.2989 55.2478C45.4201 55.2478 46.3301 54.3378 46.3301 53.2166V44.0177C46.3301 36.3911 40.1267 30.1876 32.5 30.1876Z"
            fill="#0A0C00"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: "SEO Expert",
      svg: (
        <svg
          width="160"
          height="160"
          viewBox="0 0 160 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_13_1113)">
            <path
              d="M153.75 37.0837C157.202 37.0837 160 34.2858 160 30.8337V6.24998C160 2.84789 157.232 -7.62939e-06 153.75 -7.62939e-06H129.166C125.715 -7.62939e-06 122.916 2.79784 122.916 6.24998C122.916 9.70212 125.715 12.5 129.166 12.5H138.661L122.813 28.3471C110.304 10.9106 90.2281 -7.62939e-06 67.7086 -7.62939e-06C30.2868 -7.62939e-06 0 30.2831 0 67.7086C0 105.128 30.2831 135.417 67.7086 135.417C83.6949 135.417 98.8316 129.911 110.963 119.802L149.331 158.17C151.771 160.61 155.728 160.61 158.169 158.17C160.61 155.728 160.61 151.771 158.169 149.331L119.802 110.963C137.054 90.2598 139.699 62.2142 129.309 39.5299L147.5 21.3391V30.8325C147.5 34.2846 150.298 37.0837 153.75 37.0837ZM67.7086 12.5C86.9469 12.5 103.916 22.3938 113.802 37.3583L79.9999 71.1608L59.8363 50.9972C57.3949 48.557 53.4386 48.557 50.9972 50.9972L15.7165 86.2779C2.88696 50.4638 29.5678 12.5 67.7086 12.5ZM67.7086 122.916C48.4692 122.916 31.5014 113.022 21.615 98.0577L55.4174 64.2552L75.5809 84.4188C78.0211 86.8602 81.9786 86.8602 84.4188 84.4188L119.699 49.1381C132.53 84.9522 105.849 122.916 67.7086 122.916Z"
              fill="#0A0C00"
            />
          </g>
          <defs>
            <clipPath id="clip0_13_1113">
              <rect width="160" height="160" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      id: 3,
      title: "Layout Design",
      svg: (
        <svg
          width="160"
          height="160"
          viewBox="0 0 65 66"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_16_427)">
            <path
              d="M54.7165 16.0832C54.0435 15.184 52.7719 15.0026 51.8727 15.6729C50.9749 16.3459 50.7907 17.6188 51.4624 18.5166C54.5377 22.6292 56.1654 27.5259 56.1654 32.6785C56.1654 45.7286 45.5488 56.3453 32.4987 56.3453C19.4486 56.3453 8.83325 45.7286 8.83325 32.6785C8.83325 19.6284 19.4499 9.01173 32.5 9.01173C35.1379 9.01173 37.7136 9.46132 40.1809 10.309L36.3093 11.7444C35.2585 12.1344 34.7209 13.3031 35.1109 14.3553C35.4142 15.1745 36.1901 15.681 37.0148 15.681C37.2491 15.681 37.4888 15.6404 37.7203 15.5537L45.7925 12.5624C46.8434 12.1724 47.381 11.0037 46.991 9.95288L43.9996 1.87934C43.611 0.827151 42.4437 0.290901 41.3888 0.679546C40.3379 1.06955 39.8003 2.23819 40.1903 3.29038L41.3509 6.42392C38.5044 5.46246 35.5361 4.94923 32.5 4.94923C17.2101 4.94923 4.77075 17.3886 4.77075 32.6785C4.77075 47.9684 17.2101 60.4078 32.5 60.4078C47.7899 60.4078 60.2293 47.9684 60.2293 32.6785C60.2293 26.6416 58.3226 20.9027 54.7165 16.0832ZM32.4431 32.7218L24.1286 25.951C23.2592 25.2428 21.9795 25.3741 21.2713 26.2435C20.563 27.1142 20.6944 28.3926 21.5638 29.1008L31.2163 36.9631C31.5914 37.2664 32.0464 37.4181 32.5 37.4181C32.9821 37.4181 33.4642 37.2461 33.8488 36.9062L48.7934 23.6449C49.6329 22.9001 49.7101 21.6163 48.9653 20.7767C48.2192 19.9372 46.9368 19.86 46.0986 20.6061L32.4431 32.7218Z"
              fill="#0A0C00"
            />
          </g>
          <defs>
            <clipPath id="clip0_16_427">
              <rect
                width="65"
                height="65"
                fill="white"
                transform="translate(0 0.177979)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      id: 4,
      title: "Mobile Design",
      svg: (
        <svg
          width="160"
          height="160"
          viewBox="0 0 65 63"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="9.91718"
            y="11.127"
            width="45.9771"
            height="39.2062"
            stroke="#0A0C00"
            strokeWidth="4.12708"
          />
          <rect
            x="2.4375"
            y="3.64673"
            width="12.1875"
            height="10.8333"
            stroke="#0A0C00"
            strokeWidth="4.12708"
          />
          <rect
            x="2.4375"
            y="45.626"
            width="12.1875"
            height="10.8333"
            stroke="#0A0C00"
            strokeWidth="4.12708"
          />
          <rect
            x="49.8339"
            y="3.64673"
            width="12.1875"
            height="10.8333"
            stroke="#0A0C00"
            strokeWidth="4.12708"
          />
          <rect
            x="49.8339"
            y="45.626"
            width="12.1875"
            height="10.8333"
            stroke="#0A0C00"
            strokeWidth="4.12708"
          />
        </svg>
      ),
    },
    {
      id: 5,
      title: "Web Design",
      svg: (
        <svg
          width="160"
          height="160"
          viewBox="0 0 65 66"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_16_522)">
            <path
              d="M20.022 39.7579C14.8988 35.9448 11.5801 29.8426 11.5801 22.9653C11.5801 11.4118 20.9461 2.04578 32.4996 2.04578C44.0532 2.04578 53.4192 11.4118 53.4192 22.9653C53.4192 29.7421 50.1968 35.7663 45.2008 39.5892"
              stroke="#0A0C00"
              strokeWidth="3.33601"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M32.5003 22.9653L62.3854 63.3102H2.61523L32.5003 22.9653Z"
              stroke="#0A0C00"
              strokeWidth="3.33601"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_16_522">
              <rect
                width="160"
                height="160"
                fill="white"
                transform="translate(0 0.177979)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
    },
  ];
  useEffect(() => {
    if (typeof window !== "undefined") {
      AOS.init({
        duration: 700,
        offset: 100,
        easing: "ease-in-out",
        once: true,
      });
    }
  }, []);
  return (
    <div>
      {/* Corbe_Hero_Start */}

      <section>
        <div className="container">
          <div className="flex items-center space-x-4" data-aos="fade-up">
            <h1 className="lg:text-[80px] md:text-[60px] sm:text-[45px] text-[28px] font-bold text-secondary md:leading-[100px] sm:leading-[70px] leading-[45px]">
              Our Blueprint for
            </h1>
            <div className="relative flex-1 w-full  h-[2px] bg-secondary "></div>
          </div>
          <h2
            className={`lg:text-[80px] md:text-[55px] sm:text-[45px] text-[28px] font-light text-secondary md:leading-[100px] sm:leading-[70px] leading-[45px] `}
            data-aos="fade-up"
          >
            Building Your Dream Brand
          </h2>
          <div className="grid grid-cols-12 justify-between 2xl:gap-[129px] lg:gap-[100px] gap-0  mt-[100px]">
            <div className="lg:col-span-7 col-span-12 ">
              <div className="relative transition-all duration-[.4s] ease-out after:absolute after:content-[''] after:pointer-events-none after:opacity-[1] after:z-[3] after:left-1/2 after:top-0 after:right-1/2 after:bottom-0 after:bg-[rgba(255,255,255,0.3)] hover:after:right-0 hover:after:left-0 hover:after:opacity-0 hover:after:transition-all hover:after:duration-[.9s] hover:after:ease-linear">
                <Image src={hero} className="w-full" alt="Hero" />
              </div>
            </div>
            <div className="lg:col-span-4 col-span-12 ">
              <div className="lg:block flex flex-wrap justify-between lg:mt-0 mt-10">
                <p className="text-light mb-10 leading-[26px]  lg:w-full w-[410px]">
                  Planners help people to gain knowledge about to is invest and
                  save their money edge about to is invest and
                </p>
                <Link
                  href="/homeTwo"
                  className="text-[17px] text-secondary hover:text-white duration-500 font-medium leading-[15px] capitalize inline-block  relative z-20   mb-[70px]  py-[22px] px-8 bg-primary  after:absolute after:content-['']  after:w-full after:top-[50%] after:left-0 after:h-0 after:transition-all after:duration-500 after:bg-[#083C2F] after:-z-[1]  after:hover:bottom-[50%] after:hover:top-0 after:hover:h-full"
                >
                  view profile
                </Link>
              </div>
              <div className="relative transition-all duration-[.4s] ease-out after:absolute after:content-[''] after:pointer-events-none after:opacity-[1] after:z-[3] after:top-1/2 after:right-0 after:bottom-1/2 after:left-0 after:bg-[rgba(255,255,255,0.3)] hover:after:top-0 hover:after:bottom-0 hover:after:opacity-0 hover:after:transition-all hover:after:duration-[.9s] hover:after:ease-linear">
                <Image src={heroTwo} className=" w-full" alt="Hero Image" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Corbe_Review_Start */}
      <div className="-mt-[90px] pt-[201px] pb-[83px] bg-primary">
        <div className="container">
          <div className="flex flex-wrap gap-10 sm:justify-between  justify-center   ">
            <div data-aos="zoom-in-up">
              <Review reviewNumber="$4.5M+" reviewTitle="Monthly Revenue" />
            </div>
            <div data-aos="zoom-in">
              <Review reviewNumber="$1.5k+" reviewTitle=" Project Delivered" />
            </div>
            <div data-aos="zoom-in-down">
              <Review
                reviewNumber="$1000+"
                reviewTitle="  Total User in the World"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Corbe_About_Start */}
      <section className="py-[170px] bg-accent">
        <div className="container">
          <div className="grid grid-cols-12 xl:gap-[100px] lg:gap-20  items-center ">
            <div
              className="xl:col-span-7 lg:col-span-6 col-span-12"
              data-aos="zoom-in-down"
            >
              <h2 className="xl:text-[60px] lg:text-[45px] lg:leading-[80px] sm:text-[36px] text-[25px] md:leading-[50px] sm:leading-[50px] leading-[35px] text-secondary capitalize font-bold mb-[30px]">
                Never Get Stuck Designing
              </h2>
              <p className="mb-10">
                Centralize all your contracts on a secure platform and improve
                <br />
                your follow-up with our automatic reminders.
              </p>
              <ul>
                <li className="relative ml-8 mb-4 after:absolute after:-left-8 after:top-1 after:w-4 after:h-4 after:bg-[#083C2F] after:rounded-full ">
                  Automated renewal tracking and reminders
                </li>
                <li className="relative ml-8 mb-4 after:absolute after:-left-8 after:top-1 after:w-4 after:h-4 after:bg-[#083C2F] after:rounded-full ">
                  Powerful filters and search to access information
                </li>
                <li className="relative ml-8 mb-4 after:absolute after:-left-8 after:top-1 after:w-4 after:h-4 after:bg-[#083C2F] after:rounded-full ">
                  Folder structure to stay organized
                </li>
              </ul>
              <ButtonMore buttonTitle="Learn More" />
            </div>
            <div
              className="xl:col-span-5  lg:col-span-6 col-span-12 lg:mt-0 mt-12"
              data-aos="zoom-in-up"
            >
              <Image src={about} className="w-full" alt="About" />
            </div>
          </div>
        </div>
      </section>

      {/* Corbe_Service_Start */}
      <section className="bg-accent pb-[120px]">
        <div className="container">
          <div
            className="flex flex-wrap justify-between items-center pb-[60px]"
            data-aos="fade-up"
          >
            <h2>
              Solutions for <br />
              Every Vision
            </h2>
            <ButtonMore buttonTitle="More Service" />
          </div>

          <div className="flex justify-center flex-wrap lg:gap-[30px] gap-5">
            {cards.map((card, index) => {
              const isOpen =
                index === hoveredIndex ||
                (hoveredIndex === null && index === alwaysOpenIndex);

              return (
                <div
                  key={card.id}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`group h-[350px] p-[30px] transition-all duration-500 ease-in-out 
              ${
                isOpen
                  ? "bg-primary lg:w-[410px] w-[300px]"
                  : "bg-white xs:w-[190px] w-[250px]"
              }
            `}
                >
                  <span
                    className={`flex justify-end mb-[60px] transition-transform duration-500 ease-in-out 
                ${isOpen ? "scale-100" : "scale-0 group-hover:scale-100"}
              `}
                  >
                    {card.svg}
                  </span>
                  <h4 className="">
                    {card.title.split(" ").map((word) => (
                      <div key={word}>{word}</div>
                    ))}
                  </h4>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Corbe_Clients_Start */}

      <div className="bg-accent pb-[120px]">
        <div className="flex flex-col overflow-hidden pb-[60px]">
          <div className=" flex items-center justify-center gap-[88px] corbe_marque">
            <Image src={client} alt="Client" />
            <Image src={client2} alt="Client" />
            <Image src={client3} alt="Client" />
            <Image src={client4} alt="Client" />
            <Image src={client5} alt="Client" />
            <Image src={client6} alt="Client" />
            <Image src={client} alt="Client" />
            <Image src={client2} alt="Client" />
            <Image src={client3} alt="Client" />
            <Image src={client4} alt="Client" />
          </div>
        </div>
        <div className="flex flex-col overflow-hidden pb-[120px]">
          <div className=" flex items-center justify-center gap-[88px] corbe_marque_right">
            <Image src={client7} alt="Client" />
            <Image src={client8} alt="Client" />
            <Image src={client9} alt="Client" />
            <Image src={client10} alt="Client" />
            <Image src={client11} alt="Client" />
            <Image src={client12} alt="Client" />
            <Image src={client13} alt="Client" />
            <Image src={client8} alt="Client" />
            <Image src={client10} alt="Client" />
            <Image src={client7} alt="Client" />
          </div>
        </div>
        <div className="container">
          <div className="relative">
            <div className="relative after:absolute after:content-[''] after:left-0 after:top-0 after:w-full after:h-0 after:bg-[rgba(255,255,255,.3)] after:opacity-100 after:z-[11] after:pointer-events-none after:hover:h-full after:hover:opacity-0 after:hover:transition-all after:hover:duration-[.4s] after:hover:ease-linear">
              <Image src={video} alt="" />
            </div>
            <PlayVideo />
          </div>
        </div>
      </div>

      {/* Corbe_Gellary_Start */}
      <section className="bg-accent">
        <div className="container">
          <h2
            className="text-center sm:pb-[100px] pb-[60px]"
            data-aos="fade-up"
          >
            impactful Results for <br className="sm:block hidden" /> Leading
            Brands
          </h2>
          <div className="grid md:grid-cols-2 xl:gap-[250px] lg:gap-24 gap-10">
            <div data-aos="zoom-in-down">
              <Gellary gellary={gellary} gellaryTitle="Galaxia Branding" />
            </div>

            <div className="relative xl:mt-[200px]" data-aos="zoom-in-up">
              <Gellary gellary={gellary2} gellaryTitle="Layout Branding" />
              <button className="absolute sm:top-[30%] top-[25%] sm:left-[30%] left-[40%] sm:w-[182px] w-[130px] sm:h-[182px] h-[130px] bg-[#083C2F] rounded-full sm:text-[17px] text-[15px] leading-[15px] font-semibold text-center text-white">
                Learn More
              </button>
            </div>
          </div>
          <div
            className="md:ml-[110px] xl:mt-0 mt-14 ml-0 pb-[100px]"
            data-aos="zoom-in-down"
          >
            <div>
              <Image
                src={gellary3}
                className="md:w-auto  w-full mb-[30px]"
                alt="Image Gellary"
              />
              <div className="flex flex-wrap gap-[7px] mb-5">
                <GellaryButton gTitle="Website" />
                <GellaryButton gTitle="Branding" />
                <GellaryButton gTitle="Application" />
              </div>
              <h4>Graphic Branding</h4>
            </div>
          </div>
          <div className="block text-center">
            <ButtonMore buttonTitle="View All" />
          </div>
        </div>
      </section>

      {/* Corbe_Testimonial_Start */}
      <section className="bg-accent pt-[120px] pb-[300px]">
        <div>
          <h2 className="text-center pb-[60px]" data-aos="fade-up">
            Trusted by Top <br /> Brands
          </h2>
          <div className="flex flex-col overflow-hidden pb-[30px]">
            <div className=" flex items-center justify-center gap-[88px] corbe_marque">
              <div className="flex gap-[30px]">
                <Testimonial />
                <Testimonial />
                <Testimonial />
                <Testimonial />
                <Testimonial />
                <Testimonial />
                <Testimonial />
              </div>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden pb-[60px]">
            <div className=" flex items-center justify-center gap-[88px] corbe_marque_right">
              <div className="flex gap-[30px]">
                <Testimonial />
                <Testimonial />
                <Testimonial />
                <Testimonial />
                <Testimonial />
                <Testimonial />
                <Testimonial />
              </div>
            </div>
          </div>
          <div className="block text-center">
            <ButtonMore buttonTitle="View All" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeTwo;
