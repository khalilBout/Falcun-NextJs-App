"use client";
import React from "react";
import Image from "next/image";
import { HiOutlineTrash } from "react-icons/hi";
import { CldUploadWidget } from "next-cloudinary";

import { useRouter } from "next/navigation";

const BoxImage = ({ contentBook, setContentBook }) => {
  const route = useRouter();

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
                src={item.url}
                alt={item.url}
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
      <div className="w-[140px] h-[220px] rounded-md flex justify-center items-center">
        <CldUploadWidget
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
        </CldUploadWidget>
      </div>
    </div>
  );
};

export default BoxImage;
