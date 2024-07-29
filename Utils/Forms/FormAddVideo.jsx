"use client";
import React, { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";

const FormAddVideo = ({
  form,
  setForm,
  levels,
  setLevels,
  levelList,
  setLevelList,
  unitList,
  setUnitList,
}) => {
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

  const handelChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handelChangeLevel = (e) => {
    e.preventDefault();
    setLevels(e.target.value);
  };
  const ListClass = levelList?.find((elm) => elm.title === levels);

  const listSeason = ["season-1", "season-2"];
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

  const handelAddUnit = (elm) => {
    setUnitList((prv) => [...prv, elm.target.value]);
  };

  const deleteUnit = (val) => {
    const newList = unitList.filter((elm) => elm !== val);
    setUnitList(newList);
  };
  console.log("unit:", unitList);

  return (
    <form>
      <div className="grid lg:grid-cols-2 gap-2 mx-2 ">
        <input
          className=" h-[40px] border-[1px] rounded-lg focus:border-pink-200 px-3 focus:border-2 outline-none m-1"
          placeholder="عنوان الفديو"
          type="text"
          name="title"
          onChange={handelChange}
        />
        <select
          className=" h-[40px] border-[1px] rounded-lg focus:border-pink-200 px-3 focus:border-2 outline-none m-1 bg-blue-200"
          name="season"
          onChange={handelChange}
          required
        >
          <option value="" className="text-gray-100 h-[40px]">
            إختر الفصل
          </option>
          {listSeason?.map((elm) => (
            <option key={elm} value={elm}>
              {elm}
            </option>
          ))}
        </select>

        <select
          className=" h-[40px] border-[1px] rounded-lg focus:border-pink-200 px-3 focus:border-2 outline-none m-1 bg-blue-200"
          name="levels"
          onChange={handelChangeLevel}
          required
        >
          <option value="" className="text-gray-100 h-[40px]">
            إختر الصف
          </option>
          {levelList?.map((lev, ind) => {
            return (
              <option key={ind} value={lev.title}>
                {lev.title}
              </option>
            );
          })}
        </select>

        <select
          className=" h-[40px] border-[1px] rounded-lg focus:border-pink-200 px-3 focus:border-2 outline-none m-1 bg-blue-200"
          name="TheClass"
          onChange={handelChange}
          required
        >
          <option value="" className="text-gray-100 h-[40px]">
            إختر القسم{" "}
          </option>
          {ListClass?.listClass?.map((elm, ind) => (
            <option key={ind} value={elm}>
              {elm}
            </option>
          ))}
        </select>

        <select
          className=" h-[40px] border-[1px] rounded-lg focus:border-pink-200 px-3 focus:border-2 outline-none m-1 bg-blue-200"
          name=""
          onChange={handelAddUnit}
          required
        >
          <option value="" className="text-gray-100 h-[40px]">
            إختر الوحدة{" "}
          </option>
          {unitData?.map((elm, ind) => (
            <option key={ind} value={elm}>
              {elm}
            </option>
          ))}
        </select>
        {unitList?.length > 0 && (
          <div className="flex gap-2">
            {unitList?.map((elm, ind) => (
              <div
                key={ind}
                className=" flex justify-center items-center gap-2 px-2 py-1 bg-red-100 rounded-full"
              >
                <p className="text-[15px]  ">{elm}</p>
                <button
                  className="p-1 w-[10px] h-[10px] rounded-full bg-red-300 flex justify-center items-center "
                  onClick={() => deleteUnit(elm)}
                >
                  <AiOutlineDelete size={16} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="m-2">
        <textarea
          rows={3}
          className="w-full border-[1px] rounded-lg focus:border-pink-200 px-3 focus:border-2 outline-none "
          placeholder="وصف الفيديو"
          type="text"
          name="description"
          onChange={handelChange}
        />
        <input
          className="px-4 w-full h-[40px] border-[1px] rounded-lg focus:border-pink-200  focus:border-2 outline-none m-1"
          placeholder="رابط الفيديو على اليوتيوب"
          type="text"
          name="urlYoutube"
          onChange={handelChange}
        />
      </div>
    </form>
  );
};

export default FormAddVideo;
