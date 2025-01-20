"use client";
import BreadCumb from "@/src/components/ui/BreadCumb";
import CategoryList from "@/src/components/ui/CategoryList";
import RecentNews from "@/src/components/ui/RecentNews";
import {
  faArrowRight,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import rn1 from "@/public/img/blog/rn1.png";
import rn2 from "@/public/img/blog/rn2.png";
import rn3 from "@/public/img/blog/rn3.png";
import Tags from "@/src/components/ui/Tags";

const Blog = () => {
  const blogs = [
    {
      title: "A mindfulness companion that offers guided",
      img: "/img/blog/blog1.png",
    },
    {
      title: "Tools for tracking mindfulness journey",
      img: "/img/blog/blog2.png",
    },
    {
      title: "A clean layout with large text for readability",
      img: "/img/blog/blog3.png",
    },
    {
      title: "Encourage subscription to a newsletter for daily ",
      img: "/img/blog/blog4.png",
    },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <BreadCumb currentPage="Blog" />
      <section className="bg-accent pt-[120px] pb-[330px]">
        <div className="container">
          <div className="grid grid-cols-12 md:gap-[30px]">
            <div className="md:col-span-8 col-span-12">
              <div>
                {blogs.map((blog) => {
                  return (
                    <div key={blog.title}>
                      <Image
                        src={blog.img}
                        width={850}
                        height={757}
                        alt={blog.title}
                      />
                      <p className="text-light my-4">January 19, 2025</p>
                      <Link
                        href="/blog-details"
                        className="lg:text-[28px] md:text-[22px] text-[19px] leading-[30px] font-bold pb-5  relative after:absolute after:content-[''] after:bottom-0 after:left-0 after:h-[1px] after:w-full after:bg-secondary "
                      >
                        {blog.title}
                      </Link>
                      <p className="text-light mb-8 mt-10">
                        Miquam eros justo, posuere loborti viverra lao
                        ullamcorper posuere viverra .Aliquam eros justo, posuere
                        lobortis in non, viverra laoreet augue mattis start
                        fermentum ullamcor viverra laoreet By Admin . Creativity
                        . 29th Februarym 2022 . Leave a comment viverra laoreet
                        augue mattis start fermentum
                      </p>
                      <button className=" group relative z-20  mb-[30px] py-[22px] px-8 border border-solid border-[#083C2F] bg-transparent  after:absolute after:content-['']  after:h-0 after:top-[50%] after:right-0 after:w-full after:transition-all after:duration-500 after:bg-[#083C2F] after:-z-[1]  after:hover:bottom-[50%] after:hover:top-0 after:hover:h-full">
                        <Link
                          href="/"
                          className="text-[17px] text-secondary group-hover:text-white duration-500 font-medium leading-[15px] capitalize"
                        >
                          view profile
                        </Link>
                      </button>
                    </div>
                  );
                })}
                <div className="flex gap-5 justify-center items-center">
                  <button className="w-[67px] h-[67px] bg-white rounded-full block text-center">
                    01
                  </button>
                  <button className="w-[67px] h-[67px] bg-[#E0E0E0] duration-500 hover:bg-white rounded-full block text-center">
                    02
                  </button>
                  <button className="w-[67px] h-[67px] bg-[#E0E0E0] duration-500 hover:bg-white rounded-full block text-center">
                    03
                  </button>
                  <button className="w-[67px] h-[67px] bg-[#E0E0E0] duration-500 hover:bg-white  rounded-full block text-center">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </div>
              </div>
            </div>
            <div className="md:col-span-4 col-span-12 md:mt-0 mt-20">
              <div className="p-[30px] bg-white border border-solid border-[#083C2F] rounded-[15px]">
                <h4 className="relative after:absolute after:content-[''] after:-bottom-[10px] after:left-0 after:w-[84px] after:h-[2px] after:bg-[#083C2F] mb-[30px]">
                  Search
                </h4>
                <form onSubmit={handleSubmit}>
                  <div className="relative ">
                    <input
                      type="text"
                      placeholder="Enter search"
                      className="w-full h-[60px] pl-8 rounded-[15px] border-none outline-light focus:none placeholder:text-base placeholder:capitalize placeholder:text-[#929fa2] placeholder:font-normal"
                    />
                    <button className="absolute -right-1 bottom-0 text-white w-[60px] h-[60px] bg-[#083C2F] rounded-tr-[15px] rounded-br-[15px]">
                      <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                  </div>
                </form>
              </div>
              <div className="p-[30px] bg-white border border-solid border-[#083C2F] rounded-[15px] mt-12">
                <h4 className="relative after:absolute after:content-[''] after:-bottom-[10px] after:left-0 after:w-[84px] after:h-[2px] after:bg-[#083C2F] mb-[30px]">
                  Category
                </h4>
                <ul>
                  <CategoryList category="Blog(1)" />
                  <CategoryList category="Graphics(8)" />
                  <CategoryList category="Featured(6)" />
                  <CategoryList category="Business(8)" />
                  <CategoryList category="Mordern(8)" />
                  <CategoryList category="News(4)" />
                  <CategoryList category="kids Toys(3)" />
                  <CategoryList category="Ideas(7)" />
                  <CategoryList category="Mindest(9)" />
                  <CategoryList category="Spotlight(4)" />
                  <CategoryList category="Post Types(6)" />
                  <CategoryList category="Top Rated(2)" />
                  <CategoryList category="Treands(5)" />
                  <CategoryList category="Style(9)" />
                  <CategoryList category="Techonology(6)" />
                </ul>
              </div>
              <div className="p-[30px] bg-white border border-solid border-[#083C2F] rounded-[15px] mt-20 mb-[60px]">
                <h4 className="relative after:absolute after:content-[''] after:-bottom-[10px] after:left-0 after:w-[84px] after:h-[2px] after:bg-[#083C2F] mb-[30px]">
                  Recent News
                </h4>
                <RecentNews
                  postImg={rn1}
                  postTitle="Designing My Story One Project at a Time"
                />
                <RecentNews
                  postImg={rn2}
                  postTitle="Designing My Story One Project at a Time"
                />
                <RecentNews
                  postImg={rn3}
                  postTitle="Designing My Story One Project at a Time"
                />
              </div>
              <div className="p-[30px] bg-white border border-solid border-[#083C2F] rounded-[15px] mt-20 mb-[60px]">
                <h4 className="relative after:absolute after:content-[''] after:-bottom-[10px] after:left-0 after:w-[84px] after:h-[2px] after:bg-[#083C2F] mb-[30px]">
                  Tags
                </h4>
                <Tags />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
