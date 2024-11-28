"use client";
import React, { useState } from "react";
import Image from "next/image";

const GlrySerie = ({ Serie }) => {
  const [mainImg, setMainImg] = useState(Serie?.bookCover);

  return (
    <div className=" m-2 w-full mdl:w-1/2 max-w-[400px]">
      <div className="max-w-[400px] flex justify-center items-center">
        <Image width={330} height={600} src={mainImg} />
      </div>
      <div className="flex justify-center items-center flex-wrap gap-2 m-2">
        <Image
          src={Serie.bookCover}
          alt="image main"
          quality={100}
          width={70}
          height={100}
          className="bg-red-200 cursor-pointer"
          onClick={() => {
            setMainImg(Serie.bookCover);
          }}
        />
        {Serie?.contentBook?.map((elm, ind) => (
          <div key={ind} className="">
            <Image
              src={elm}
              alt={elm}
              quality={60}
              width={70}
              height={100}
              className="bg-red-200 cursor-pointer"
              onClick={() => {
                setMainImg(elm);
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GlrySerie;
