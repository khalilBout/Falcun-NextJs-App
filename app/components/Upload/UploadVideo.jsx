import React, { useState } from "react";

// import { CldUploadWidget } from "next-cloudinary";

const UploadVideo = ({ setUrlVideo }) => {
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
      const response = await fetch("/api/uploadVidoe", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        const getUrl = `https://bravo-web-site.s3.eu-north-1.amazonaws.com/${data.fileName}`;
        setUrlVideo(getUrl);
        setFile(null);
      }
      setUploading(false);
    } catch (error) {
      console.log(error);
      setUploading(false);
    }
  };

  return (
    <div className="w-[280px] h-[360px] rounded-md flex justify-center items-center ">
      <form onSubmit={handleSubmit}>
        <input type="file" accept="video/*" onChange={handleFileChange} />
        <button
          type="submit"
          className=" min-w-[130px] my-3 px-2 py-1"
          disabled={!file || uploading}
        >
          {uploading ? (
            <span className="bg-red-400 w-full  rounded-lg cursor-wait  px-2 py-1">
              جاري الرفع ...
            </span>
          ) : (
            <span className="bg-green-400 w-full  rounded-lg cursor-pointer  px-2 py-1">
              رفع الفيديو
            </span>
          )}
        </button>
      </form>
    </div>
  );
};

export default UploadVideo;

{
  /* <CldUploadWidget
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
      </CldUploadWidget> */
}
