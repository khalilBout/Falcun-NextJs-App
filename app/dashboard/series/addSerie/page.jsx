"use client";
import React, { useState } from "react";
import FormAddSerie from "@/Utils/Forms/FormAddSerie";
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
    numberOfPages: 0,
    price: 0,
  });

  const [pending, setPending] = useState(false);
  const [bookCover, setBookCover] = useState("");
  const [contentBook, setContentBook] = useState([]);

  const dataSerie = {
    ...form,
    bookCover,
    contentBook,
  };
  const addSerie = async () => {
    try {
      setPending(true);
      const res = await fetch("/api/series", {
        method: "POST",
        body: JSON.stringify(dataSerie),
      });
      if (res.status === 201) {
        setPending(false);
        // toast.success("Product added ..");
        setForm({
          title: "",
          description: "",
          numberOfPages: 0,
          price: 0,
        });
        setBookCover("");
        setContentBook([]);
        router.replace("/dashboard/series");
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
            إضافة سلسلة تأسيس
          </h1>
          {/* info product  */}
          <div className="">
            <FormAddSerie form={form} setForm={setForm} />
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
            <button className="text-[16px] w-full h-full" onClick={addSerie}>
              {pending ? "Sending..." : "إضافة سلسلة"}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Page;
