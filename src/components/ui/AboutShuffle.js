"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Shuffle from "shufflejs";
import ButtonMore from "./ButtonMore";
import about from "@/public/img/HomeOne/about.png";
import banner2 from "@/public/img/HomeOne/banner2.png";
import banner from "@/public/img/HomeOne/banner.png";
import banner3 from "@/public/img/HomeOne/banner3.png";
import banner4 from "@/public/img/HomeOne/banner4.png";
const AboutShuffle = () => {
  const shuffleRef = useRef(null);
  const containerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState("Web Development");

  const categories = [
    "Graphic Design",
    "UI/UX",
    "Web Development",
    "Logo Design",
    "Brand Identity",
  ];

  const projects = [
    {
      id: 1,
      category: "Web Development",
      image: about,
      title: "Creativity That Tells Your Story",
    },
    {
      id: 2,
      category: "Graphic Design",
      image: banner,
      title: "Visual Impact Design",
    },
    {
      id: 3,
      category: "UI/UX",
      image: banner2,
      title: "User-Centric Experiences",
    },
    {
      id: 4,
      category: "Logo Design",
      image: banner3,
      title: "Brand Identity Creation",
    },
    {
      id: 5,
      category: "Brand Identity",
      image: banner4,
      title: "Complete Brand Strategy",
    },
  ];
  const handleFilter = (category) => {
    setActiveCategory(category);

    shuffleRef.current.filter((element, shuffle) => {
      const isMatching = element.getAttribute("data-category") === category;
      if (!isMatching) return false;

      const matchingItems = shuffle.items.filter(
        (item) => item.element.getAttribute("data-category") === category
      );
      return matchingItems.indexOf(shuffle.getItemByElement(element)) === 0; // Show first match only
    });
  };

  useEffect(() => {
    shuffleRef.current = new Shuffle(containerRef.current, {
      itemSelector: ".shuffle-item",
      sizer: ".my-sizer-element",
    });

    handleFilter(activeCategory);

    return () => shuffleRef.current.destroy();
  }, []);

  return (
    <div>
      <div
        className="flex flex-wrap gap-5 items-center justify-center pb-[60px]"
        data-aos="fade-up"
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleFilter(category)}
            className={`relative px-[30px] py-4 z-[9]  border border-solid border-light rounded-[99px] text-[17px] leading-[15px] font-medium text-light capitalize hover:text-white duration-500  ${
              activeCategory === category
                ? "bg-black text-white"
                : "after:absolute after:content-[''] after:right-0 after:top-0 after:h-full  after:w-0 after:bg-transparent after:-z-[1] after:ease-out after:duration-500 after:hover:w-full after:hover:left-0 after:hover:bg-secondary after:hover:rounded-[99px]"
            } transition-all`}
          >
            {category}
          </button>
        ))}
      </div>

      <div ref={containerRef}>
        {projects.map((project) => (
          <div
            key={project.id}
            className="shuffle-item grid lg:grid-cols-2 xl:gap-[60px] gap-12 items-center sm:p-10 p-4 border border-solid border-light "
            data-category={project.category}
          >
            <div className="relative after:absolute after:content-[''] after:left-0 after:top-0 after:w-full after:h-0 after:bg-[rgba(255,255,255,.3)] after:opacity-100 after:z-[11] after:pointer-events-none after:hover:h-full after:hover:opacity-0 after:hover:transition-all after:hover:duration-[.4s] after:hover:ease-linear">
              <Image
                src={project.image}
                alt={project.title}
                className="w-full"
              />
            </div>
            <div>
              <h3 className="sm:lg:text-[28px] sm:text-2xl  text-xl text-sesm:condary sm:lea leading-7ding-[30px] leading-[40px] font-bold mb-[30px]">
                {project.title}
              </h3>
              <p className="text-light mb-10">
                Centralize all your contracts on a secure platform and improve
                your follow-up with our automatic reminders.
              </p>
              <ul>
                <li className="relative ml-8 mb-4 after:absolute after:-left-8 after:top-1 after:w-4 after:h-4 after:bg-secondary after:rounded-full ">
                  Automated renewal tracking and reminders
                </li>
                <li className="relative ml-8 mb-4 after:absolute after:-left-8 after:top-1 after:w-4 after:h-4 after:bg-secondary after:rounded-full ">
                  Powerful filters and search to access information
                </li>
                <li className="relative ml-8 mb-4 after:absolute after:-left-8 after:top-1 after:w-4 after:h-4 after:bg-secondary after:rounded-full ">
                  Folder structure to stay organized
                </li>
              </ul>
              <ButtonMore buttonTitle=" Learn More" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutShuffle;
