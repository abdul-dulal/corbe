import Image from "next/image";
import Link from "next/link";
import React from "react";
import t1 from "@/public/img/HomeThree/team.png";
const Team = () => {
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
  );
};

export default Team;
