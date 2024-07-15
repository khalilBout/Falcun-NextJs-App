"use client";
import React, { useState } from "react";
import FormAddBook from "@/Utils/Forms/FormAddBook";
import UploadBookImg from "@/app/components/Upload/UploadBookImg";
import BoxImage from "@/app/components/Upload/BoxImage";
import { useRouter } from "next/navigation";
import Loading from "@/app/components/Loading/Loading";
// import toast from "react-hot-toast";

const Page = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    title: "",
    description: "",
    season: "",
    numberOfPages: 0,
    price: 0,
  });

  const [levels, setLevels] = useState("");
  const [pending, setPending] = useState(false);
  const [bookCover, setBookCover] = useState("");
  const [contentBook, setContentBook] = useState([]);
  const [levelList, setLevelList] = useState([]);
  const levelObject = levelList?.find((elm) => elm.title === levels);
  // const levelsInf = { levelId: levelObject._id };
  console.log("bookCover:", bookCover);
  console.log("contentBook:", contentBook);
  // add product to database
  const dataBook = {
    ...form,
    bookCover,
    contentBook,
    levelsInf: {
      levelID: levelObject?._id,
      levelTitle: levelObject?.title,
    },
  };
  const addBook = async () => {
    try {
      setPending(true);
      const res = await fetch("/api/books", {
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
          numberOfPages: 0,
          price: 0,
        });
        setBookCover("");
        setContentBook([]);
        setLevels([]);
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
          <div className="flex gap-3 m-1">
            <div className="w-[140px] h-[220px] border-1 rounded-lg  flex flex-col justify-center items-center bg-green-100">
              {bookCover === "" ? (
                <UploadBookImg setBookCover={setBookCover} />
              ) : (
                <div className="w-[140px] h-[220px]flex justify-center items-center">
                  <img
                    src={bookCover.url}
                    alt={bookCover.url}
                    className="rounded-lg w-[140px] h-[220px] object-fill "
                  />
                </div>
              )}
            </div>

            <div className="w-[140px] h-[220px] bg-blue-100 rounded-md">
              <BoxImage
                contentBook={contentBook}
                setContentBook={setContentBook}
              />
            </div>
          </div>
          <div className=" flex justify-center items-center rounded border text-sm h-[40px] bg-blue-400 text-gray-800">
            <button className="text-[16px] w-full h-full" onClick={addBook}>
              {pending ? "Sending..." : "إضافة الكتاب"}
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
