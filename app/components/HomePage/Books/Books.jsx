import React from "react";
import bookLevel1 from "@/public/image/books/book-level-1.webp";
import bookLevel2 from "@/public/image/books/book-level-2.webp";
import bookLevel3 from "@/public/image/books/book-level-3.webp";
import bookLevel4 from "@/public/image/books/book-level-4.webp";
import book1 from "@/public/image/cover/cov1.webp";
import book2 from "@/public/image/cover/cov2.webp";
import book3 from "@/public/image/cover/cov3.webp";
import book4 from "@/public/image/cover/cov4.webp";
import book5 from "@/public/image/cover/cov5.webp";

import fly from "@/public/image/books/fly.webp";
import bg from "@/public/image/books/bg.webp";
import bgT from "@/public/image/books/bgT.webp";
import cloud from "@/public/image/books/cloud2.webp";

import Image from "next/image";
const Books = () => {
  return (
    <section className=" relative screenPadding py-8 overflow-hidden">
      <div className="sml:hidden absolute top-4 left-2 -z-10 max-h-[320px] w-[160px]">
        <Image
          src={cloud}
          quality={100}
          alt="bg"
          width={160}
          height={300}
          className=""
        />
      </div>
      <div className="sml:hidden absolute top-12 left-12 -z-10 max-h-[320px] w-[160px]">
        <Image
          src={cloud}
          quality={100}
          alt="bg"
          width={160}
          height={300}
          className=""
        />
      </div>

      <div className="sml:hidden absolute -top-2 -right-3 -z-10 max-h-[320px] w-[160px]">
        <Image
          src={bgT}
          quality={100}
          alt="bg"
          width={160}
          height={300}
          className=""
        />
      </div>

      <h1 className="my-2 px-4 text-primeColor font-TitleFont text-4xl sml:text-4xl mdl:text-4xl xl:text-7xl font-bold  text-center">
        من كتبنا ...؟
      </h1>

      <div className=" flex flex-col divide-y divide-slate-300">
        <div>
          <h1 className=" my-2 px-8 text-green-700 font-TitleFont text-2xl mdl:text-3xl xl:text-4xl font-bold  text-center">
            مذكراتنا المدرسية{" "}
          </h1>
          <div className=" p-8  flex justify-center items-center gap-2 mdl:gap-4 flex-wrap">
            <Image src={book1} alt="book" width={100} className="" />
            <Image src={book2} alt="book" width={100} />
            <Image src={book3} alt="book" width={100} />
            <Image src={book4} alt="book" width={100} />
            <Image src={book5} alt="book" width={100} />
          </div>
        </div>

        <div className=" relative">
          <h1 className="my-4 px-8 text-green-700 font-TitleFont text-2xl mdl:text-3xl xl:text-4xl font-bold  text-center">
            سلسلة التأسيس
          </h1>
          <div className="p-8 flex justify-center items-center gap-2 mdl:gap-4 flex-wrap">
            <Image src={bookLevel1} alt="book Level-1" width={110} />
            <Image src={bookLevel2} alt="book Level-1" width={110} />
            <Image src={bookLevel3} alt="book Level-1" width={110} />
            <Image src={bookLevel4} alt="book Level-1" width={110} />
          </div>

          <div className="sml:hidden absolute -top-24 -left-4 -z-10 max-h-[320px] w-[160px]">
            <Image
              src={fly}
              quality={100}
              alt="bg"
              width={160}
              height={300}
              className=""
            />
          </div>
        </div>
      </div>
      <div className="sml:hidden absolute -bottom-5 left-0 -z-10 max-h-[260px] w-[430px]">
        <Image
          src={bg}
          quality={100}
          alt="bg"
          width={500}
          height={300}
          className=""
        />
      </div>
    </section>
  );
  +0;
};

export default Books;
