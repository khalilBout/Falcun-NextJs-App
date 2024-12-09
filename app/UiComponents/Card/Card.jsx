"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const Card = ({ data }) => {
  const { _id, title, mainImg } = data;

  return (
    <div className=" hover:scale-105 cursor-pointer duration-200 transition-all relative border border-gray shadow-md w-[110px] h-[180px] mdl:w-[160px] mdl:h-[300px] ">
      <Link href={`/product/${_id}`}>
        <Image
          src={mainImg}
          quality={100}
          alt={title}
          width={200}
          height={320}
          className="w-auto h-full object-cover object-center overflow-hidden "
        />
      </Link>
      <div className=" absolute bottom-0 left-0 right-0 bg-black/40 flex flex-col justify-center items-center gap-1 mdl:gap-2 py-1 mdl:py-2">
        <h2 className="w-full font-fontTitle text-[14px] mdl:text-[16px] font-semibold text-center text-white">
          {title}
        </h2>
        <Link
          href="https://wa.me/966544525016"
          className="w-[80%] py-1 flex justify-center items-center gap-2 mdl:gap-4 rounded-full bg-green-200/20 "
        >
          <h4 className="text-[12px] mdl:text-[13px] font-fontBody font-semibold text-white">
            أطلب الأن
          </h4>
          <FaWhatsapp size={18} className="text-white cursor-pointer" />
        </Link>
      </div>
    </div>
  );
};

export default Card;
