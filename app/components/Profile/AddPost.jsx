"use client";
import React, { useState } from "react";
import FormAddPost from "@/Utils/Forms/PostData/FormAddPost";
import AlbumsPost from "@/Utils/Forms/PostData/AlbumsPost";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Loading from "@/app/components/Loading/Loading";

// import toast from "react-hot-toast";
// image
import img from "@/public/img/img1.jpg";

const AddPost = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
  });
  const [urlImage, setUrlImage] = useState([
    {
      urlImage: img,
      public_id: "01",
    },
  ]);
  const [pending, setPending] = useState(false);
  //   const [listModels, setListModels] = useState([]);

  //   const finalPrice = form?.price - form?.price * form?.priceDrop * 0.01;

  const handelChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // add Post to database
  const addPost = async () => {
    setPending(true);
    console.log("Data Post:", {
      ...form,
      urlImage,
    });
    setPending(false);

    // try {
    //   setPending(true);
    //   const res = await fetch("/api/admin/productAdmin", {
    //     method: "POST",
    //     body: JSON.stringify({
    //       ...form,
    //     }),
    //   });
    //   // const data = await res.json();
    //   if (res.status === 201) {
    //     setPending(false);
    //     // toast.success("Product added ..");
    //     setForm({
    //       title: "",
    //       desc: "",
    //       category: "",
    //     });
    //     // router.replace("/dashboard/products");
    //   }
    // } catch (err) {
    //   console.log(err);
    // } finally {
    //   setPending(false);
    // }
  };

  return (
    <div className="w-full bg-slate-100/30 p-4">
      {pending ? (
        <Loading />
      ) : (
        <>
          <h1 className="my-3 text-xl md:text-3xl font-semibold text-black mb-8">
            Create New Post
          </h1>
          <div className="">
            <FormAddPost handelChange={handelChange} />
          </div>

          <div className="m-2 p-2 border-1 rounded-lg">
            {/* <AlbumsPost urlImage={urlImage} setUrlImage={setUrlImage} /> */}

            {urlImage && urlImage.length > 0 ? (
              <>
                <hr className=" bg-red-900" />
                <div className="w-full flex gap-2 bg-blue-100 ">
                  {urlImage?.map((item, index) => (
                    <div
                      key={index}
                      className=" flex flex-row items-start justify-start gap-2 w-[200px] m-2"
                    >
                      <div className=" bg-slate-50 rounded-md">
                        <Image
                          src={item.urlImage}
                          width={100}
                          height={145}
                          alt={item.index}
                          className=" bg-red-200  border-r-2 border-red-900"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <></>
            )}
          </div>

          <div
            className={`flex justify-center items-center rounded border text-sm h-[50px] ${
              pending ? "text-gray-300 bg-red-100" : "bg-blue-400 text-gray-800"
            } `}
          >
            <button className="text-[16px] w-full h-full" onClick={addPost}>
              {pending ? "Sending..." : "Add Post"}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default AddPost;
