"use client";
import { CldVideoPlayer } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";

const page = () => {
  const urlVideo = [
    {
      url: "https://www.youtube.com/embed/jVdictMFM-s?si=Vi7yUMRIIgmrnb0x",
    },
    {
      url: "https://www.youtube.com/embed/MC6D4vylKTc?si=5Hc3hUfb6NUua6FK",
    },
  ];
  return (
    <div className="h-[50vh]">
      <h1>Test Page</h1>
      {/* <div className="w-[280px] h-[530px] bg-slate-400">
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
      </div> */}
      <div className="flex justify-center items-center flex-wrap gap-4 h-full w-full bg-lime-200">
        {urlVideo.map((elm, ind) => (
          <div key={ind}>
            <iframe
              width="560"
              height="315"
              src={elm.url}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>

            <h3>عنوات الفيديو</h3>
            <p>
              وصف الفيديو وصف الفيديو وصف الفيديو وصف الفيديو وصف الفيديو وصف
              الفيديو{" "}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
