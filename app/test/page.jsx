import UploadImgForm from "@/app/components/Upload/UploadImgForm";
import UploadVideoForm from "@/app/components/Upload/UploadVideoForm";

const Home = () => {
  return (
    <>
      <div>
        <h1>رفع الصور </h1>
        <UploadImgForm />
      </div>

      <div>
        <h1>رفع الفيديو </h1>
        <UploadVideoForm />
      </div>
    </>
  );
};

export default Home;
