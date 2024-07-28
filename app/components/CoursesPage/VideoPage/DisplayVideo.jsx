"use client";
import VideoCard from "@/app/components/CoursesPage/VideoCard";
import EmptyView from "@/app/components/CoursesPage/EmptyView";
import { useEffect, useState } from "react";

const DisplayVideo = ({ allVideos, levels }) => {
  const unitData = [
    "الوحدة-01",
    "الوحدة-02",
    "الوحدة-03",
    "الوحدة-04",
    "الوحدة-05",
    "الوحدة-06",
    "الوحدة-07",
    "الوحدة-08",
    "الوحدة-09",
    "الوحدة-10",
  ];
  const [videoFilter, setVideoFilter] = useState(allVideos);
  var dataDisplay = allVideos;

  const [LevelList, setLevelList] = useState([]);
  const [selectClass, setSelectClass] = useState("");

  useEffect(() => {
    const fetchLevels = async () => {
      const res = await fetch("/api/levels", {
        method: "GET",
      });
      const data = await res.json();
      setLevelList(data);
    };
    // fetchVideo();
    fetchLevels();
  }, []);

  const LevelSelectedObject = LevelList?.find((elm) => elm.title === levels);

  const applyFilters = () => {
    // class Filter
    if (selectClass && selectClass !== "") {
      dataDisplay = dataDisplay.filter((item) => item.TheClass === selectClass);
    }

    setVideoFilter(dataDisplay);
  };

  useEffect(() => {
    applyFilters();
  }, [selectClass]);

  const handelClass = (e) => {
    setSelectClass(e.target.value);
  };

  return (
    <div className="w-full ">
      <div className="flex justify-center">
        <select
          className="w-[140px]  h-[40px] border-[1px] rounded-lg focus:border-green-200 px-3 focus:border-2 outline-none m-1"
          name="Class"
          defaultValue="all"
          onChange={handelClass}
        >
          <option key="all" value="">
            اختر القسم{" "}
          </option>
          {LevelSelectedObject?.listClass?.map((elm, ind) => (
            <option key={ind} value={elm.name}>
              {elm.name}
            </option>
          ))}
        </select>
      </div>
      <div className=" flex justify-center items-start flex-wrap">
        {videoFilter?.length > 0 ? (
          unitData.map((elm, ind) => {
            const dataUnit = videoFilter.filter((item) =>
              item.unitList.includes(elm)
            );
            return (
              <div
                key={ind}
                className="w-full m-2 flex flex-wrap justify-center items-center"
              >
                {dataUnit?.map((item, ind) => (
                  <VideoCard key={ind} item={item} />
                ))}
              </div>
            );
          })
        ) : (
          // <div>
          //   {videoFilter?.map((item, ind) => (
          //     <VideoCard key={ind} item={item} />
          //   ))}
          // </div>
          <EmptyView />
        )}
      </div>
    </div>
  );
};

export default DisplayVideo;

// "use client";
// import React, { useEffect, useState } from "react";
// import VideoCard from "@/app/components/CoursesPage/VideoCard";
// import EmptyView from "@/app/components/CoursesPage/EmptyView";

// const DisplayVideo = ({ allVideos }) => {
//   const [videoFilter, setVideoFilter] = useState(allVideos);
//   var dataDisplay = allVideos;

//   const dataSeason = [
//     {
//       id: 1,
//       nameEn: "season-1",
//       name: "الفصل الأول",
//       // url: "/courses/videos",
//     },
//     {
//       id: 2,
//       nameEn: "season-2",
//       name: "الفصل الثاني",
//       // url: "/courses/videos",
//     },
//   ];
//   const [LevelList, setLevelList] = useState([]);
//   // fetching data
//   useEffect(() => {
//     const fetchLevels = async () => {
//       const res = await fetch("/api/levels", {
//         method: "GET",
//       });
//       const data = await res.json();
//       setLevelList(data);
//     };

//     // fetchVideo();
//     fetchLevels();
//   }, []);

//   const [selectSeason, setSelectSeason] = useState("season-1");
//   const [selectLevel, setSelectLevel] = useState("");
//   const [selectClass, setSelectClass] = useState("");

//   const LevelSelectedObject = LevelList?.find(
//     (elm) => elm.title === selectLevel
//   );

//   const applyFilters = () => {
//     // Season Filter
//     if (selectSeason && selectSeason !== "") {
//       dataDisplay = dataDisplay.filter((item) => item.season === selectSeason);
//     }

//     // level Filter
//     if (selectLevel && selectLevel !== "") {
//       dataDisplay = dataDisplay.filter(
//         (item) => item.levelsInf.levelTitle === selectLevel
//       );
//     }

//     // class Filter
//     if (selectClass && selectClass !== "") {
//       dataDisplay = dataDisplay.filter((item) => item.TheClass === selectClass);
//     }

//     setVideoFilter(dataDisplay);
//   };

//   useEffect(() => {
//     applyFilters();
//   }, [selectClass, selectLevel, selectSeason]);

//   const handelSeason = (e) => {
//     setSelectSeason(e.target.value);
//   };

//   const handelLevel = (e) => {
//     setSelectLevel(e.target.value);
//   };

//   const handelClass = (e) => {
//     setSelectClass(e.target.value);
//   };

//   return (
//     <div>
//       {/* filter data  */}
//       <div className="font-TitleFont flex justify-center items-center flex-wrap gap-2 mdl:gap-8 text-[12px] mdl:text-[14px] py-2 mdl:py-4 ">
//         {/* filter Season  */}
//         <select
//           className="w-[140px]  h-[40px] border-[1px] rounded-lg focus:border-green-200 px-3 focus:border-2 outline-none m-1"
//           name="Season"
//           defaultValue="all"
//           onChange={handelSeason}
//         >
//           <option key="all" value="">
//             جميع الفصول
//           </option>
//           {dataSeason?.map((elm, ind) => (
//             <option key={ind} value={elm.nameEn}>
//               {elm.name}
//             </option>
//           ))}
//         </select>

//         {/* filter Level  */}
//         {LevelList && (
//           <select
//             className="w-[140px]  h-[40px] border-[1px] rounded-lg focus:border-green-200 px-3 focus:border-2 outline-none m-1"
//             name="level"
//             defaultValue="all"
//             onChange={handelLevel}
//           >
//             <option key="all" value="">
//               جميع الصفوف
//             </option>
//             {LevelList?.map((elm, ind) => (
//               <option key={ind} value={elm.title}>
//                 {elm.title}
//               </option>
//             ))}
//           </select>
//         )}

//         {/* filter Class  */}
//         {LevelSelectedObject && (
//           <select
//             className="w-[140px]  h-[40px] border-[1px] rounded-lg focus:border-green-200 px-3 focus:border-2 outline-none m-1"
//             name="level"
//             defaultValue="all"
//             onChange={handelClass}
//           >
//             <option key="all" value="">
//               جميع الأقسام
//             </option>
//             {LevelSelectedObject?.listClass?.map((elm, ind) => (
//               <option key={ind} value={elm.name}>
//                 {elm.name}
//               </option>
//             ))}
//           </select>
//         )}
//       </div>

//       {/* display data  */}
//       <div className="w-full flex justify-around items-start flex-wrap ">
//         {videoFilter?.length > 0 ? (
//           videoFilter?.map((item, ind) => <VideoCard key={ind} item={item} />)
//         ) : (
//           <EmptyView />
//         )}
//       </div>
//     </div>
//   );
// };

// export default DisplayVideo;
