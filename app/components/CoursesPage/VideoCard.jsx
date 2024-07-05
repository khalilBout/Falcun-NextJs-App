import Link from "next/link";
import React from "react";

const VideoCard = ({ item }) => {
  return (
    <div className="m-4 max-w-[280px]">
      <video
        src={item.url}
        alt={item.title}
        className="w-full h-[280px] bg-slate-950"
      />
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
