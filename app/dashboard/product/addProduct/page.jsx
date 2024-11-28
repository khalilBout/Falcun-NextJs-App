"use client";
import React, { useState } from "react";
import FormAddProduct from "@/Utils/Forms/FormAddProduct";
import UploadImg from "@/app/UiComponents/Ui/UploadImg";
import UploadListImage from "@/app/UiComponents/Ui/UploadListImage";
// import UploadBookImg from "@/app/components/Upload/UploadBookImg";
// import BoxImage from "@/app/components/Upload/BoxImage";
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
    category: "",
  });
  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");
  // const [category, setCategory] = useState("");
  const [mainImg, setMainImg] = useState("");
  const [listImage, setListImage] = useState([]);
  // add product to database
  const dataProduct = {
    title: form.title,
    category: form.category,
    description: form.description,
    mainImg,
    listImage,
  };
  const addProduct = async () => {
    console.log("data sending:", dataProduct);
    try {
      setPending(true);
      const res = await fetch("/api/product", {
        method: "POST",
        body: JSON.stringify(dataProduct),
      });
      if (res.status === 201) {
        setPending(false);
        // toast.success("Product added ..");
        setForm({
          title: "",
          description: "",
          category: "",
        });
        setMainImg("");
        setListImage([]);

        router.replace("/dashboard/product");
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
            إضافة منتج
          </h1>
          {/* info product  */}
          <div className="">
            <FormAddProduct form={form} setForm={setForm} />
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
                    صورة المنتج{" "}
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
                    صورة أخرى للمنتج{" "}
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
                <div className="w-full ">
                  <UploadListImage
                    listImage={listImage}
                    setListImage={setListImage}
                  />
                </div>
              )}
            </div>
          </div>

          <div className=" flex justify-center items-center rounded text-[18px] h-[40px] bg-green-200 hover:bg-green-400 text-gray-800">
            <button className="text-[16px] w-full h-full" onClick={addProduct}>
              {pending ? "Sending..." : "إضافة منتج"}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Page;
