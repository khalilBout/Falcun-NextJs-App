import React, { useState } from "react";

const UploadBookImg = ({ setBookCover }) => {
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
        setBookCover(getUrl);
        setFile(null);
      }
      setUploading(false);
    } catch (error) {
      console.log(error);
      setUploading(false);
    }
  };

  return (
    <div className="w-[300px] h-[220px] p-2 rounded-md bg-slate-200">
      <form onSubmit={handleSubmit}>
        <input type="file" accept="image/*" onChange={handleFileChange} />
        <button
          type="submit"
          className=" px-2 py-1 rounded-lg my-3 bg-green-200"
          disabled={!file || uploading}
        >
          {uploading ? "جاري الرفع ..." : "رفع صورة الغلاف"}
        </button>
      </form>
    </div>
  );
};

export default UploadBookImg;
