import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogCard = ({ data }) => {
  const { _id, title, mainImg, description } = data;
  return (
    <div
      // href={`/blog/${id}`}
      className="w-[280px] h-[380px] bg-gray/60 border border-gray shadow-md hover:scale-105 duration-200 transition-all cursor-pointer overflow-hidden"
    >
      {/* image div  */}
      <div className="h-[52%] w-full">
        <Image
          src={mainImg}
          alt={title}
          quality={100}
          width={280}
          height={180}
          className="p-2 w-full h-full object-cover object-center"
        />
      </div>
      {/* info dev  */}
      <div className="">
        <h1 className="text-[14px] mdl:text-[16px] font-bold font-fontTitle px-4 pt-2 ">
          {title}
        </h1>
        <h3 className=" font-fontBody text-[12px] mdl:text-[12px] pr-8 pl-2">
          <span>{description.slice(0, 120)}...</span>
        </h3>
        <Link
          href={`/blog/${_id}`}
          className=" bg-lightBlue my-2  py-1 px-2 rounded-lg text-[14px] mdl:text-[15px] font-fontTitle float-left mx-4"
        >
          إقراء المزيد
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
