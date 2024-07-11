"use client";
import React from "react";
import { CldVideoPlayer } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";
import AddComment from "@/app/components/CoursesPage/VideoPage/AddComment ";

import { FcLike } from "react-icons/fc";
import { FaComment } from "react-icons/fa";
import { useSession } from "next-auth/react";
import Link from "next/link";

const VideoDetails = ({ video }) => {
  const session = useSession();

  return (
    <div className="p-2 mdl:p-4 w-full flex flex-col mdl:flex-row gap-4 justify-around mdl:item-center ">
      {/* video Player  */}
      <div className="w-full m-2 mdl:w-1/2 h-auto -z-10">
        <div className="w-full max-w-[400px] flex justify-center items-center">
          <CldVideoPlayer
            width="330"
            height="600"
            src={video.urlVideo.public_id}
          />
        </div>
      </div>

      {/* video Info   */}
      <div className="flex flex-col items-start w-full m-2 mdl:w-1/2 mdl:px-4 ">
        {/* text info  */}
        <div className=" text-[16px] mdl:text-[18px]">
          <h2 className="py-2 font-TitleFont ">
            <span className="text-gray-700">عنوان الدرس : </span>
            <span className="text-gray-900">{video.title}</span>
          </h2>
          {/* <div className="flex justify-around items-center "> */}
          <h2 className="py-1 font-TitleFont text-gray-700">
            <span className="">الفصل : </span>
            {video.season === "season-1" ? (
              <span>الفصل الأول</span>
            ) : (
              <span>الفصل الثاني</span>
            )}
          </h2>
          <h2 className="py-1 font-TitleFont ">
            <span className="text-gray-700">المستوى : </span>
            <span className="text-gray-900">{video.levelsInf.levelTitle}</span>
          </h2>

          <h2 className="py-1 font-TitleFont ">
            <span className="text-gray-700">القسم : </span>
            <span className="text-gray-900">{video.TheClass}</span>
          </h2>

          <div className="py-1 font-TitleFont ">
            <h2 className="text-gray-700">وصف الدرس : </h2>
            <h2 className="px-4 text-gray-900">{video.description}</h2>
          </div>
        </div>
        {/* Like And Comment  */}
        <div className="py-2">
          <div className=" flex justify-between items-center">
            <h1 className="text-[18px] font-TitleFont text-gray-900 font-bold">
              أضف تعليق
            </h1>
            <div className="mx-2 flex justify-center items-center gap-6">
              <div className="flex justify-center items-center gap-2 divide-x-1">
                <p className="text-[16px]"> {video.listComment.length} </p>

                <FcLike size={18} className=" cursor-pointer" />
              </div>

              <div className="flex justify-center items-center gap-2 divide-x-1">
                <p className="text-[16px]">{video.like.length}</p>

                <FaComment size={18} className=" cursor-pointer" />
              </div>
            </div>
          </div>
          {/* text of Comment  */}
          <div>
            {video.listComment > 0 &&
              video.listComment?.map((elm, ind) => (
                <div key={ind}>
                  <h3 className=""> {elm.userID} </h3>
                  <p className="w-full py-1 px-2 text-[14px] text-gray-600 font-bodyFont">
                    {elm.bodyComment}
                  </p>
                </div>
              ))}

            <div>
              {session && session.status === "authenticated" ? (
                <AddComment />
              ) : (
                <div className="flex justify-around items-center m-2 py-2 px-4 bg-green-200 text-[15px] font-TitleFont rounded-lg">
                  <p className="text-center">
                    أسف عزيز الطالب ، لا يمكن التعليق قبل تسجيل الدخول
                  </p>
                  <Link
                    href="/login"
                    className="m-2 text-center min-w-[60px] px-2 py-1 bg-blue-200 rounded-md cursor-pointer text-[14px] font-semibold"
                  >
                    تسجيل الدخول
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
