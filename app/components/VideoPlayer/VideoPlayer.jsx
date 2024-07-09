"use client";
import React from "react";
import { CldVideoPlayer } from "next-cloudinary";
// import 'next-cloudinary/dist/cld-video-player.css';

const VideoPlayer = ({ urlVideo }) => {
  return (
    <div className=" relative w-full h-[1200px] bg-slate-300 overflow-hidden">
      <CldVideoPlayer width="800" height="1220" src={urlVideo.url} />
    </div>
  );
};

export default VideoPlayer;
