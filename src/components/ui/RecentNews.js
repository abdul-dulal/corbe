import React from "react";
import rn1 from "@/public/img/blog/rn1.png";
import Image from "next/image";
import Link from "next/link";
const RecentNews = ({ postImg, postTitle }) => {
  return (
    <div className="xl:flex block  gap-5 items-center mb-10">
      <Image src={postImg} className="inline-block" alt="Recent News" />
      <div className="">
        <span className="text-[14px] leading-5 text-secondary">
          Jan 12,2024
        </span>
        <p>
          <Link href="#">{postTitle}</Link>
        </p>
      </div>
    </div>
  );
};

export default RecentNews;
