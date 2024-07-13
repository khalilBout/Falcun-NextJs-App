import React from "react";
import DisplayVideo from "@/app/components/CoursesPage/VideoPage/DisplayVideo";
import { getVideo } from "@/Utils/getData/getVideo";
import EmptyView from "@/app/components/CoursesPage/EmptyView";

const page = async ({ searchParams }) => {
  let allDataVideos = [];
  const page = searchParams?.page || 1;
  const levels = searchParams?.level || "all";
  const season = searchParams?.season || "all";

  try {
    const { allVideos } = await getVideo(page, levels, season);
    allDataVideos = allVideos;
  } catch (err) {
    console.log(err);
  }

  return (
    <>
      {allDataVideos.length > 0 ? (
        <DisplayVideo allVideos={allDataVideos} />
      ) : (
        <EmptyView />
      )}
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
