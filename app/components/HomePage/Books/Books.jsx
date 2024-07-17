import React from "react";
import bookLevel1 from "@/public/image/books/book-level-1.png";
import bookLevel2 from "@/public/image/books/book-level-2.png";
import bookLevel3 from "@/public/image/books/book-level-3.png";
import bookLevel4 from "@/public/image/books/book-level-3.png";
import book1 from "@/public/image/cover/cov1.png";
import book2 from "@/public/image/cover/cov2.png";
import book3 from "@/public/image/cover/cov3.png";
import book4 from "@/public/image/cover/cov4.png";
import book5 from "@/public/image/cover/cov5.png";

import Image from "next/image";
const Books = () => {
  return (
    <section className="screenPadding my-8 overflow-x-hidden">
      <h1 className="my-4 px-8 text-primeColor font-TitleFont text-4xl sml:text-2xl mdl:text-4xl xl:text-7xl font-bold  text-center">
        من كتبنا ...؟
      </h1>

      <div className="flex flex-col divide-y divide-slate-300">
        <div className="  p-8  flex justify-center items-center gap-4 flex-wrap">
          <Image src={book1} alt="book" width={160} />
          <Image src={book2} alt="book" width={160} />
          <Image src={book3} alt="book" width={160} />
          <Image src={book4} alt="book" width={160} />
          <Image src={book5} alt="book" width={160} />
        </div>

        <div className="p-8 flex justify-center items-center gap-4 flex-wrap">
          <Image src={bookLevel4} alt="book Level-1" width={160} />
          <Image src={bookLevel2} alt="book Level-1" width={160} />
          <Image src={bookLevel1} alt="book Level-1" width={160} />
          <Image src={bookLevel3} alt="book Level-1" width={160} />
        </div>
      </div>
    </section>
  );
  +0;
};

export default Books;
