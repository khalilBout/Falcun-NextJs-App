"use client";
import React, { useState } from "react";
import Image from "next/image";

const GlryBook = ({ book }) => {
  const [mainImg, setMainImg] = useState(book?.bookCover?.url);

  return (
    <div className=" m-2 w-full mdl:w-1/2 max-w-[400px]">
      <div className="max-w-[400px] flex justify-center items-center">
        <Image width={330} height={600} src={mainImg} />
      </div>
      <div className="flex justify-center items-center flex-wrap gap-2 m-2">
        <Image
          src={book.bookCover.url}
          alt=""
          quality={100}
          width={70}
          height={100}
          className="bg-red-200 cursor-pointer"
          onClick={() => {
            setMainImg(book.bookCover.url);
          }}
        />
        {book?.contentBook?.map((elm, ind) => (
          <div key={ind} className="">
            <Image
              src={elm.url}
              alt=""
              quality={60}
              width={70}
              height={100}
              className="bg-red-200 cursor-pointer"
              onClick={() => {
                setMainImg(elm.url);
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GlryBook;
