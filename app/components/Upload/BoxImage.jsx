"use client";
import React from "react";
import Image from "next/image";
import { HiOutlineTrash } from "react-icons/hi";
import { CldUploadWidget } from "next-cloudinary";
import { useState } from "react";

import { useRouter } from "next/navigation";

const BoxImage = ({ contentBook, setContentBook }) => {
  const route = useRouter();

  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const addUrl = (url) => {
    setContentBook((prv) => [...prv, url]);
  };
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/uploadImg", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        const getUrl = `https://bravo-web-site.s3.eu-north-1.amazonaws.com/${data.fileName}`;
        addUrl(getUrl);
        // setFile(null);
      }
      setUploading(false);
    } catch (error) {
      console.log(error);
      setUploading(false);
    }
  };

  console.log("list url:", contentBook);
  return (
    <div className="rounded-md m-1 flex justify-start gap-2 ">
      {contentBook?.length > 0 && (
        <div className="flex gap-2">
          {contentBook?.map((item, ind) => (
            <div
              className=" overflow-hidden w-[140px] h-[220px] rounded-md flex justify-center items-center relative"
              key={ind}
            >
              <img
                src={item}
                alt=""
                className="rounded-lg w-[140px] h-[220px] object-fill "
              />
              {/* <button
                className="absolute top-1 right-1 p-1 rounded-full hover:bg-red-400 "
                onClick={() => console.log(item.public_id)}
              >
                <HiOutlineTrash size={18} />
              </button> */}
            </div>
          ))}
        </div>
      )}
      <div className="w-[280px] h-[220px] p-2 rounded-md flex justify-center items-center bg-slate-200">
        {/* add content books  */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center"
        >
          <input type="file" accept="image/*" onChange={handleFileChange} />
          <button
            type="submit"
            className="bg-green-300 px-2 py-1 rounded-lg my-3"
            disabled={!file || uploading}
          >
            {uploading ? "جاري الرفع ..." : "رفع صورة الصفحة"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BoxImage;

{
  /* <CldUploadWidget
          className="flex justify-center items-center"
          uploadPreset="BravoApp"
          onSuccess={(result, { widget }) => {
            const url = result.info.secure_url;
            const public_id = result.info.public_id;
            setContentBook((per) => [...per, { url, public_id }]);
            widget.close();
          }}
        >
          {({ open }) => {
            return (
              <button
                className=" text-center font-semibold text-[18px] px-3 py-1 rounded-full bg-green-300 "
                onClick={() => open()}
              >
                الصفحات
              </button>
            );
          }}
        </CldUploadWidget> */
}
