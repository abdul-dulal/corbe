import React from "react";

const Review = ({ reviewNumber, reviewTitle }) => {
  return (
    <div className=" text-center">
      <h2 className="xl:text-[60px] lg:text-[45px] lg:leading-[50px] sm:text-[36px] text-[25px] md:leading-[50px] sm:leading-[50px] leading-[35px] text-secondary capitalize font-bold  -tracking-[2] sm:mb-5 mb-1">
        {reviewNumber}
      </h2>
      <span className="lg:text-xl md:text-lg text-base text-secondary leading-[26px] font-bold">
        {reviewTitle}
      </span>
    </div>
  );
};

export default Review;
