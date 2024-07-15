"use client";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const SelectSeason = () => {
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

  const [season, setSeason] = useState("all");

  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    params.set("season", season);
    replace(`${pathname}?${params}`);
  }, [season]);

  const handelChange = (e) => {
    setSeason(e.target.value);
  };
  return (
    <select
      className="w-[140px]  h-[40px] border-[1px] rounded-lg focus:border-green-200 px-3 focus:border-2 outline-none m-1"
      name="category"
      defaultValue="all"
      onChange={handelChange}
    >
      <option key="all" value="">
        إختر الفصل{" "}
      </option>
      {dataSeason?.map((elm, ind) => (
        <option key={ind} value={elm.nameEn}>
          {elm.name}
        </option>
      ))}
    </select>
  );
};

export default SelectSeason;
