import React from "react";
import { CldVideoPlayer } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";

import { FcLike } from "react-icons/fc";
import { FaComment } from "react-icons/fa";

const VideoDetails = ({ video }) => {
  return (
    <div className="flex ">
      {/* video Player  */}
      <div className="min-w-[420px] min-h-[580px] ">
        <CldVideoPlayer
          width="220"
          height="380"
          src={video.urlVideo.public_id}
        />
      </div>
      {/* video Info   */}
      <div className="">
        {/* text info  */}
        <div>
          <h2 className="py-1 text-[16px] font-TitleFont text-gray-900">
            {video.title}
          </h2>
          <div className="flex justify-around items-center ">
            <div className=" text-[15px] font-TitleFont text-gray-700">
              {video.season === "season-1" ? (
                <h1>الفصل الأول</h1>
              ) : (
                <h1>الفصل الثاني</h1>
              )}
            </div>
            <h2 className="px-4 text-[14px]  font-TitleFont text-gray-700">
              {video.levelsInf.levelTitle}
            </h2>
          </div>

          <h2 className=" px-4 [14px] font-TitleFont text-blue-900">
            {video.TheClass}
          </h2>
        </div>
        {/* icon  */}
        <div className=" absolute top-0 right-4 flex justify-center items-center gap-2">
          <div className="flex justify-center items-center gap-1 divide-y-2">
            <p className="text-[14px]">12</p>

            <FcLike size={16} />
          </div>

          <div className="flex justify-center items-center gap-1 divide-y-2">
            <p className="text-[14px]">02</p>

            <FaComment size={16} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
