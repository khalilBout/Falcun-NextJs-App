import React, { useState } from "react";

const UploadVideoCover = ({ setVideoCover }) => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

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
        setVideoCover(getUrl);
        setFile(null);
      }
      setUploading(false);
    } catch (error) {
      console.log(error);
      setUploading(false);
    }
  };

  return (
    <div className="flex justify-center items-center font-TitleFont rounded-md w-[320px] h-[220px]">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center"
      >
        <input
          type="file"
          className="my-3"
          accept="image/*"
          onChange={handleFileChange}
        />
        <button
          type="submit"
          className=" bg-green-400 my-3 px-2 py-1 rounded-lg cursor-pointer"
          disabled={!file || uploading}
        >
          {uploading ? "جاري الرفع ..." : "رفع غلاف الفيديو"}
        </button>
      </form>
    </div>
  );
};

export default UploadVideoCover;

// <CldUploadWidget
//         uploadPreset="BravoApp"
//         onSuccess={(result, { widget }) => {
//           const url = result.info.secure_url;
//           const public_id = result.info.public_id;
//           setVideoCover({
//             url,
//             public_id,
//           });
//           widget.close();
//         }}
//       >
//         {({ open }) => {
//           return (
//             <button
//               className=" rounded-full bg-green-200  px-2 py-1"
//               onClick={() => open()}
//             >
//               صورالغلاف
//             </button>
//           );
//         }}
//       </CldUploadWidget>
