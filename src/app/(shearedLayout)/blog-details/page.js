"use client";
import Image from "next/image";
import React from "react";
import bd from "@/public/img/blog/blog-details.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCheck,
  faComment,
  faFolder,
  faMagnifyingGlass,
  faQuoteRight,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import {
  faFacebookF,
  faInstagram,
  faPinterestP,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Tags from "@/src/components/ui/Tags";
import RecentNews from "@/src/components/ui/RecentNews";
import CategoryList from "@/src/components/ui/CategoryList";
import rn1 from "@/public/img/blog/rn1.png";
import rn2 from "@/public/img/blog/rn2.png";
import rn3 from "@/public/img/blog/rn3.png";
import BreadCumb from "@/src/components/ui/BreadCumb";

const BlogDetails = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <BreadCumb currentPage="Blog-details" />
      <section className="sm:pt-[120px] pt-[70px] pb-[300px] bg-accent">
        <div className="container">
          <div className="grid grid-cols-12 lg:gap-[30px]">
            <div className="lg:col-span-8 col-span-12">
              <div className="relative">
                <Image src={bd} className="w-full" alt="Blog Details" />
                <div className="block m-auto sm:w-[500px] w-[95%] px-10 py-3 bg-white rounded-[15px] relative z-[99] -mt-8">
                  <div className="flex flex-wrap gap-[10px]">
                    <div className="">
                      <FontAwesomeIcon
                        className="mr-[7px] text-primary"
                        icon={faUser}
                      />
                      <span className="text-base text-secondary leading-[26px]">
                        By admin
                      </span>
                    </div>
                    <div className="inline-block">
                      <FontAwesomeIcon
                        className="mr-[7px] text-primary"
                        icon={faFolder}
                      />
                      <span className="text-base text-secondary leading-[26px]">
                        Category
                      </span>
                    </div>
                    <div className="">
                      <FontAwesomeIcon
                        className="mr-[7px] text-primary"
                        icon={faComment}
                      />
                      <span className="text-base text-secondary leading-[26px]">
                        Comments (05)
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className=" inline-block lg:text-[28px] md:text-[22px] text-[19px] leading-[30px] font-bold pb-5  relative after:absolute after:content-[''] after:-bottom-4 after:left-0 after:h-[1px] after:w-full after:bg-secondary mt-[30px] mb-[60px]">
                    Designing a Legacy One the a Project at a Time
                  </h3>
                  <p className="text-light mb-[30px]">
                    Miquam eros justo, posuere loborti viverra lao ullamcorper
                    posuere viverra .Aliquam eros justo, posuere lobortis in
                    non, viverra laoreet augue mattis start fermentum ullamcor
                    viverra laoreet By Admin . Creativity . 29th Februarym 2025
                    . Leave a comment viverra laoreet augue mattis start
                    fermentum
                  </p>

                  <blockquote className="md:p-[60px] p-6 bg-white rounded-[15px]">
                    <h5 className="lg:text-xl md:text-lg xs:text-base text-sm leading-[26px] font-bold mb-[30px]">
                      With a commitment to driving technological evolution, our
                      IT solutions and a desigm services are the cornerstone of
                      your digital progression. We to not a transcend
                      boundariesi enabling businesses
                    </h5>
                    <div className="flex flex-wrap justify-between">
                      <div>
                        <h5 className="lg:text-xl md:text-lg text-base font-bold leading-[26px] mb-[5px]">
                          Stanio lainto
                        </h5>
                        <p>Authore</p>
                      </div>
                      <FontAwesomeIcon
                        className="text-[40px] text-light mt-4"
                        icon={faQuoteRight}
                      />
                    </div>
                  </blockquote>
                  <p className="my-[30px]">
                    Miquam eros justo, posuere loborti viverra lao ullamcorper
                    posuere viverra .Aliquam eros justo, posuere lobortis in
                    non, viverra laoreet augue mattis start fermentum ullamcor
                    viverra laoreet By Admin . Creativity .
                  </p>
                  <h3 className="lg:text-[28px] md:text-[22px] text-[19px] leading-[30px] font-bold  ">
                    Revolutionize Your Business with AI
                  </h3>
                  <p className="my-[30px]">
                    Aliquam eros justo, posuere loborti viverra laoreet matti
                    ullamcorper posuere viverra .Aliquam eros just posuere
                    lobortis, viverra laoreet augue mattis fermentum ullamcorper
                    viverra laoreet Aliquam eros justo, posuere loborti viverra
                    laoreet matti ullamcorper posuere viverra .Aliquam eros
                    justo, posuere
                  </p>
                </div>
                <div>
                  <ul>
                    <li className="mb-[22px]">
                      <FontAwesomeIcon
                        className="inline-block mr-[10px]"
                        icon={faCheck}
                      />
                      Artificial Intelligence is a rapidly advancing field
                      thaent machines capable
                    </li>
                    <li className="mb-[22px]">
                      <FontAwesomeIcon
                        className="inline-block mr-[10px]"
                        icon={faCheck}
                      />
                      It encompasses areas such as machine learning, natural
                      language processing
                    </li>
                    <li className="mb-[22px]">
                      <FontAwesomeIcon
                        className="inline-block mr-[10px]"
                        icon={faCheck}
                      />
                      Natural language processing, computer vision, and robotics
                    </li>
                    <li className="mb-[22px]">
                      <FontAwesomeIcon
                        className="inline-block mr-[10px]"
                        icon={faCheck}
                      />
                      AI Transforming the Way We Live and Work Discover the
                      Magic of AI
                    </li>
                  </ul>
                  <p className="mt-2 mb-[30px]">
                    Aliquam eros justo, posuere loborti viverra laoreet matti
                    ullamcorper posuere viverra .Aliquam eros justoposuere
                    lobortis non, viverra laoreet augue mattis fermentum
                    ullamcorper viverra laore
                  </p>
                </div>
                <div className="py-[27px] px-[30px] bg-transparent border border-solid border-[#083C2F] rounded-[15px] mb-[34px]">
                  <div className="flex flex-wrap items-center justify-between ">
                    <div className="flex items-center gap-[5px]">
                      <span className="">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.99867 12.6686C7.86625 12.6694 7.73661 12.6307 7.62626 12.5575C7.51591 12.4843 7.42987 12.3799 7.37909 12.2576C7.32831 12.1353 7.3151 12.0007 7.34115 11.8709C7.3672 11.741 7.43132 11.6219 7.52534 11.5286L11.0587 8.00197L7.52534 4.4753C7.41612 4.34777 7.35905 4.18372 7.36553 4.01594C7.37201 3.84815 7.44156 3.68899 7.56029 3.57026C7.67902 3.45153 7.83818 3.38198 8.00597 3.3755C8.17375 3.36902 8.3378 3.42609 8.46534 3.5353L12.4653 7.53531C12.5895 7.66021 12.6592 7.82918 12.6592 8.0053C12.6592 8.18143 12.5895 8.3504 12.4653 8.4753L8.46534 12.4753C8.34116 12.5985 8.17356 12.6679 7.99867 12.6686Z"
                            fill="#083C2F"
                          />
                          <path
                            d="M3.99867 12.6681C3.86625 12.6689 3.73661 12.6302 3.62626 12.557C3.51591 12.4838 3.42987 12.3794 3.37909 12.2571C3.32831 12.1348 3.3151 12.0001 3.34115 11.8703C3.3672 11.7405 3.43132 11.6213 3.52534 11.5281L7.05867 8.00143L3.52534 4.47476C3.3998 4.34922 3.32927 4.17896 3.32927 4.00143C3.32927 3.82389 3.3998 3.65363 3.52534 3.52809C3.65087 3.40256 3.82113 3.33203 3.99867 3.33203C4.1762 3.33203 4.34647 3.40256 4.472 3.52809L8.472 7.52809C8.59617 7.653 8.66586 7.82197 8.66586 7.99809C8.66586 8.17422 8.59617 8.34318 8.472 8.46809L4.472 12.4681C4.41026 12.5311 4.33663 12.5812 4.25538 12.6155C4.17413 12.6499 4.08687 12.6677 3.99867 12.6681Z"
                            fill="#083C2F"
                          />
                        </svg>
                      </span>
                      <span className=" ">Html , Css ,JavaScript , React</span>
                    </div>
                    <ul className="my-5 flex gap-3">
                      <li className="">
                        <Link
                          href="https://www.facebook.com/"
                          className="flex justify-center items-center group h-10 w-10 bg-transparent hover:bg-[#083C2F]  border border-solid border-secondary border-opacity-80 rounded-[5px] duration-700 ease-out transition-all group"
                        >
                          <FontAwesomeIcon
                            className="group-hover:text-white duration-700"
                            icon={faFacebookF}
                          />
                        </Link>
                      </li>

                      <li className="">
                        <Link
                          href="https://x.com/i/flow/login?mx=2"
                          className="flex justify-center items-center group h-10 w-10 bg-transparent hover:bg-[#083C2F]  border border-solid border-secondary border-opacity-80 rounded-[5px] duration-700 ease-out transition-all group"
                        >
                          <FontAwesomeIcon
                            className="group-hover:text-white duration-700"
                            icon={faXTwitter}
                          />
                        </Link>
                      </li>
                      <li className="">
                        <Link
                          href="https://www.instagram.com/"
                          className="flex justify-center items-center group h-10 w-10 bg-transparent hover:bg-[#083C2F]  border border-solid border-secondary border-opacity-80 rounded-[5px] duration-700 ease-out transition-all group"
                        >
                          <FontAwesomeIcon
                            className="group-hover:text-white duration-700"
                            icon={faInstagram}
                          />
                        </Link>
                      </li>
                      <li className="">
                        <Link
                          href="https://pinterest.com"
                          className="flex justify-center items-center group h-10 w-10 bg-transparent hover:bg-[#083C2F]  border border-solid border-secondary border-opacity-80 rounded-[5px] duration-700 ease-out transition-all group"
                        >
                          <FontAwesomeIcon
                            icon={faPinterestP}
                            className="group-hover:text-white duration-700"
                          />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h5 className="lg:text-xl md:text-lg text-base font-bold leading-[26px] mb-[5px]">
                    Stanio lainto
                  </h5>
                  <p className="text-light ">23 January</p>
                  <p className="text-light my-5">
                    ished fact that a reader will be distrol acted bioii
                    the.ished fact that a reader <br /> will be distrolr acted
                    laoreet Aliquam reader will be distrol acted ished fact{" "}
                    <br /> that a reader will be distrol ds shem acted bioii
                    the.ished fact that a reader <br /> will Design done a
                    facatory
                  </p>
                  <button className="py-3 px-[30px] text-[17px] leading-[15px] font-medium border border-light  rounded-[15px]">
                    Reply
                  </button>
                  <h4 className=" my-5">Leave a comment</h4>
                  <p className="mb-5">
                    pAliquam eros justo, posuere loborti viverra laoreet matti
                    ullamcorper <br /> posuere viverra .Aliquam eros justo,
                    posuere lobortis non, viverra laoreet <br /> augue mattis
                    fermentum
                  </p>
                  <form onSubmit={handleSubmit}>
                    <div className="grid sm:grid-cols-2 gap-[30px] mb-[30px]">
                      <input
                        type="text"
                        placeholder="Your Name"
                        className=" w-full h-[66px] bg-transparent pl-5 border border-light rounded-[15px] outline-none focus:outline-none  placeholder:text-secondary"
                      />
                      <input
                        type="email"
                        placeholder="Your Email"
                        className=" w-full h-[66px] bg-transparent pl-5 border border-light rounded-[15px] outline-none focus:outline-none  placeholder:text-secondary"
                      />
                    </div>
                    <textarea
                      placeholder="Write your messege"
                      className="w-full h-[201px] bg-transparent border border-light rounded-[15px] pl-5 pt-4 placeholder:text-secondary"
                    ></textarea>
                    <button
                      type="submit"
                      className="py-[22px] px-6 bg-primary rounded-[15px] text-[17px] font-medium my-10 "
                    >
                      Submit Now
                      <FontAwesomeIcon
                        className="inline-block ml-2"
                        icon={faArrowRight}
                      />
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 col-span-12">
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

export default BlogDetails;
