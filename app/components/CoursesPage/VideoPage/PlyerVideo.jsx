"use Client";
// import React from "react";
// import { CldVideoPlayer } from "next-cloudinary";
// import "next-cloudinary/dist/cld-video-player.css";

// const PlyerVideo = ({ urlVideo }) => {
//   return (
//     <>
//       <CldVideoPlayer width="220" height="380" src={urlVideo?.public_id} />
//     </>
//   );
// };

// export default PlyerVideo;

import { CldVideoPlayer } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";

const PlyerVideo = ({ urlVideo }) => {
  return (
    <>
      {/* <CldVideoPlayer width="220" height="380" src={urlVideo?.public_id} /> */}
      <CldVideoPlayer
        width="220"
        height="380"
        src={urlVideo?.url}
        onMetadataLoad={({ player }) => {
          console.log(`[CldVideoPlayer] Duration: ${player.duration()}`);
        }}
        onPause={({ player }) => {
          console.log(`[CldVideoPlayer] Current Time: ${player.currentTime()}`);
        }}
      />
      ;
    </>
  );
};
