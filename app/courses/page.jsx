"use client";
import { useState } from "react";
// import vid from "@/asset/video/test.mp4";
import VideoCard from "@/app/components/CoursesPage/VideoCard";
const dataVideo = [
  {
    title: "المفردات",
    url: "https://www.youtube.com/watch?v=9AWO3CQ5KSg",
    desc: "سعى لجعل التعلم رحلة ممتعة ومثمرة، حيث يتم تنظيم المحتوى بشكل متدرج يعزز الفهم ويساعد الأطفال على تحقيق أفضل النتائج",
    level: "level-1",
    classVideo: "class-2",
  },
  {
    title: "الأرقام",
    url: "https://www.youtube.com/watch?v=9AWO3CQ5KSg",
    desc: "سعى لجعل التعلم رحلة ممتعة ومثمرة، حيث يتم تنظيم المحتوى بشكل متدرج يعزز الفهم ويساعد الأطفال على تحقيق أفضل النتائج",
    level: "level-2",
    classVideo: "class-3",
  },
  {
    title: "الحروف",
    url: "https://www.youtube.com/watch?v=9AWO3CQ5KSg",
    desc: "سعى لجعل التعلم رحلة ممتعة ومثمرة، حيث يتم تنظيم المحتوى بشكل متدرج يعزز الفهم ويساعد الأطفال على تحقيق أفضل النتائج",
    level: "level-4",
    classVideo: "class-1",
  },
  {
    title: "الجمل",
    url: "https://www.youtube.com/watch?v=9AWO3CQ5KSg",
    desc: "سعى لجعل التعلم رحلة ممتعة ومثمرة، حيث يتم تنظيم المحتوى بشكل متدرج يعزز الفهم ويساعد الأطفال على تحقيق أفضل النتائج",
    level: "level-1",
    classVideo: "class-1",
  },
];

export default function Courses() {
  const [openClass, setOpenClass] = useState(false);
  const dataCategory = [
    {
      id: 1,
      nameEn: "video",
      name: "الفيديوهات التعليمية ",
      subCategory: ["level-1", "level-2", "level-3"],
    },
    {
      id: 2,
      nameEn: "books",
      name: "المذكرات المدرسية",
      subCategory: ["level-1", "level-2", "level-3"],
    },
    {
      id: 1,
      nameEn: "series",
      name: "السلاسل التعليمية ",
      subCategory: ["level-1", "level-2", "level-3"],
    },
  ];
  const dataLevel = [
    {
      _id: 1,
      nameEn: "level-1",
      name: "المستوى 1",
    },
    {
      _id: 2,
      nameEn: "level-2",
      name: "المستوى 2",
    },
    {
      _id: 3,
      nameEn: "level-3",
      name: "المستوى 3",
    },
    {
      _id: 4,
      nameEn: "level-4",
      name: "المستوى 4",
    },
    {
      id: 5,
      nameEn: "level-5",
      name: "المستوى 5",
    },
  ];
  const dataClass = [
    {
      _id: 1,
      nameEn: "class-1",
      name: "فصل 1",
    },
    {
      _id: 2,
      nameEn: "class-2",
      name: "فصل 2",
    },
    {
      _id: 3,
      nameEn: "class-3",
      name: "فصل 3",
    },
    {
      _id: 4,
      nameEn: "class-4",
      name: "فصل 4",
    },
  ];

  const addCategory = (nameCty) => {
    console.log(nameCty);
  };

  const addLevel = (nameLevel) => {
    console.log(nameLevel);
  };
  return (
    <div className="screenPadding">
      {/* category navbar  */}
      <div className="w-full flex mdl:justify-end justify-center items-center my-4 ">
        <div className="mdl:w-3/4 flex justify-around">
          {dataCategory?.map((cty, ind) => (
            <button
              key={ind}
              className="mx-1 text-[12px] sml:text-[15px] mdl:text-[18px] font-TitleFont font-medium text-black bg-slate-300 border-1 border-black/70 rounded-full px-4 py-1 hover:bg-black hover:text-white"
              onClick={() => addCategory(cty.name)}
            >
              {cty.name}
            </button>
          ))}
        </div>
      </div>

      <div className=" mdl:flex gap-2 min-h-[560px] w-full">
        <div className="w-full mdl:w-1/4 ">
          <div className="flex mdl:flex-col justify-around mdl:justify-start mdl:gap-4 items-center my-4">
            {dataLevel?.map((level, ind) => (
              <div key={ind}>
                <button
                  className="mx-1 mdl:px-4 text-[11px] sml:text-[16px] mdl:text-[20px] font-TitleFont font-medium text-black bg-slate-100 border-1 border-black/70 rounded-full px-2 py-1 hover:bg-black hover:text-white"
                  onClick={() => {
                    addLevel(level.name);
                    // setOpenClass(!openClass);
                  }}
                >
                  {level.name}
                </button>
              </div>
            ))}
          </div>
          <div className="flex mdl:flex-col justify-around mdl:justify-start mdl:gap-4 items-center my-4">
            {dataClass?.map((item, ind) => (
              <div key={ind}>
                <button
                  className="mx-1 mdl:px-4 text-[11px] sml:text-[16px] mdl:text-[20px] font-TitleFont font-medium text-black bg-slate-100 border-1 border-black/70 rounded-full px-2 py-1 hover:bg-black hover:text-white"
                  onClick={() => {
                    addClass(item.name);
                    // setOpenClass(!openClass);
                  }}
                >
                  {item.name}
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className=" w-full mdl:w-3/4 flex flex-wrap bg-green-100 ">
          {dataVideo?.length > 0 &&
            dataVideo.map((item, ind) => <VideoCard key={ind} item={item} />)}
        </div>
      </div>
    </div>
  );
}
