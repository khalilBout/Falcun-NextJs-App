"use client";
import React, { useState, useEffect } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { AiOutlineDelete } from "react-icons/ai";
import UploadVideo from "@/app/components/Upload/UploadVideo";
import UploadVideoCover from "@/app/components/Upload/UploadVideoCover";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Loading from "@/app/components/Loading/Loading";

const FormUpdateVideo = ({ data }) => {
  const router = useRouter();
  const [laudingSend, setLaudingSend] = useState(false);
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
  const [levelList, setLevelList] = useState([]);

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

  const [form, setForm] = useState({
    title: data.title,
    description: data.description,
    season: data.season,
    TheClass: data.TheClass,
    urlYoutube: data.urlYoutube,
  });
  const [urlVideo, setUrlVideo] = useState(data.urlVideo);
  const [videoCover, setVideoCover] = useState(data.videoCover);
  const [TheLevel, setTheLevel] = useState(data.levelsInf.levelTitle);
  const [unitList, setUnitList] = useState(data.unitList);

  const handelChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handelChangeLevel = (e) => {
    e.preventDefault();
    setTheLevel(e.target.value);
  };
  const ListClass = levelList?.find((elm) => elm.title === TheLevel);

  const addUnitToList = (elm) => {
    if (unitList.includes(elm.target.value)) {
      alert("الوحدة موجودة .....");
    } else {
      setUnitList((prv) => [...prv, elm.target.value]);
    }
  };
  const deleteUnit = (val) => {
    const newList = unitList.filter((elm) => elm !== val);
    setUnitList(newList);
  };

  const levelsInf = {
    levelID: ListClass?._id,
    levelTitle: ListClass?.title,
  };

  const dataUpdated = {
    ...form,
    urlVideo,
    unitList,
    videoCover,
    levelsInf,
  };
  // Sending Update Data
  const sendUpdateData = async () => {
    const id = data?._id;
    console.log("data sending:", dataUpdated);
    try {
      setLaudingSend(true);
      const res = await fetch(`/api/video/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          // Authorization: `Bearer ${Cookies.get("token")}`,
        },
        body: JSON.stringify(dataUpdated),
      });
      if (res.status === 200) {
        toast.success("video is Updated.");
        router.push("/dashboard/video");
        router.refresh();
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLaudingSend(false);
    }
  };

  // console.log("TheLevel:", TheLevel);
  // console.log("levelList:", levelList);
  // console.log("ListClass:", ListClass);
  return (
    <>
      {laudingSend ? (
        <div className="w-full h-full flex justify-center item-center">
          <Loading />
        </div>
      ) : (
        <div>
          <form>
            <div className="grid lg:grid-cols-2 gap-2 mx-2 ">
              <input
                className=" h-[40px] border-[1px] rounded-lg focus:border-pink-200 px-3 focus:border-2 outline-none m-1"
                placeholder="عنوان الفديو"
                type="text"
                name="title"
                onChange={handelChange}
                defaultValue={data.title}
              />
              <select
                className=" h-[40px] border-[1px] rounded-lg focus:border-pink-200 px-3 focus:border-2 outline-none m-1 bg-blue-200"
                name="season"
                onChange={handelChange}
                defaultValue={data.season}
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
                name=""
                onChange={handelChangeLevel}
                defaultValue={TheLevel}
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
                type="text"
                onChange={handelChange}
                defaultValue={data.TheClass}
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
                onChange={addUnitToList}
                defaultValue={data.unitList}
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
              {unitList.length > 0 && (
                <div className="flex gap-2">
                  {unitList.map((elm, ind) => (
                    <div
                      key={ind}
                      className=" flex justify-center items-center gap-2 px-2 h-[20px] bg-red-100 rounded-full"
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
                defaultValue={data.description}
                onChange={handelChange}
              />
              <input
                className="px-4 w-full h-[40px] border-[1px] rounded-lg focus:border-pink-200  focus:border-2 outline-none m-1"
                placeholder="رابط الفيديو على اليوتيوب"
                type="text"
                name="urlYoutube"
                defaultValue={data.urlYoutube}
                onChange={handelChange}
              />
            </div>
          </form>

          <div className="flex justify-start items-center gap-4 flex-wrap w-full ">
            {/* update video cover */}

            <div className="  flex justify-center items-center bg-slate-100 w-[300px] h-[360px]">
              {videoCover === "" ? (
                <UploadVideoCover setVideoCover={setVideoCover} />
              ) : (
                <div className=" flex flex-col justify-between items-center gap-2">
                  <img
                    src={videoCover}
                    alt="videoCover"
                    className="rounded-lg w-[180px] h-[400px] object-fill "
                  />
                  <button
                    onClick={() => setVideoCover("")}
                    className="text-[14px] font-TitleFont bg-red-200 px-2 py-1 rounded-md w-2/3 "
                  >
                    مسح الصورة
                  </button>
                </div>
              )}
            </div>

            {/* update video url */}

            <div className=" bg-slate-100 p-2 h-[360px] w-[230px] flex justify-center items-center">
              {urlVideo === "" ? (
                <UploadVideo setUrlVideo={setUrlVideo} />
              ) : (
                <div className=" bg-red-300 flex flex-col justify-between items-center gap-2">
                  <video src={urlVideo} controls style={{ width: "170px" }} />
                  <button
                    onClick={() => setUrlVideo("")}
                    className="text-[14px] font-TitleFont bg-red-200 px-2 py-1 rounded-md w-2/3"
                  >
                    مسح الفيديو
                  </button>
                </div>
              )}
            </div>
          </div>

          <button
            className={` ${
              laudingSend === true
                ? "bg-gray-300 text-primeColor cursor-move"
                : "bg-primeColor text-lightText "
            } px-4 py-2 my-2 cursor-pointer rounded-md w-full`}
            disabled={laudingSend === true}
            onClick={() => sendUpdateData()}
          >
            تعديل الدرس
          </button>
        </div>
      )}
    </>
  );
};

export default FormUpdateVideo;
