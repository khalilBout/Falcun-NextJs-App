"use client";
import React, { useState } from "react";
import FormAddBlog from "@/Utils/Forms/FormAddBlog";
import UploadImg from "@/app/UiComponents/Ui/UploadImg";
import UploadListImage from "@/app/UiComponents/Ui/UploadListImage";
import { useRouter } from "next/navigation";
import Loading from "@/app/UiComponents/Loading/Loading";
import Image from "next/image";
// import toast from "react-hot-toast";

const Page = () => {
  const router = useRouter();
  const [pending, setPending] = useState(false);

  const [form, setForm] = useState({
    title: "",
    description: "",
  });

  const [mainImg, setMainImg] = useState("");
  const [listImage, setListImage] = useState([]);
  // add product to database
  const dataBlog = {
    title: form.title,
    description: form.description,
    mainImg,
    listImage,
  };
  const addBlog = async () => {
    try {
      setPending(true);
      const res = await fetch("/api/blog", {
        method: "POST",
        body: JSON.stringify(dataBlog),
      });
      if (res.status === 201) {
        setPending(false);
        // toast.success("Product added ..");
        setForm({
          title: "",
          description: "",
        });
        setMainImg("");
        setListImage([]);

        router.replace("/dashboard/blog");
      }
    } catch (err) {
      console.log(err);
    } finally {
      setPending(false);
    }
  };
  return (
    <div className="w-full my-12">
      {pending ? (
        <Loading />
      ) : (
        <>
          <h1 className=" font-TitleFont my-3 text-xl md:text-3xl font-semibold text-black mb-8">
            إضافة مدونة
          </h1>
          {/* info product  */}
          <div className="">
            <FormAddBlog form={form} setForm={setForm} />
          </div>

          {/* image section  */}
          <div className=" flex gap-2 min-h-[270px]  p-4">
            {/* main image  */}
            <div className="">
              {mainImg === "" ? (
                <UploadImg setMainImg={setMainImg} />
              ) : (
                <div className="min-w-[180px]">
                  <h1 className=" py-4 text-xl font-fontTitle h-full">
                    صورة المدونة{" "}
                  </h1>
                  <Image
                    src={mainImg}
                    alt="main image"
                    width={110}
                    height={180}
                    quality={100}
                    className=" mr-8 w-[90px] h-[160px] object-cover object-center"
                  />
                </div>
              )}
            </div>
            {/* list of image  */}
            <div className="w-full h-full ">
              {listImage?.length > 0 ? (
                <div className="min-w-[180px] h-full min-h-[270px]">
                  <h1 className=" py-4 text-xl font-fontTitle h-full">
                    صورة أخرى للمدونة{" "}
                  </h1>

                  <div className="flex items-center gap-4 flex-wrap">
                    <div className="flex gap-2">
                      {listImage?.map((elm, ind) => (
                        <div key={ind}>
                          <Image
                            src={elm}
                            alt="more image of product"
                            width={110}
                            height={180}
                            quality={100}
                            className=" mr-8 w-[90px] h-[160px] object-cover object-center"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="">
                      <UploadListImage
                        listImage={listImage}
                        setListImage={setListImage}
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="w-full h-[270px] flex items-center justify-center">
                  <UploadListImage
                    listImage={listImage}
                    setListImage={setListImage}
                  />
                </div>
              )}
            </div>
          </div>

          <div className=" flex justify-center items-center rounded text-[18px] h-[40px] bg-green-200 hover:bg-green-400 text-gray-800">
            <button className="text-[16px] w-full h-full" onClick={addBlog}>
              {pending ? "Sending..." : "إضافة مدونة "}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Page;
