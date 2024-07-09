import React from "react";
import { getVideo } from "@/Utils/getData/getVideo";
import DisplayVideo from "@/app/components/CoursesPage/VideoPage/DisplayVideo";

const page = async () => {
  // const { allVideos } = getVideo();
  const res = await fetch("http://localhost:3000/api/admin/video", {
    method: "GET",
  });
  const allVideos = await res.json();
  // console.log("allVideos***", allVideos);

  return (
    <>
      <DisplayVideo allVideos={allVideos} />
    </>
  );
};

export default page;

{
  /* <div className="flex flex-col items-around">
      <div className="flex flex-col justify-around">
        // الفصول  
        <div className="py-2 flex justify-center gap-8 sml:gap-12 mdl:gap-16  p-2">
          <button
            //  className=" font-TitleFont text-[16px] font-medium text-slate-800 px-4  rounded-full bg-slate-200 hover:bg-slate-800 hover:text-slate-200"
            className="mx-1 text-[12px] sml:text-[14px] mdl:text-[16px] font-TitleFont font-medium text-black bg-slate-300 border-1 border-black/70 rounded-full px-4 py-1 hover:bg-black hover:text-white"
          >
            الفصل الأول{" "}
          </button>
          <button
            //  className="font-TitleFont text-[16px] font-medium text-slate-800 px-4 rounded-full bg-slate-200 hover:bg-slate-800 hover:text-slate-200"
            className="mx-1 text-[12px] sml:text-[14px] mdl:text-[16px] font-TitleFont font-medium text-black bg-slate-300 border-1 border-black/70 rounded-full px-4 py-1 hover:bg-black hover:text-white"
          >
            الفصل الثاني{" "}
          </button>
        </div>
        // الاقسام 
        <div className="my-2 flex justify-center gap-1 sml:gap-4 mdl:gap-8">
          {dataLevel.map((item, ind) => {
            return (
              <button
                key={ind}
                //   className=" font-TitleFont text-[14px] font-medium text-slate-800 px-4  rounded-full bg-slate-200 hover:bg-slate-800 hover:text-slate-200"
                className=" text-[10px] sml:text-[13px] mdl:text-[15px] font-TitleFont font-medium text-black bg-slate-300 border-1 border-black/70 rounded-full px-4 py-1 hover:bg-black hover:text-white"
              >
                {item.name}
              </button>
            );
          })}
        </div>
      </div>

      <div className="w-full py-2 flex justify-around  gap-1 min-h-[560px]">
        //  الاقسام  
        <div className="min-w-[110px] flex flex-col justify-start items-center gap-2 mt-8">
          {dataClass?.map((elm, ind) => (
            <div key={ind}>
              <button className="w-full mx-1 mdl:px-4 text-[12px] sml:text-[14px] mdl:text-[16px] font-TitleFont font-medium text-black bg-slate-100 border-1 border-black/70 rounded-full px-2 py-1 hover:bg-black hover:text-white">
                {elm.name}
              </button>
            </div>
          ))}
        </div>
        // البيانات  
        <div className=" flex justify-around items-start flex-wrap ">
          {dataVideo?.length > 0 &&
            dataVideo.map((item, ind) => <VideoCard key={ind} item={item} />)}
        </div>
      </div>
    </div>
     */
}
