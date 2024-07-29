"use client";
import Link from "next/link";
import React from "react";
// import PlyerVideo from "@/app/components/CoursesPage/VideoPage/PlyerVideo";
import Image from "next/image";
import { FaCirclePlay } from "react-icons/fa6";

const VideoCard = ({ item }) => {
  // const urlVideo = item?.urlVideo;
  return (
    <Link
      className="m-1 max-w-[220px] bg-slate-100 rounded-xl p-2 "
      href={`/courses/videos/${item._id}`}
    >
      <div className=" relative w-[215] h-[280px] rounded-xl">
        <Image
          src={item.videoCover}
          alt={item.title}
          width={210}
          height={280}
        />
        <div className="w-full h-full absolute top-0 right-0 left-0 bg-black/20 z-10 flex justify-center items-center">
          <FaCirclePlay size={30} />
        </div>
      </div>

      <div className="p-2 w-full font-bold">
        {/* text info  */}
        <div>
          <h2 className="py-1 text-[16px] font-TitleFont text-gray-900">
            {item.title}
          </h2>
          <div className="flex justify-around items-center ">
            {item.season && (
              <div className=" text-[15px] font-TitleFont text-gray-700">
                {item.season === "season-1" ? (
                  <h1>الفصل الأول</h1>
                ) : (
                  <h1>الفصل الثاني</h1>
                )}
              </div>
            )}
            {item.levelsInf && (
              <h2 className="px-4 text-[14px]  font-TitleFont text-gray-700">
                {item.levelsInf.levelTitle}
              </h2>
            )}
          </div>

          {item.TheClass && (
            <h2 className=" px-4 [14px] font-TitleFont text-blue-900">
              {item.TheClass}
            </h2>
          )}
          {/* {item.unitList &&
            item.unitList.map((elm, ind) => (
              <h2 className=" px-2 py-1 text-[12px] font-TitleFont text-black bg-red-100 rounded-md m-1 ">
                {elm}
              </h2>
            ))} */}
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
