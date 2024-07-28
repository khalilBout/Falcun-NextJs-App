import DisplayVideo from "@/app/components/CoursesPage/VideoPage/DisplayVideo";
import { getVideo } from "@/Utils/getData/getVideo";
import SelectLevel from "@/app/components/dashboardPage/SelectLevel";
import SelectSeason from "@/app/components/dashboardPage/SelectSeason";
// import Pagination from "@/app/components//dashboardPage/Pagination";

import EmptyView from "@/app/components/CoursesPage/EmptyView";

const pageVideo = async ({ searchParams }) => {
  const page = searchParams?.page || 1;
  const levels = searchParams?.level || "all";
  const season = searchParams?.season || "all";

  const { allVideos, count } = await getVideo(page, levels, season);
  return (
    <>
      <div className="flex justify-between items-center flex-wrap ">
        <div className="w-full mx-2 flex justify-between items-center mb-4 ">
          <SelectSeason />
          <SelectLevel />
        </div>
        {/* <Pagination count={count} /> */}
      </div>
      <div className="w-full overflow-hidden flex justify-center ">
        {allVideos.length > 0 ? (
          <DisplayVideo allVideos={allVideos} levels={levels} />
        ) : (
          <EmptyView />
        )}
      </div>
    </>
  );
};

export default pageVideo;

// import React from "react";
// import DisplayVideo from "@/app/components/CoursesPage/VideoPage/DisplayVideo";
// import { getVideo } from "@/Utils/getData/getVideo";
// import EmptyView from "@/app/components/CoursesPage/EmptyView";

// const page = async ({ searchParams }) => {
//   let allDataVideos = [];
//   const page = searchParams?.page || 1;
//   const levels = searchParams?.level || "all";
//   const season = searchParams?.season || "all";

//   try {
//     const { allVideos } = await getVideo(page, levels, season);
//     allDataVideos = allVideos;
//   } catch (err) {
//     console.log(err);
//   }

//   return (
//     <>
//       {allDataVideos.length > 0 ? (
//         <DisplayVideo allVideos={allDataVideos} />
//       ) : (
//         <EmptyView />
//       )}
//     </>
//   );
// };

// export default page;
