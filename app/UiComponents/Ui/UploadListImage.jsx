import React from "react";
import { CldUploadButton } from "next-cloudinary";

const UploadListImage = ({ setListImage }) => {
  const handelUpload = (result) => {
    const info = result.info;
    console.log("info list img", info);
    // const publicId = result.public_id;
    if ("secure_url" in info && "public_id" in info) {
      // data of image
      const urlImage = info.secure_url;
      //   const public_id = info.public_id;

      setListImage((prev) => [
        ...prev,
        // {
        //   urlImage,
        //   public_id,
        // },
        urlImage,
      ]);
      // setPublicId((prev) => [...prev, public_id]);
    }
  };
  return (
    <div className=" rounded-md bg-red-300">
      <CldUploadButton
        uploadPreset="falcun"
        className="py-2 px-4  text-[22px] font-semibold font-fontTitle rounded-xl cursor-pointer"
        onUpload={handelUpload}
      >
        إضافة صور أخرى للمنتج
      </CldUploadButton>
    </div>
  );
};

export default UploadListImage;
