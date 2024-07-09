"use client";
import React, { useState } from "react";
import FormAddBook from "@/Utils/Forms/FormAddBook";
import UploadBookImg from "@/app/components/Upload/UploadBookImg";
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
    price: 0,
  });

  const [levels, setLevels] = useState("");
  const [pending, setPending] = useState(false);
  const [urlBook, setUrlBook] = useState("");
  const [levelList, setLevelList] = useState([]);
  const levelObject = levelList?.find((elm) => elm.title === levels);
  // const levelsInf = { levelId: levelObject._id };

  // add product to database
  const dataBook = {
    ...form,
    urlBook,
    levelsInf: {
      levelID: levelObject?._id,
      levelTitle: levelObject?.title,
    },
  };
  const addBook = async () => {
    console.log("data video:", dataBook);
    try {
      setPending(true);
      const res = await fetch("/api/admin/book", {
        method: "POST",
        body: JSON.stringify(dataBook),
      });
      if (res.status === 201) {
        setPending(false);
        // toast.success("Product added ..");
        setForm({
          title: "",
          description: "",
          season: "",
          TheClass: "",
          price: 0,
        });
        setUrlBook("");
        setLevels();
        router.replace("/dashboard/books");
      }
    } catch (err) {
      console.log(err);
    } finally {
      setPending(false);
    }
  };

  return (
    <div className="w-full">
      {pending ? (
        <Loading />
      ) : (
        <>
          <h1 className=" font-TitleFont my-3 text-xl md:text-3xl font-semibold text-black mb-8">
            إضافة مذكرة مدرسية
          </h1>
          {/* info product  */}
          <div className="">
            <FormAddBook
              form={form}
              setForm={setForm}
              levels={levels}
              setLevels={setLevels}
              levelList={levelList}
              setLevelList={setLevelList}
            />
          </div>
          <div className="m-4 p-2 border-1 rounded-lg h-[120px] flex flex-col justify-center items-center gap-4 bg-green-100">
            {urlBook === "" ? (
              <UploadBookImg setUrlBook={setUrlBook} />
            ) : (
              <div className="w-[180px] h-[220px] flex justify-center items-center">
                <h1 className="font-TitleFont text-xl font-medium text-red-700">
                  {" "}
                  تم رفع الصورة بنجاح{" "}
                </h1>
              </div>
            )}
          </div>
          <div className=" flex justify-center items-center rounded border text-sm h-[40px] bg-blue-400 text-gray-800">
            <button className="text-[16px] w-full h-full" onClick={addBook}>
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
