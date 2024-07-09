import React from "react";
import { CldUploadWidget } from "next-cloudinary";

const UploadVideo = ({ setUrlVideo }) => {
  return (
    <div className="w-full h-full rounded-md border border-gray-200 flex justify-center items-center ">
      <CldUploadWidget
        uploadPreset="BravoApp"
        onSuccess={(result, { widget }) => {
          console.log("res:", result?.info);
          const url = result?.info.secure_url;
          const public_id = result?.info.public_id;
          const thumbnail = result?.info.thumbnail_url;
          setUrlVideo({
            url,
            public_id,
            thumbnail,
          });
          widget.close();
        }}
      >
        {({ open }) => {
          return (
            <button
              className="text-xl font-TitleFont font-semibold text-red-700 px-4 py-1 bg-blue-300 rounded-md"
              onClick={() => open()}
            >
              رفع الفيديو
            </button>
          );
        }}
      </CldUploadWidget>
    </div>
  );
};

export default UploadVideo;

// "use client";
// import React from "react";
// import { CldUploadWidget } from "next-cloudinary";
// import { CldUploadButton } from "next-cloudinary";

// const UploadVideo = ({ setUrlVideo }) => {
//   const handelUpload = (result) => {
//     const info = result.info;
//     // const publicId = result.public_id;
//     if ("secure_url" in info && "public_id" in info) {
//       // data of image
//       const url = info.secure_url;
//       const public_id = info.public_id;

//       setUrlVideo({
//         url,
//         public_id,
//       });
//     }
//   };
//   return (
//     <div className="w-[220px] h-[120px] rounded-md border border-gray-600">
//       <CldUploadButton
//         uploadPreset="BravoApp"
//         className="w-full h-full py-2 px-1 text-[14px] rounded-xl bg-slate-100 cursor-pointer"
//         onUpload={handelUpload}
//       >
//         رفع الفيديو
//       </CldUploadButton>
//     </div>
//   );
// };

// export default UploadVideo;
