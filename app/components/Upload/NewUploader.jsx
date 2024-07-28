import { useState } from "react";
// import axios from 'axios';

export default function Home() {
  const [files, setFiles] = useState([]);
  const [previews, setPreviews] = useState([]);

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files);
    setFiles(newFiles);

    const newPreviews = newFiles.map((file) => URL.createObjectURL(file));
    setPreviews(newPreviews);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    files.forEach((file) => {
      formData.append("files", file);
    });

    try {
      // await axios.post('/api/upload', formData, {
      //   headers: {
      //     'Content-Type': 'multipart/form-data',
      //   },
      // });
      alert("Files uploaded successfully!");
    } catch (error) {
      console.error("Error uploading files:", error);
      alert("Error uploading files");
    }
  };

  return (
    <div>
      <h1>Upload Files</h1>
      <input type="file" multiple onChange={handleFileChange} />
      <div>
        {previews.map((src, index) => (
          <div key={index}>
            {files[index].type.startsWith("image/") ? (
              <img src={src} alt="preview" style={{ width: "200px" }} />
            ) : (
              <video src={src} controls style={{ width: "200px" }} />
            )}
            <button
              onClick={() => {
                setFiles(files.filter((_, i) => i !== index));
                setPreviews(previews.filter((_, i) => i !== index));
              }}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      {files.length > 0 && <button onClick={handleUpload}>Upload</button>}
    </div>
  );
}
