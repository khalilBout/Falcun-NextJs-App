import Link from "next/link";
import React from "react";
import { TbPlayerPlayFilled } from "react-icons/tb";

const VideoCard = ({ item }) => {
  return (
    <div className="m-2 max-w-[240px] bg-slate-200 rounded-xl p-4 ">
      <div className="relative h-[240px]">
        <video
          src={item.url}
          alt={item.title}
          className=" rounded-md w-full h-full bg-slate-700"
        />
        <div className="w-12 h-12 rounded-full absolute top-16 left-24 bg-gray-800 flex justify-center items-center">
          <TbPlayerPlayFilled size={16} />
        </div>
      </div>
      {/* <video className="" autoPlay  loop>
          <source src={vid} type="video/mp4" />
        </video> */}
      <Link href="/" className="">
        <h2 className="text-[18px] font-TitleFont text-gray-700">
          {item.title}
        </h2>
        <h2 className="px-4 text-[16px] font-TitleFont text-gray-500">
          {item.level}
        </h2>
        <h2 className="px-4 [16px] font-TitleFont text-gray-500">
          {item.classVideo}
        </h2>
      </Link>
    </div>
  );
};

export default VideoCard;
