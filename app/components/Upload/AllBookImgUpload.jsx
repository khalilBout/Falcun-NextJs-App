import React from "react";
import { CldUploadWidget } from "next-cloudinary";

const AllBookImgUpload = ({ setContentBook }) => {
  return (
    <div className="w-full h-full flex justify-center items-start font-TitleFont text-xl rounded-md">
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
              className="w-[180px] h-[40px] mt-6 px-4 py-1 rounded-full bg-green-300 "
              onClick={() => open()}
            >
              رفع صورة المذكرة
            </button>
          );
        }}
      </CldUploadWidget>
    </div>
  );
};

export default AllBookImgUpload;
