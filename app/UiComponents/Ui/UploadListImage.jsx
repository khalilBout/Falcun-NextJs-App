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
    <div className=" rounded-md bg-red-200 hover:bg-red-400 w-[170px]">
      <CldUploadButton
        uploadPreset="falcun"
        className="p-2  text-[18px] font-semibold font-fontTitle rounded-xl cursor-pointer"
        onUpload={handelUpload}
      >
        إضافة صور أخرى{" "}
      </CldUploadButton>
    </div>
  );
};

export default UploadListImage;
