"use client";
import React, { useState } from "react";
import FormAddVideo from "@/Utils/Forms/FormAddVideo";
import UploadVideo from "@/app/components/Upload/UploadVideo";
import UploadVideoCover from "@/app/components/Upload/UploadVideoCover";
// import NewUploader from "@/app/components/Upload/NewUploader";
import { useRouter } from "next/navigation";
import Loading from "@/app/components/Loading/Loading";

// import toast from "react-hot-toast";

const Page = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    title: "",
    description: "",
    season: "",
    TheClass: "",
    urlYoutube: "",
  });

  const [levels, setLevels] = useState("");
  const [pending, setPending] = useState(false);
  const [urlVideo, setUrlVideo] = useState("");
  const [videoCover, setVideoCover] = useState("");
  const [levelList, setLevelList] = useState([]);
  const [unitList, setUnitList] = useState([]);
  const levelObject = levelList?.find((elm) => elm.title === levels);
  // const levelsInf = { levelId: levelObject._id };
  // add product to database
  const dataVideo = {
    ...form,
    urlVideo,
    unitList,
    videoCover,
    levelsInf: {
      levelID: levelObject?._id,
      levelTitle: levelObject?.title,
    },
  };
  const addVideo = async () => {
    // console.log("data video:", dataVideo);

    try {
      setPending(true);
      const res = await fetch("/api/admin/video", {
        method: "POST",
        body: JSON.stringify(dataVideo),
      });
      if (res.status === 201) {
        setPending(false);
        // toast.success("Product added ..");
        setForm({
          title: "",
          description: "",
          season: "",
          TheClass: "",
        });
        setUrlVideo("");
        setUnitList([]), setLevels();
        router.replace("/dashboard/video");
        router.refresh();
      }
    } catch (err) {
      console.log(err);
    } finally {
      setPending(false);
    }
  };

  return (
    <div className="w-full bg-slate-200">
      {pending ? (
        <Loading />
      ) : (
        <>
          <h1 className="font-TitleFont text-blue-900 my-3 text-xl md:text-3xl font-semibold  mb-8">
            إضافة فيديو جديد
          </h1>
          {/* info product  */}
          <div className="">
            <FormAddVideo
              form={form}
              setForm={setForm}
              levels={levels}
              setLevels={setLevels}
              levelList={levelList}
              setLevelList={setLevelList}
              unitList={unitList}
              setUnitList={setUnitList}
            />
          </div>
          <div className="mdl:flex gap-2">
            <div className="mdl:w-1/2 rounded-lg  flex flex-col justify-center items-center bg-green-100">
              {videoCover === "" ? (
                <UploadVideoCover setVideoCover={setVideoCover} />
              ) : (
                <div className=" flex justify-center items-center">
                  <img
                    src={videoCover}
                    alt="videoCover"
                    className="rounded-lg w-[140px] h-[220px] object-fill "
                  />
                </div>
              )}
            </div>

            <div className="mdl:w-1/2 p-2 border-1 rounded-lg flex flex-col justify-center items-center gap-4 bg-green-200">
              {urlVideo === "" ? (
                <UploadVideo setUrlVideo={setUrlVideo} />
              ) : (
                <div className=" flex justify-center items-center">
                  <video src={urlVideo} controls style={{ width: "150px" }} />
                </div>
              )}
            </div>
          </div>
          <div className=" flex justify-center items-center rounded border text-sm h-[40px] bg-blue-400 text-gray-800">
            <button className="text-[16px] w-full h-full" onClick={addVideo}>
              {pending ? "Sending..." : "إضافة الفيديو"}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Page;

// {urlVideo !== "" && (
//   <div className="my-1 mr-2 bg-slate-50 rounded-md">
//     {/* <CldVideoPlayer width="600" height="450" src={urlVideo.url} /> */}
//     <VideoPlayer urlVideo={urlVideo} />
//   </div>
// )}
