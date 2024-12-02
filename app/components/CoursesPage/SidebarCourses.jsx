import Link from "next/link";

const SidebarCourses = (params) => {
  const path = "";
  const dataCategory = [
    {
      id: 1,
      nameEn: "video",
      name: "الفيديوهات التعليمية ",
      url: "/courses/videos",
    },
    {
      id: 2,
      nameEn: "books",
      name: "المذكرات المدرسية",
      url: "/courses/books",
    },
    {
      id: 1,
      nameEn: "series",
      name: "سلسلة التأسيس ",
      url: "/courses/series",
    },
  ];

  return (
    <div className="w-full flex justify-center items-center mdl:justify-around gap-1 py-6 px-2 bg-teal-300 ">
      {dataCategory?.map((cty, ind) => {
        const isActive = cty.url === path;

        return (
          <Link
            href={cty.url}
            key={ind}
            className="font-bold mx-1 text-center text-[13px] sml:text-[15px] mdl:text-[18px] font-TitleFont text-red-700 bg-cyan-100 border-1 border-black/70 rounded-full px-4 py-1 hover:bg-black hover:text-white"
          >
            {cty.name}
          </Link>
        );
      })}
    </div>
  );
};

export default SidebarCourses;
