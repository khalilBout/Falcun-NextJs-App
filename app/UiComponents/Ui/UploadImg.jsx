"use client";
import React from "react";
import { CldUploadWidget } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";

const UploadImg = ({ setMainImg }) => {
  const handelSuccess = (result) => {
    console.log("data image:", result.info.secure_url);
    setMainImg(result.info.secure_url);
  };
  return (
    <div className="w-full h-full flex justify-center items-center bg-zinc-100">
      <CldUploadWidget uploadPreset="falcun" onSuccess={handelSuccess}>
        {({ open }) => {
          return (
            <button
              className="bg-red-200 hover:bg-red-400 w-[90%] text-[18px] font-fontTitle font-semibold p-2 rounded-md"
              onClick={() => open()}
            >
              الصورة الرئيسية
            </button>
          );
        }}
      </CldUploadWidget>
    </div>
  );
};

export default UploadImg;
