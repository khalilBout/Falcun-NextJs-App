"use client";
import React, { useEffect, useState } from "react";
import VideoCard from "@/app/components/CoursesPage/VideoCard";
import Link from "next/link";
import EmptyView from "@/app/components/CoursesPage/EmptyView";

const DisplayVideo = ({ allVideos }) => {
  const [videoFilter, setVideoFilter] = useState(allVideos);
  var dataDisplay = allVideos;

  const dataSeason = [
    {
      id: 1,
      nameEn: "season-1",
      name: "الفصل الأول",
      // url: "/courses/videos",
    },
    {
      id: 2,
      nameEn: "season-2",
      name: "الفصل الثاني",
      // url: "/courses/videos",
    },
  ];
  const [LevelList, setLevelList] = useState([]);
  // fetching data
  useEffect(() => {
    const fetchLevels = async () => {
      const res = await fetch("/api/admin/levels", {
        method: "GET",
      });
      const data = await res.json();
      setLevelList(data);
    };

    // fetchVideo();
    fetchLevels();
  }, []);

  const [selectSeason, setSelectSeason] = useState("season-1");
  const [selectLevel, setSelectLevel] = useState("");
  const [selectClass, setSelectClass] = useState("");

  const LevelSelectedObject = LevelList?.find(
    (elm) => elm.title === selectLevel
  );

  const applyFilters = () => {
    // Season Filter
    if (selectSeason && selectSeason !== "") {
      dataDisplay = dataDisplay.filter((item) => item.season === selectSeason);
    }

    // level Filter
    if (selectLevel && selectLevel !== "") {
      dataDisplay = dataDisplay.filter(
        (item) => item.levelsInf.levelTitle === selectLevel
      );
    }

    // class Filter
    if (selectClass && selectClass !== "") {
      dataDisplay = dataDisplay.filter((item) => item.TheClass === selectClass);
    }

    setVideoFilter(dataDisplay);
  };

  useEffect(() => {
    applyFilters();
  }, [selectClass, selectLevel, selectSeason]);

  console.log(" video filter:", videoFilter);

  return (
    <div>
      {/* filter data  */}
      <div>
        <div className=" w-full flex justify-center mdl:justify-around items-center gap-1 py-4 bg-blue-50">
          {dataSeason?.map((elm, ind) => (
            <li key={ind}>
              <button
                onClick={() => setSelectSeason(elm.nameEn)}
                // className="border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center gap-2 hover:text-primeColor hover:border-gray-400 duration-300 cursor-pointer"
                className="mx-1 text-[12px] sml:text-[14px] mdl:text-[16px] font-TitleFont font-medium text-black bg-slate-300 border-1 border-black/70 rounded-full px-4 py-1 hover:bg-black hover:text-white"
                scroll={false}
              >
                {elm.name}
              </button>
            </li>
          ))}
        </div>
        <div className=" w-full flex justify-center items-center gap-1 sml:gap-4 mdl:gap-8 py-4 ">
          {LevelList &&
            LevelList?.map((elm, ind) => (
              <li key={ind}>
                <button
                  onClick={() => setSelectLevel(elm.title)}
                  // className="border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center gap-2 hover:text-primeColor hover:border-gray-400 duration-300 cursor-pointer"
                  className="mx-1 text-[12px] sml:text-[14px] mdl:text-[16px] font-TitleFont font-medium text-black bg-slate-300 border-1 border-black/70 rounded-full px-4 py-1 hover:bg-black hover:text-white"
                  scroll={false}
                >
                  {elm.title}
                </button>
              </li>
            ))}
        </div>
        <div className=" w-full flex justify-center items-center gap-1 sml:gap-4 mdl:gap-8 py-4 ">
          {LevelSelectedObject &&
            LevelSelectedObject?.listClass?.map((elm, ind) => {
              return (
                <li key={ind}>
                  <button
                    onClick={() => setSelectClass(elm.name)}
                    className="mx-1 text-[12px] sml:text-[14px] mdl:text-[16px] font-TitleFont font-medium text-black bg-slate-300 border-1 border-black/70 rounded-full px-4 py-1 hover:bg-black hover:text-white"
                    scroll={false}
                  >
                    {elm.name}
                  </button>
                </li>
              );
            })}
        </div>
      </div>

      {/* display data  */}
      <div className="w-full flex justify-around items-start flex-wrap ">
        {videoFilter?.length > 0 ? (
          videoFilter?.map((item, ind) => <VideoCard key={ind} item={item} />)
        ) : (
          <EmptyView />
        )}
      </div>
    </div>
  );
};

export default DisplayVideo;
