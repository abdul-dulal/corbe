import React from "react";
import Image from "next/image";
import queen from "@/public/img/HomeThree/queen.png";
import group from "@/public/img/HomeThree/group.png";
import circle from "@/public/img/HomeThree/blur-circle.png";
import Link from "next/link";
import ButtonMore from "@/src/components/ui/ButtonMore";
import Service from "@/src/components/ui/Service";

import Review from "@/src/components/ui/Review";

import w2 from "@/public/img/HomeThree/w2.png";
import w3 from "@/public/img/HomeThree/w3.png";
import w4 from "@/public/img/HomeThree/w4.png";
import w5 from "@/public/img/HomeThree/w5.png";
import w6 from "@/public/img/HomeThree/w6.png";
import tr1 from "@/public/img/HomeThree/tr1.png";
import tr2 from "@/public/img/HomeThree/tr2.png";
import tr3 from "@/public/img/HomeThree/tr3.png";
import tr4 from "@/public/img/HomeThree/tr4.png";
import tr5 from "@/public/img/HomeThree/tr5.png";
import tr6 from "@/public/img/HomeThree/tr6.png";
import tr7 from "@/public/img/HomeThree/tr7.png";
import tr8 from "@/public/img/HomeThree/tr8.png";
import tr9 from "@/public/img/HomeThree/tr9.png";
import vision from "@/public/img/HomeThree/vision.png";
import PlayVideo from "@/src/components/ui/PlayVideo";
import Testimonial from "@/src/components/ui/Testimonial";
import t1 from "@/public/img/HomeThree/team.png";
import About from "@/src/components/ui/About";
import Cta from "@/src/components/ui/Cta";
const HomeThree = () => {
  const services = [
    {
      id: 1,
      title: "Graphic Design",
      svg: (
        <svg
          width="86"
          height="86"
          viewBox="0 0 86 86"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M28.0387 50.5933C21.8958 46.0213 17.9165 38.7045 17.9165 30.4583C17.9165 16.6052 29.1467 5.375 42.9998 5.375C56.853 5.375 68.0832 16.6052 68.0832 30.4583C68.0832 38.5839 64.2195 45.8072 58.229 50.391"
            stroke="#6F716C"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M42.9998 30.4585L78.8332 78.8335H7.1665L42.9998 30.4585Z"
            fill="white"
            stroke="#6F716C"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },

    {
      id: 2,
      title: "Layout Design",
      svg: (
        <svg
          width="76"
          height="68"
          viewBox="0 0 76 68"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="10.4609"
            y="10.9614"
            width="55.7692"
            height="47.6923"
            stroke="#6F716C"
            stroke-width="4"
          />
          <rect
            x="2"
            y="2.5"
            width="14.5385"
            height="12.9231"
            fill="white"
            stroke="#6F716C"
            stroke-width="4"
          />
          <rect
            x="2"
            y="52.5771"
            width="14.5385"
            height="12.9231"
            fill="white"
            stroke="#6F716C"
            stroke-width="4"
          />
          <rect
            x="58.5391"
            y="2.5"
            width="14.5385"
            height="12.9231"
            fill="white"
            stroke="#6F716C"
            stroke-width="4"
          />
          <rect
            x="58.5391"
            y="52.5771"
            width="14.5385"
            height="12.9231"
            fill="white"
            stroke="#6F716C"
            stroke-width="4"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Mobile Design",
      svg: (
        <svg
          width="82"
          height="82"
          viewBox="0 0 82 82"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M58.9375 17.9375H69.1875V28.1875H58.9375V17.9375ZM58.9375 33.3125H69.1875V43.5625H58.9375V33.3125ZM43.5625 17.9375H53.8125V28.1875H43.5625V17.9375ZM43.5625 33.3125H53.8125V43.5625H43.5625V33.3125Z"
            fill="white"
            stroke="#6F716C"
            strokeWidth="3"
          />
          <path
            d="M37.1562 66.625C39.2791 66.625 41 64.9041 41 62.7812C41 60.6584 39.2791 58.9375 37.1562 58.9375C35.0334 58.9375 33.3125 60.6584 33.3125 62.7812C33.3125 64.9041 35.0334 66.625 37.1562 66.625Z"
            fill="#6F716C"
          />
          <path
            d="M53.8125 76.875H20.5C19.1412 76.8736 17.8384 76.3333 16.8776 75.3724C15.9167 74.4116 15.3764 73.1088 15.375 71.75V10.25C15.3764 8.89118 15.9167 7.58841 16.8776 6.62758C17.8384 5.66675 19.1412 5.12636 20.5 5.125H53.8125V10.25H20.5V71.75H53.8125V51.25H58.9375V71.75C58.9361 73.1088 58.3958 74.4116 57.4349 75.3724C56.4741 76.3333 55.1713 76.8736 53.8125 76.875Z"
            fill="#6F716C"
          />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Web Design",
      svg: (
        <svg
          width="72"
          height="72"
          viewBox="0 0 72 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M60 2H70V12H60V2ZM60 17H70V27H60V17ZM45 2H55V12H45V2ZM45 17H55V27H45V17Z"
            fill="white"
            stroke="#6F716C"
            strokeWidth="3"
          />
          <path
            d="M65 37V52H5V12H35V7H5C3.67392 7 2.40215 7.52678 1.46447 8.46447C0.526784 9.40215 0 10.6739 0 12V52C0 53.3261 0.526784 54.5979 1.46447 55.5355C2.40215 56.4732 3.67392 57 5 57H25V67H15V72H55V67H45V57H65C66.3261 57 67.5979 56.4732 68.5355 55.5355C69.4732 54.5979 70 53.3261 70 52V37H65ZM40 67H30V57H40V67Z"
            fill="#6F716C"
          />
        </svg>
      ),
    },
  ];
  const teams = [
    {
      name: "Darlene Robertson",
      desiantion: "UI UX Designer",
    },
    {
      name: "Cody Fisher",
      desiantion: "Design Lead",
    },
    {
      name: "Wade Warren",
      desiantion: "Motion Designer",
    },
    {
      name: "Eleanor Pena",
      desiantion: "President of Sales",
    },
  ];
  return (
    <div>
      {/* Corbe_Hero_Start */}
      <section className="">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-20 overflow-hidden">
            <div>
              <h2 className="xl:text-[60px] lg:text-[45px] lg:leading-[80px] sm:text-[36px] text-[25px] md:leading-[50px] sm:leading-[50px] leading-[35px] text-secondary capitalize lg:text-left text-center font-bold -tracking-[2] block">
                Our Creativity
                <span className="inline-block ml-3">
                  <Image src={queen} alt="Queen" />
                </span>
                <br />
                Meets Strategy
              </h2>
              <p className="leading-[26px] text-light mt-5 mb-[30px] lg:text-left text-center">
                Elevate Your Brand with Inspired Design Financial <br />
                planners help people to gain knowledge about to is <br /> invest
                and save their money Elevate
              </p>
              <button className=" group relative z-20  block lg:m-0 m-auto mb-[46px]  py-[22px] px-8 bg-primary  after:absolute after:content-['']  after:h-0 after:top-[50%] after:right-0 after:w-full after:transition-all after:duration-500 after:bg-[#083C2F] after:-z-[1]  after:hover:bottom-[50%] after:hover:top-0 after:hover:h-full">
                <Link
                  href="/"
                  className="text-[17px] text-secondary group-hover:text-white duration-500 font-medium leading-[15px] capitalize"
                >
                  view profile
                </Link>
              </button>
            </div>
            <div className="relative">
              <Image src={group} className="z-[999] w-full" alt="Group" />
              <div className="absolute  -right-[100px] top-24 overflow-hidden">
                <Image
                  src={circle}
                  className="w-[500px] h-[500px] -z-[9]"
                  alt="Circle"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-14">
        <div className="overflow-hidden relative w-full bg-[#D7FF52] py-2">
          <div className="flex gap-10 items-center animate-marquee whitespace-nowrap  corbe_marque">
            {services.map((service) => {
              return (
                <div key={service.id}>
                  <h2>
                    {service.title}
                    <span className="inline-block relative top-5">
                      <svg
                        width="81"
                        height="81"
                        viewBox="0 0 81 81"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M63.9708 44.8701C43.1805 48.289 39.4845 52.6318 36.7124 77.9498C36.62 78.7814 35.4188 78.7814 35.3264 77.9498C32.5544 52.6318 28.8583 48.3814 8.06804 44.8701C7.23643 44.7777 7.23643 43.5765 8.06804 43.4841C28.8583 40.0653 32.5544 35.8148 35.3264 10.4969C35.4188 9.66527 36.62 9.66527 36.7124 10.4969C39.4845 35.8148 43.1805 39.9729 63.9708 43.4841C64.71 43.5765 64.71 44.6853 63.9708 44.8701Z"
                          fill="#0A0C00"
                        />
                        <path
                          d="M72.841 15.6714C66.373 16.965 64.5249 19.0902 63.4161 26.6671C63.3237 27.4987 62.1225 27.4987 62.0301 26.6671C60.9213 19.0902 59.0733 16.965 52.6052 15.579C51.866 15.3942 51.866 14.3777 52.6052 14.1929C58.9809 12.8993 60.9213 10.7741 62.0301 3.19719C62.1225 2.36558 63.3237 2.36558 63.4161 3.19719C64.5249 10.7741 66.373 12.8993 72.841 14.2853C73.5803 14.4701 73.5803 15.579 72.841 15.6714Z"
                          fill="#0A0C00"
                        />
                      </svg>
                    </span>
                  </h2>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Corbe_Service_Start */}
      <section className="py-[120px] bg-accent">
        <div className="container">
          <div className="flex flex-wrap items-center justify-between pb-[60px]">
            <h2>
              Transformative <br /> Creative Services
            </h2>
            <ButtonMore buttonTitle="More Service" />
          </div>
          <Service />
          <Link
            href="#"
            className="text-light block text-center mt-[60px] underline decoration-light decoration-2"
          >
            Get personalized service
            <span className="inline-block relative top-1 left-3">
              <svg
                width="27"
                height="26"
                viewBox="0 0 27 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 14.0833V20.5833C20 21.158 19.7717 21.7091 19.3654 22.1154C18.9591 22.5217 18.408 22.75 17.8333 22.75H5.91667C5.34203 22.75 4.79093 22.5217 4.3846 22.1154C3.97827 21.7091 3.75 21.158 3.75 20.5833V8.66667C3.75 8.09203 3.97827 7.54093 4.3846 7.1346C4.79093 6.72827 5.34203 6.5 5.91667 6.5H12.4167M16.75 3.25H23.25M23.25 3.25V9.75M23.25 3.25L11.3333 15.1667"
                  stroke="#6F716C"
                  strokeWidth="2.16667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </Link>
        </div>
      </section>

      {/* Corbe_About_Start */}

      <section className=" pt-[250px] pb-[120px] bg-accent">
        <About />
      </section>

      {/* Corbe_Work_Start */}
      <section className="bg-accent pb-[120px]">
        <h2 className="text-center pb-[60px]">
          Our Work Speaks <br /> Volumes
        </h2>
        <div className="flex flex-col overflow-hidden pb-[30px]">
          <div className=" flex items-center justify-center gap-[30px] corbe_marque">
            <Image src={w6} alt="Speaks Volumes" />
            <Image src={w2} alt="Speaks Volumes" />
            <Image src={w3} alt="Speaks Volumes" />
            <Image src={w4} alt="Speaks Volumes" />
            <Image src={w5} alt="Speaks Volumes" />
            <Image src={w6} alt="Speaks Volumes" />
          </div>
        </div>
        <div className="flex flex-col overflow-hidden ">
          <div className=" flex items-center justify-center gap-[30px] corbe_marque_right">
            <Image src={w4} alt="Speaks Volumes" />
            <Image src={w5} alt="Speaks Volumes" />
            <Image src={w6} alt="Speaks Volumes" />
            <Image src={w4} alt="Speaks Volumes" />
            <Image src={w2} alt="Speaks Volumes" />
            <Image src={w3} alt="Speaks Volumes" />
          </div>
        </div>
      </section>

      {/* Corbe_Trusted_Start */}
      <div className="bg-accent pb-[120px]">
        <div className="container">
          <p className="text-center text-light">We’re Trusted By Thousands </p>
          <div className="flex flex-wrap justify-between mt-10 ">
            <Image src={tr1} alt="Trusted Thousands" />
            <Image src={tr2} alt="Trusted Thousands" />
            <Image src={tr3} alt="Trusted Thousands" />
            <Image src={tr4} alt="Trusted Thousands" />
            <Image src={tr5} alt="Trusted Thousands" />
          </div>
          <div className="flex flex-wrap justify-around mt-5">
            <Image src={tr6} alt="Trusted Thousands" />
            <Image src={tr7} alt="Trusted Thousands" />
            <Image src={tr8} alt="Trusted Thousands" />
            <Image src={tr9} alt="Trusted Thousands" />
          </div>
        </div>
      </div>

      {/* Corbe_CallToAction_Start */}
      <section className="py-[60px]">
        <Cta />
      </section>

      {/* Corbe_Vision_Start */}
      <section className="bg-primary lg:h-[770px] sm:h-[500px] h-[400px]">
        <div className="container">
          <h2 className="text-center pt-[120px] pb-[60px]">
            From Vision to <br /> Reality
          </h2>
          <div className="relative">
            <Image src={vision} alt="Vision" />
            <PlayVideo />
          </div>
        </div>
      </section>

      {/* Corbe_Testimonial_Start */}
      <section className=" bg-accent xl:pt-[350px] md:pt-[300px] sm:pt-[250px] pt-[160px] pb-[120px]  overflow-hidden">
        <div className="container  pb-[350px] relative">
          <div className="flex flex-wrap items-center justify-between">
            <h2 className="">
              Hear from Our <br /> Happy Clients
            </h2>
            <div className="mt-10">
              <ButtonMore buttonTitle="More reviews" />
            </div>
          </div>
          <div className="absolute left-4 flex flex-col overflow-hidden pb-[30px] pt-[60px]">
            <div className="flex items-center justify-center gap-[88px] corbe_marque ">
              <div className="flex gap-[30px]">
                <Testimonial />
                <Testimonial />
                <Testimonial />
                <Testimonial />
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
        </div>
      </section>
      {/* Corbo_Team_Start */}
      <section className="pb-[100px] bg-accent pt-10">
        <div className="container">
          <h2 className="text-center pb-32">
            The Creative Minds <br /> Behind the Magic
          </h2>
          <div className="mb-[50px] ">
            {teams.map((team) => {
              return (
                <div
                  key={team.desiantion}
                  className="flex flex-wrap gap-4   items-center justify-between group transition-all relative   pb-[30px]  duration-500 border-b border-solid border-secondary "
                >
                  <div className="flex flex-wrap lg:gap-[200px] md:gap-8">
                    <div className="">
                      <h6 className="mt-[30px]  lg:text-[28px] sm:text-2xl text-xl text-secondary sm:leading-[30px] leading-7 font-bold  duration-500">
                        {team.name}
                      </h6>
                      <p className="text-light mt-[10px]">{team.desiantion}</p>
                    </div>
                    <div className="md:block hidden">
                      <div
                        style={{
                          transition:
                            "all 350ms cubic-bezier(0.445, 0.05, 0.55, 0.95)",
                        }}
                        className=" mt-5 flex justify-center items-center text-center overflow-hidden h-0 group-hover:h-[59px] "
                      >
                        <Link
                          target="blank"
                          style={{
                            transition:
                              "all 500ms cubic-bezier(0.445, 0.05, 0.55, 0.95)",
                          }}
                          className="h-[30px] w-[30px] flex items-center justify-center bg-transparent border border-solid border-light rounded-full text-secondary text-center leading-[30px] pt-[1px] mx-[5px] mt-5 mb-[10px] transform translate-y-[150px]   group-hover:transform group-hover:translate-x-0 group-hover:translate-y-0"
                          href="https://www.instagram.com/"
                        >
                          <svg
                            width="14"
                            height="13"
                            viewBox="0 0 14 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.125 3.60547C8.84766 3.60547 10.2695 5.02734 10.2695 6.75C10.2695 8.5 8.84766 9.89453 7.125 9.89453C5.375 9.89453 3.98047 8.5 3.98047 6.75C3.98047 5.02734 5.375 3.60547 7.125 3.60547ZM7.125 8.80078C8.24609 8.80078 9.14844 7.89844 9.14844 6.75C9.14844 5.62891 8.24609 4.72656 7.125 4.72656C5.97656 4.72656 5.07422 5.62891 5.07422 6.75C5.07422 7.89844 6.00391 8.80078 7.125 8.80078ZM11.1172 3.49609C11.1172 3.08594 10.7891 2.75781 10.3789 2.75781C9.96875 2.75781 9.64062 3.08594 9.64062 3.49609C9.64062 3.90625 9.96875 4.23438 10.3789 4.23438C10.7891 4.23438 11.1172 3.90625 11.1172 3.49609ZM13.1953 4.23438C13.25 5.24609 13.25 8.28125 13.1953 9.29297C13.1406 10.2773 12.9219 11.125 12.2109 11.8633C11.5 12.5742 10.625 12.793 9.64062 12.8477C8.62891 12.9023 5.59375 12.9023 4.58203 12.8477C3.59766 12.793 2.75 12.5742 2.01172 11.8633C1.30078 11.125 1.08203 10.2773 1.02734 9.29297C0.972656 8.28125 0.972656 5.24609 1.02734 4.23438C1.08203 3.25 1.30078 2.375 2.01172 1.66406C2.75 0.953125 3.59766 0.734375 4.58203 0.679688C5.59375 0.625 8.62891 0.625 9.64062 0.679688C10.625 0.734375 11.5 0.953125 12.2109 1.66406C12.9219 2.375 13.1406 3.25 13.1953 4.23438ZM11.8828 10.3594C12.2109 9.56641 12.1289 7.65234 12.1289 6.75C12.1289 5.875 12.2109 3.96094 11.8828 3.14062C11.6641 2.62109 11.2539 2.18359 10.7344 1.99219C9.91406 1.66406 8 1.74609 7.125 1.74609C6.22266 1.74609 4.30859 1.66406 3.51562 1.99219C2.96875 2.21094 2.55859 2.62109 2.33984 3.14062C2.01172 3.96094 2.09375 5.875 2.09375 6.75C2.09375 7.65234 2.01172 9.56641 2.33984 10.3594C2.55859 10.9062 2.96875 11.3164 3.51562 11.5352C4.30859 11.8633 6.22266 11.7812 7.125 11.7812C8 11.7812 9.91406 11.8633 10.7344 11.5352C11.2539 11.3164 11.6914 10.9062 11.8828 10.3594Z"
                              fill="#0A0C00"
                            />
                          </svg>
                        </Link>
                        <Link
                          target="blank"
                          style={{
                            transition:
                              "all 650ms cubic-bezier(0.445, 0.05, 0.55, 0.95)",
                          }}
                          className="h-[30px] w-[30px] flex items-center justify-center bg-transparent border border-solid border-light rounded-full text-secondary text-center leading-[30px] pt-[1px] mx-[5px] mt-5 mb-[10px] transform translate-y-[150px]  group-hover:transform group-hover:translate-x-0 group-hover:translate-y-0"
                          href="https://www.linkedin.com/"
                        >
                          <svg
                            width="13"
                            height="13"
                            viewBox="0 0 13 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M2.73438 13H0.191406V4.82422H2.73438V13ZM1.44922 3.73047C0.65625 3.73047 0 3.04688 0 2.22656C0 1.10547 1.20312 0.394531 2.1875 0.96875C2.65234 1.21484 2.92578 1.70703 2.92578 2.22656C2.92578 3.04688 2.26953 3.73047 1.44922 3.73047ZM12.2227 13H9.70703V9.03516C9.70703 8.07812 9.67969 6.875 8.36719 6.875C7.05469 6.875 6.86328 7.88672 6.86328 8.95312V13H4.32031V4.82422H6.75391V5.94531H6.78125C7.13672 5.31641 7.95703 4.63281 9.1875 4.63281C11.7578 4.63281 12.25 6.32812 12.25 8.51562V13H12.2227Z"
                              fill="#6F716C"
                            />
                          </svg>
                        </Link>
                        <Link
                          target="blank"
                          style={{
                            transition:
                              "all 800ms cubic-bezier(0.445, 0.05, 0.55, 0.95)",
                          }}
                          href="https://twitter.com/"
                          className="h-[30px] w-[30px] flex items-center justify-center bg-transparent border border-solid border-light rounded-full text-secondary text-center leading-[30px] pt-[1px] mx-[5px] mt-5 mb-[10px] transform translate-y-[150px]  group-hover:transform group-hover:translate-x-0 group-hover:translate-y-0"
                        >
                          <svg
                            width="13"
                            height="14"
                            viewBox="0 0 13 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.33184 5.92804C8.33188 5.92804 8.33192 5.92803 8.33194 5.928L12.8668 0.769984C13.1302 0.470352 12.9174 0 12.5185 0C12.3851 0 12.2582 0.0574007 12.1702 0.157548L10.7307 1.79476C9.22908 3.50276 6.52491 3.35524 5.21795 1.49403L4.6783 0.725533C4.35893 0.270722 3.83802 0 3.28228 0C1.90106 0 1.0925 1.55579 1.88626 2.68615L4.217 6.00525C4.94967 7.04862 4.87277 8.45795 4.03094 9.41541L0.677021 13.23C0.413571 13.5296 0.626335 14 1.02532 14C1.15867 14 1.28557 13.9426 1.37362 13.8424L2.90139 12.1047C4.48722 10.301 7.34297 10.4567 8.72323 12.4223L9.3217 13.2745C9.64107 13.7293 10.162 14 10.7177 14C12.0989 14 12.9075 12.4442 12.1137 11.3139L8.33174 5.92825C8.33168 5.92816 8.33174 5.92804 8.33184 5.92804ZM6.64026 7.85226C6.64026 7.85216 6.64023 7.85207 6.64017 7.85199L6.08647 7.07705L2.55209 2.13021C2.18714 1.6194 2.55228 0.909771 3.18006 0.909771C3.42928 0.909771 3.66315 1.03011 3.80803 1.23289L7.13314 5.88696L7.68693 6.66202L11.4373 11.9112C11.8022 12.422 11.4371 13.1316 10.8093 13.1316C10.5601 13.1316 10.3262 13.0113 10.1814 12.8085L6.64034 7.85253C6.64029 7.85245 6.64026 7.85236 6.64026 7.85226Z"
                              fill="#0A0C00"
                            />
                          </svg>
                        </Link>
                        <Link
                          target="blank"
                          style={{
                            transition:
                              "all 950ms cubic-bezier(0.445, 0.05, 0.55, 0.95)",
                          }}
                          className="h-[30px] w-[30px] flex items-center justify-center bg-transparent border border-solid border-light rounded-full text-secondary text-center leading-[30px] pt-[1px] mx-[5px] mt-5 mb-[10px] transform translate-y-[150px]  group-hover:transform group-hover:translate-x-0 group-hover:translate-y-0"
                          href="https://www.facebook.com/"
                        >
                          <svg
                            width="13"
                            height="15"
                            viewBox="0 0 9 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.62891 8.625H5.57812V14.75H2.84375V8.625H0.601562V6.10938H2.84375V4.16797C2.84375 1.98047 4.15625 0.75 6.15234 0.75C7.10938 0.75 8.12109 0.941406 8.12109 0.941406V3.10156H7C5.90625 3.10156 5.57812 3.75781 5.57812 4.46875V6.10938H8.01172L7.62891 8.625Z"
                              fill="#0A0C00"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <span className="">
                    <svg
                      className=" sm:w-[48px] w-[40px] sm:h-[49px] h-[40px]"
                      viewBox="0 0 48 49"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 24.678H38M38 24.678L24 10.678M38 24.678L24 38.678"
                        className=""
                        stroke="#0A0C00"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>

                  <Image
                    src={t1}
                    alt="Graphic Desing"
                    className="absolute scale-0 -top-12 z-[99]  duration-500 transition-all   group-hover:scale-[1] sm:right-[15%] right-0 group-hover:rotate-40"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Corbe_Service */}

      <section className="pb-[120px] bg-accent">
        <div className="container">
          <p className="text-light text-center pb-[30px]">
            Service You will get from Us
          </p>
          <div className="flex flex-wrap gap-10 justify-between">
            {services.map((service) => {
              return (
                <div key={service.id} className="flex gap-5">
                  <span>{service.svg}</span>
                  <h4 className="text-light">
                    {service.title.split(" ").map((word) => (
                      <div key={word}>{word}</div>
                    ))}
                  </h4>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeThree;
