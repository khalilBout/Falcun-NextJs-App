"use client";
import { useState } from "react";

const UploadVideoForm = () => {
  const [url, setUrl] = useState(null);
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
        setUrl(getUrl);
        setFile(null);
      }
      setUploading(false);
    } catch (error) {
      console.log(error);
      setUploading(false);
    }
  };
  console.log("url:", url);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="file" accept="video/*" onChange={handleFileChange} />
        <button type="submit" disabled={!file || uploading}>
          {uploading ? "جاري الرفع ..." : "رفع الفيديو"}
        </button>
      </form>
    </>
  );
};

export default UploadVideoForm;
