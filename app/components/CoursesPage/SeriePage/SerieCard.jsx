import Link from "next/link";
import React from "react";
import Image from "next/image";

const SerieCard = ({ item }) => {
  return (
    <Link
      href={`/courses/series/${item._id}`}
      className="m-1 max-w-[220px] bg-slate-100 rounded-xl p-2 "
    >
      <div className=" w-[220] bg-slate-900 rounded-xl">
        <Image width={220} height={380} src={item.bookCover.url} />
      </div>

      <div className="p-2 w-full font-bold">
        <div className="w-full">
          <h2 className="py-1 text-center text-[16px] font-TitleFont text-gray-900">
            {item.title}
          </h2>

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

export default SerieCard;
