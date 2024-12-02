import Link from "next/link";
import React from "react";
import Image from "next/image";

const BookCard = ({ item }) => {
  return (
    <Link
      href={`/courses/books/${item._id}`}
      className="m-1 max-w-[220px] bg-slate-100 rounded-xl p-2 "
    >
      <div className=" w-[220] bg-slate-900 rounded-xl">
        <Image width={220} height={380} src={item.bookCover} />
      </div>

      <div className="p-2 w-full font-bold">
        <div>
          <h2 className="py-1 text-[16px] font-TitleFont text-gray-900">
            {item.title}
          </h2>
          <div className="flex justify-between items-center ">
            <div className=" text-[14px] font-TitleFont  text-emerald-900">
              {item.season === "season-1" ? (
                <h1>الفصل الأول</h1>
              ) : (
                <h1>الفصل الثاني</h1>
              )}
            </div>
            <h2 className="px-4 text-[12px] bg-blue-200 rounded-md font-TitleFont text-emerald-700">
              {item.levelsInf.levelTitle}
            </h2>
          </div>

          <h2 className=" px-4 [14px] font-TitleFont  text-emerald-700">
            <span className="">عدد الصفحات : </span>
            <span className="text-red-600">{item.numberOfPages} </span>
          </h2>

          <h2 className=" px-4 [14px] font-TitleFont  text-emerald-900">
            <span className="">السعر : </span>
            <span className="text-red-600">{item.price} دينار</span>
          </h2>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
