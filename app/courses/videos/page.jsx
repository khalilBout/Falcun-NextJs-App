import React from "react";
import DisplayVideo from "@/app/components/CoursesPage/VideoPage/DisplayVideo";

const page = async () => {
  const res = await fetch("http://localhost:3000/api/admin/video", {
    method: "GET",
  });
  const allVideos = await res.json();

  return (
    <>
      <DisplayVideo allVideos={allVideos} />
    </>
  );
};

export default page;
