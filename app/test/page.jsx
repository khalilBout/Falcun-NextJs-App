"use client";
import { CldVideoPlayer } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";

const page = () => {
  const urlVideo = {
    url: "https://res.cloudinary.com/dppqikbzu/video/upload/v1720262465/testV_drxa4b.mp4",
    public_id: "testV_drxa4b",
  };
  return (
    <div className=" flex flex-col justify-center items-center">
      <h1>Test Page</h1>
      <div className="w-[280px] h-[530px] bg-slate-400">
        <CldVideoPlayer
          className="mx-auto"
          width="360"
          height="640"
          src={urlVideo.url}
          onMetadataLoad={({ player }) => {
            console.log(`[CldVideoPlayer] Duration: ${player.duration()}`);
          }}
          onPause={({ player }) => {
            console.log(
              `[CldVideoPlayer] Current Time: ${player.currentTime()}`
            );
          }}
        />
      </div>
    </div>
  );
};

export default page;
