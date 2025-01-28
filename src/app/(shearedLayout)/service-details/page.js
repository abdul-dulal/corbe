import BreadCumb from "@/src/components/ui/BreadCumb";
import React from "react";
import smile from "@/public/img/HomeTwo/smile.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import ServiceList from "@/src/components/ui/ServiceList";
import Link from "next/link";
const ServiceDetails = () => {
  return (
    <div>
      <BreadCumb currentPage="service details" />
      <section className="bg-accent sm:pt-[120px] pt-[70px] pb-[300px]">
        <div className="container">
          <div className="grid grid-cols-12 md:gap-[30px]">
            <div className=" md:col-span-8 col-span-12">
              <div className="relative">
                <Image src={smile} alt="Smile" />
                <div className="absolute right-10 -bottom-12 flex items-center justify-center t sm:w-[100px] w-20 sm:h-[100px] h-20 bg-[#083C2F] rounded-[5px]">
                  <svg
                    width="45"
                    height="45"
                    viewBox="0 0 45 45"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_19_1299)">
                      <path
                        d="M44.8444 42.9406L30.9605 1.07355C30.7408 0.410623 30.1209 -0.00647473 29.458 0.000417725C29.4561 0.000417725 29.4542 0 29.4525 0H29.4473C29.4463 0 29.4452 0 29.4442 0H15.53C14.855 0 14.2555 0.432554 14.0431 1.07334L0.157735 42.9404C-0.000582211 43.4181 0.0800386 43.9425 0.374534 44.3504C0.66903 44.7583 1.14148 45 1.64463 45H15.5691C16.2441 45 16.8435 44.5674 17.0559 43.9264L22.501 27.5057L27.9464 43.9264C28.1591 44.5672 28.7583 45 29.4333 45H43.3573C43.8605 45 44.3329 44.7583 44.6274 44.3504C44.9221 43.9425 45.0028 43.4181 44.8444 42.9406ZM14.4381 41.8671H3.8145L16.6608 3.13293H27.2825L14.4381 41.8671ZM30.5643 41.8671L24.1516 22.5287L29.463 6.51128L41.1879 41.8669H30.5643V41.8671Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_19_1299">
                        <rect width="45" height="45" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="mt-[60px]">
                <h4>
                  Unleashing creativity <br /> amplifying impact
                </h4>
                <p className="text-light my-[30px]">
                  Distracted by the readable content of a page when looking at
                  its layout io The point of using Lorem Ipsum is that it has a
                  more-iso or-less normal distribution of letters, as opposed to
                  using It is is a long established to th fact that anni reader
                  will be distracted by the readable content
                </p>
                <div className="grid md:grid-cols-2">
                  <div>
                    <ul>
                      <ServiceList title="An intelligent travel" />
                      <ServiceList title=" A virtual companion" />
                      <ServiceList title=" A virtual career coach" />
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <ServiceList title="An intelligent travel" />
                      <ServiceList title=" A virtual companion" />
                      <ServiceList title=" A virtual career coach" />
                    </ul>
                  </div>
                </div>
                <p className="my-[30px] text-light">
                  Distracted by the readable content of a page when looking at
                  its layout io The point of using Lorem Ipsum is that it has a
                  more- or-less normal distribution of letters
                </p>
                <p className="text-light">
                  Distracted by the readable content of a page when loDistracted
                  by the readable content of a page when looking at its layout
                  io The point of using Lorem Ipsum is that it has a more-iso
                  or-less normal distribution of letters, as opposed to using It
                  is is a long established to th fact that anni reader will be
                  distracted by the readable contentDistracted by the readable
                  content of a page when looking at its layout io The point of
                  using Lorem Ipsum is that it has a more-iso or-less normal
                  distribution of letters, as opposed to using It is is a long
                  established to th fact that anni reader will be distracted by
                  the readable contento
                </p>
              </div>
            </div>
            <div className=" md:col-span-4 col-span-12 md:mt-0 mt-10">
              <div className="py-[30px] pl-[30px] border border-solid border-secondary rounded-[15px]">
                <h4 className="relative after:absolute after:content-[''] after:-bottom-[15px] after:left-0 after:bg-secondary after:w-[70px] after:h-[3px] mb-[34px]">
                  Popular Services
                </h4>
                <ul>
                  <li className="pb-[33px] md:text-xl sm:text-lg text-[15px] text-light font-bold leading-[26px]">
                    <Link href="/service-details">Layout Design</Link>
                  </li>
                  <li className="pb-[33px] md:text-xl sm:text-lg text-[15px] text-light font-bold leading-[26px]">
                    <Link href="/service-details">Mobile Design</Link>
                  </li>
                  <li className="pb-[33px] md:text-xl sm:text-lg text-[15px] text-light font-bold leading-[26px]">
                    <Link href="/service-details">Web Design</Link>
                  </li>
                  <li className="pb-[33px] md:text-xl sm:text-lg text-[15px] text-light font-bold leading-[26px]">
                    <Link href="/service-details">Seo Expert</Link>
                  </li>
                  <li className="pb-[33px] md:text-xl sm:text-lg text-[15px] text-light font-bold leading-[26px]">
                    <Link href="/service-details">Graphic Design</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetails;
