import React from "react";
import Image from "next/image";
import queen from "@/public/img/HomeThree/queen.png";
import group from "@/public/img/HomeThree/group.png";
import circle from "@/public/img/HomeThree/blur-circle.png";
import Link from "next/link";
import ButtonMore from "@/src/components/ui/ButtonMore";
import Service from "@/src/components/ui/Service";
import g1 from "@/public/img/HomeThree/g1.png";
import g2 from "@/public/img/HomeThree/g2.png";
import g3 from "@/public/img/HomeThree/g3.png";
import g4 from "@/public/img/HomeThree/g4.png";
import g5 from "@/public/img/HomeThree/g5.png";
import vision from "@/public/img/HomeThree/vision.png";
import PlayVideo from "@/src/components/ui/PlayVideo";
import Testimonial from "@/src/components/ui/Testimonial";

import About from "@/src/components/ui/About";
import Cta from "@/src/components/ui/Cta";
import Trusted from "@/src/components/ui/Trusted";
import Team from "@/src/components/ui/Team";
import ProvideService from "@/src/components/ui/ProvideService";

const HomeThree = () => {
  const services = [
    {
      id: 1,
      title: "Graphic Design",
    },

    {
      id: 2,
      title: "Layout Design",
    },
    {
      id: 3,
      title: "Mobile Design",
    },
    {
      id: 4,
      title: "Web Design",
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
              <div className="inline-block group relative z-20   lg:m-0 m-auto mb-[46px]  py-[22px] px-8 bg-primary  after:absolute after:content-['']  after:h-0 after:top-[50%] after:right-0 after:w-full after:transition-all after:duration-500 after:bg-[#083C2F] after:-z-[1]  after:hover:bottom-[50%] after:hover:top-0 after:hover:h-full">
                <Link
                  href="/"
                  className="text-[17px] text-secondary group-hover:text-white duration-500 font-medium leading-[15px] capitalize"
                >
                  view profile
                </Link>
              </div>
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
          <Service item={3} />
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

      {/* Corbe_Work_Gellary_Start */}
      <section className="bg-accent pb-[120px]">
        <h2 className="text-center pb-[60px]">
          Our Work Speaks <br /> Volumes
        </h2>
        <div className="flex flex-col overflow-hidden pb-[30px]">
          <div className=" flex items-center justify-center gap-[30px] corbe_marque">
            <Image src={g5} alt="Speaks Volumes" />
            <Image src={g2} alt="Speaks Volumes" />
            <Image src={g3} alt="Speaks Volumes" />
            <Image src={g4} alt="Speaks Volumes" />
            <Image src={g5} alt="Speaks Volumes" />
            <Image src={g2} alt="Speaks Volumes" />
          </div>
        </div>
        <div className="flex flex-col overflow-hidden ">
          <div className=" flex items-center justify-center gap-[30px] corbe_marque_right">
            <Image src={g3} alt="Speaks Volumes" />
            <Image src={g4} alt="Speaks Volumes" />
            <Image src={g5} alt="Speaks Volumes" />
            <Image src={g3} alt="Speaks Volumes" />
            <Image src={g1} alt="Speaks Volumes" />
            <Image src={g2} alt="Speaks Volumes" />
          </div>
        </div>
      </section>

      {/* Corbe_Trusted_Start */}
      <Trusted />

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
          <Team />
        </div>
      </section>

      {/* Corbe_Service_Provide */}

      <section className="pb-[120px] bg-accent">
        <div className="container">
          <p className="text-light text-center pb-[30px]">
            Service You will get from Us
          </p>
          <ProvideService />
        </div>
      </section>
    </div>
  );
};

export default HomeThree;
