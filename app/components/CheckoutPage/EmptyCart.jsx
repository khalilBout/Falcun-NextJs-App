"use client";
import React from "react";
import Image from "next/image";
import emptyCart from "@/public/image/empty.png";
import { motion } from "framer-motion";
import Link from "next/link";

const EmptyCard = () => {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col mdl:flex-row justify-center items-center gap-4 pb-20 mt-4"
    >
      <div>
        <Image
          width={380}
          height={280}
          className=" rounded-lg p-4 mx-auto"
          src={emptyCart}
          alt=""
        />
      </div>
      <div className="max-w-[500px] p-4 py-8 bg-white flex gap-4 flex-col items-center rounded-md shadow-lg">
        <h1 className="font-titleFont text-2xl font-bold uppercase">
          السلة فارغة .
        </h1>

        <Link href="/courses">
          <button className="bg-primeColor rounded-md cursor-pointer hover:bg-black active:bg-gray-900 px-8 py-2 font-TitleFont font-semibold text-lg text-gray-200 hover:text-white duration-300">
            إطلع على مكذكراتنا التعليمية أو سلاسل التأسيس
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default EmptyCard;
