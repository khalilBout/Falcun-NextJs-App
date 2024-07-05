import React from "react";
import bookLevel1 from "@/public/image/books/book-level-1.png";
import bookLevel2 from "@/public/image/books/book-level-2.png";
import bookLevel3 from "@/public/image/books/book-level-3.png";
import book1 from "@/public/image/books/book1.jpg";
import book2 from "@/public/image/books/book2.jpg";
import book3 from "@/public/image/books/book3.jpg";

import Image from "next/image";
const Books = () => {
  return (
    <section className="screenPadding my-8 overflow-x-hidden">
      <h1 className="my-8 px-8 text-primeColor font-TitleFont text-4xl sml:text-2xl mdl:text-4xl xl:text-7xl font-bold  text-center">
        من كتبنا ...؟
      </h1>

      <div className="flex flex-col divide-y divide-slate-300">
        <div className="  p-8  flex justify-center items-center gap-4 flex-wrap">
          <Image src={bookLevel1} alt="book Level-1" width={160} />
          <Image src={book1} alt="book Level-1" width={160} />
          <Image src={book2} alt="book Level-1" width={160} />
          <Image src={book3} alt="book Level-1" width={160} />
        </div>

        <div className="p-8 flex justify-center items-center gap-4 flex-wrap">
          <Image src={bookLevel2} alt="book Level-1" width={160} />
          <Image src={book3} alt="book Level-1" width={160} />
          <Image src={book1} alt="book Level-1" width={160} />
          <Image src={book2} alt="book Level-1" width={160} />
        </div>
        <div className="p-8 flex justify-center items-center gap-4 flex-wrap">
          <Image src={bookLevel3} alt="book Level-1" width={160} />
          <Image src={book2} alt="book Level-1" width={160} />
          <Image src={book3} alt="book Level-1" width={160} />
          <Image src={book1} alt="book Level-1" width={160} />
        </div>
      </div>
    </section>
  );
};

export default Books;
