"use Client";
import React from "react";
import { CldVideoPlayer } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";

const PlyerVideo = ({ urlVideo }) => {
  return (
    <>
      <CldVideoPlayer width="220" height="380" src={urlVideo?.public_id} />
    </>
  );
};

export default PlyerVideo;
