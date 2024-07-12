import React from "react";
import DisplayVideo from "@/app/components/CoursesPage/VideoPage/DisplayVideo";

const page = async () => {
  let allVideos = [];

  try {
    const res = await fetch(`${process.env.GLOBAL_URL}/api/admin/video`, {
      method: "GET",
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const text = await res.text();

    // Check if the response is valid JSON
    try {
      allVideos = JSON.parse(text);
    } catch (err) {
      console.log("Response is not valid JSON:", text);
      throw err;
    }
  } catch (err) {
    console.log(err);
  }

  return (
    <>
      <DisplayVideo allVideos={allVideos} />
    </>
  );
};

export default page;

// import React from "react";
// import DisplayVideo from "@/app/components/CoursesPage/VideoPage/DisplayVideo";

// const page = async () => {
//   let allVideos = [];
//   try {
//     const res = await fetch(`${process.env.GLOBAL_URL}/api/admin/video`, {
//       method: "GET",
//     });
//     allVideos = await res.json();
//   } catch (err) {
//     console.log(err);
//   }

//   return (
//     <>
//       <DisplayVideo allVideos={allVideos} />
//     </>
//   );
// };

// export default page;
