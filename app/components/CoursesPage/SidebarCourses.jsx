import Link from "next/link";

const SidebarCourses = () => {
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
      name: "السلاسل التعليمية ",
      url: "/courses/series",
    },
  ];

  return (
    <div>
      <div className="w-full flex justify-center mdl:justify-around items-center gap-1 py-6 px-2 bg-emerald-100 ">
        {dataCategory?.map((cty, ind) => (
          <Link
            href={cty.url}
            key={ind}
            className="mx-1 text-[12px] sml:text-[15px] mdl:text-[18px] font-TitleFont font-medium text-black bg-slate-300 border-1 border-black/70 rounded-full px-4 py-1 hover:bg-black hover:text-white"
            //   onClick={() => addCategory(cty.name)}
          >
            {cty.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SidebarCourses;
