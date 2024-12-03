import Image from "next/image";
import React from "react";

const BlogCard = ({ data }) => {
  const { id, title, mainImg, description } = data;
  return (
    <div className=" w-[280px] h-[380px] bg-gray/60 border border-gray shadow-md hover:scale-105 duration-200 transition-all cursor-pointer overflow-hidden">
      {/* image div  */}
      <div className="h-[52%] w-full">
        <Image
          src={mainImg}
          alt=""
          quality={100}
          fill
          className="p-2 w-full h-full object-cover object-center"
        />
      </div>
      {/* info dev  */}
      <div className="">
        <h1 className="text-[16px] font-fontTitle w-[80%] px-4 pt-2 ">
          {title}
        </h1>
        <h3 className=" font-fontBody text-[14px] pr-8 pl-2">
          <span>{description.slice(0, 120)}...</span>
        </h3>
        <a
          href="/"
          className=" bg-lightBlue py-1 px-2 rounded-lg text-[15px] font-fontTitle float-left mx-4"
        >
          إقراء المزيد
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
