import React from "react";
import { CldUploadWidget } from "next-cloudinary";

const UploadBookImg = ({ setBookCover }) => {
  return (
    <div className="w-full h-full flex justify-center items-center font-TitleFont text-xl rounded-sm">
      <CldUploadWidget
        uploadPreset="BravoApp"
        onSuccess={(result, { widget }) => {
          const url = result.info.secure_url;
          const public_id = result.info.public_id;
          setBookCover({
            url,
            public_id,
          });
          widget.close();
        }}
      >
        {({ open }) => {
          return (
            <button
              className=" rounded-full bg-green-300  px-2 py-1"
              onClick={() => open()}
            >
              صورالغلاف
            </button>
          );
        }}
      </CldUploadWidget>
    </div>
  );
};

export default UploadBookImg;
