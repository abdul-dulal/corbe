"use client";
import About from "@/src/components/ui/About";
import BreadCumb from "@/src/components/ui/BreadCumb";
import ButtonMore from "@/src/components/ui/ButtonMore";
import Cta from "@/src/components/ui/Cta";
import PlayVideo from "@/src/components/ui/PlayVideo";
import ProvideService from "@/src/components/ui/ProvideService";
import Team from "@/src/components/ui/Team";
import Testimonial from "@/src/components/ui/Testimonial";
import vision from "@/public/img/HomeThree/vision.png";
import Trusted from "@/src/components/ui/Trusted";
import Image from "next/image";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  return (
    <div>
      {/* Corbe_Breadcumb */}
      <BreadCumb currentPage="about us" />

      {/* Corbe_About */}
      <section className=" sm:pt-[360px] pt-[270px] pb-[120px] bg-accent">
        <About />
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
          <h2 className="text-center pt-[120px] pb-[60px]" data-aos="fade-up">
            From Vision to <br /> Reality
          </h2>
          <div className="relative">
            <div className="relative after:absolute after:content-[''] after:left-0 after:top-0 after:w-full after:h-0 after:bg-[rgba(255,255,255,.3)] after:opacity-100 after:z-[11] after:pointer-events-none after:hover:h-full after:hover:opacity-0 after:hover:transition-all after:hover:duration-[.4s] after:hover:ease-linear">
              <Image src={vision} alt="Vision" />
            </div>

            <PlayVideo />
          </div>
        </div>
      </section>

      {/* Corbe_Testimonial_Start */}
      <section className=" bg-accent xl:pt-[350px] md:pt-[300px] sm:pt-[250px] pt-[160px] pb-[120px]  overflow-hidden">
        <div className="container  pb-[350px] relative">
          <div
            className="flex flex-wrap items-center justify-between"
            data-aos="fade-up"
          >
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
          <h2 className="text-center pb-32" data-aos="fade-up">
            The Creative Minds <br /> Behind the Magic
          </h2>
          <Team />
        </div>
      </section>

      <section className="pb-[300px]  bg-accent">
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

export default AboutUs;
