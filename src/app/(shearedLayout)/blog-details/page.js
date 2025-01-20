import Image from "next/image";
import React from "react";
import bd from "@/public/img/blog/blog-details.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faComment,
  faFolder,
  faQuoteRight,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
const BlogDetails = () => {
  return (
    <section className="pt-[120px] pb-[300px] bg-accent">
      <div className="container">
        <div className="grid grid-cols-12">
          <div className="col-span-8">
            <div className="relative">
              <Image src={bd} alt="Blog Details" />
              <div className="block m-auto w-[500px] px-10 py-3 bg-white rounded-[15px] relative z-[99] -mt-8">
                <div className="flex gap-[10px]">
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
                <h3 className="lg:text-[28px] md:text-[22px] text-[19px] leading-[30px] font-bold pb-5  relative after:absolute after:content-[''] after:-bottom-4 after:left-0 after:h-[1px] after:w-full after:bg-secondary mt-[30px] mb-[60px]">
                  Designing a Legacy One the a Project at a Time
                </h3>
                <p className="text-light mb-[30px]">
                  Miquam eros justo, posuere loborti viverra lao ullamcorper
                  posuere viverra .Aliquam eros justo, posuere lobortis in non,
                  viverra laoreet augue mattis start fermentum ullamcor viverra
                  laoreet By Admin . Creativity . 29th Februarym 2025 . Leave a
                  comment viverra laoreet augue mattis start fermentum{" "}
                </p>

                <blockquote className="p-[60px] bg-white rounded-[15px]">
                  <h5 className="text-xl leading-[26px] font-bold mb-[30px]">
                    With a commitment to driving technological evolution, our IT
                    solutions and a desigm services are the cornerstone of your
                    digital progression. We to not a transcend boundariesi
                    enabling businesses
                  </h5>
                  <div className="flex justify-between">
                    <div>
                      <h5 className="text-xl font-bold leading-[26px] mb-[5px]">
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
                  posuere viverra .Aliquam eros justo, posuere lobortis in non,
                  viverra laoreet augue mattis start fermentum ullamcor viverra
                  laoreet By Admin . Creativity .
                </p>
                <h3 className="lg:text-[28px] md:text-[22px] text-[19px] leading-[30px] font-bold  ">
                  Revolutionize Your Business with AI
                </h3>
                <p className="my-[30px]">
                  Aliquam eros justo, posuere loborti viverra laoreet matti
                  ullamcorper posuere viverra .Aliquam eros just posuere
                  lobortis, viverra laoreet augue mattis fermentum ullamcorper
                  viverra laoreet Aliquam eros justo, posuere loborti viverra
                  laoreet matti ullamcorper posuere viverra .Aliquam eros justo,
                  posuere
                </p>
              </div>
              <div>
                <ul>
                  <li className="mb-[22px]">
                    <FontAwesomeIcon
                      className="inline-block mr-[10px]"
                      icon={faCheck}
                    />
                    Artificial Intelligence is a rapidly advancing field thaent
                    machines capable
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
                    AI Transforming the Way We Live and Work Discover the Magic
                    of AI
                  </li>
                </ul>
                <p className="mt-2 mb-[30px]">
                  Aliquam eros justo, posuere loborti viverra laoreet matti
                  ullamcorper posuere viverra .Aliquam eros justoposuere
                  lobortis non, viverra laoreet augue mattis fermentum
                  ullamcorper viverra laore
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-4"></div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
