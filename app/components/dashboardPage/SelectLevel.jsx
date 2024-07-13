"use client";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const SelectLevel = () => {
  const [LevelList, setLevelList] = useState([]);

  useEffect(() => {
    const fetchLevels = async () => {
      const res = await fetch("/api/levels", {
        method: "GET",
      });
      const data = await res.json();
      setLevelList(data);
    };
    fetchLevels();
  }, []);

  const [level, setLevel] = useState("all");

  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    params.set("level", level);
    replace(`${pathname}?${params}`);
  }, [level]);

  const handelChange = (e) => {
    setLevel(e.target.value);
  };
  return (
    <select
      className="w-[140px]  h-[40px] border-[1px] rounded-lg focus:border-green-200 px-3 focus:border-2 outline-none m-1"
      name="category"
      defaultValue="all"
      onChange={handelChange}
    >
      <option key="all" value="">
        جميع المستويات
      </option>
      {LevelList?.map((elm, ind) => (
        <option key={ind} value={elm.title}>
          {elm.title}
        </option>
      ))}
    </select>
  );
};

export default SelectLevel;
