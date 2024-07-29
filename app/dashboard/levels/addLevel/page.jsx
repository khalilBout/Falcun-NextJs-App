"use client";
import React, { useState } from "react";
import FormAddVideo from "@/Utils/Forms/FormAddVideo";
import { useRouter } from "next/navigation";
import Loading from "@/app/components/Loading/Loading";
// import toast from "react-hot-toast";

const Page = () => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [pending, setPending] = useState(false);
  const [className, setClassName] = useState("");
  const [listClass, setListClass] = useState([]);

  const handelTitle = (e) => {
    setTitle(e.target.value);
  };
  const handelClassName = (e) => {
    setClassName(e.target.value);
  };

  const addClassToList = (e) => {
    e.preventDefault();
    if (className !== "") {
      setListClass((prev) => [...prev, className]);
      setClassName("");
    } else {
      alert("لا يمكن إضافة قسم فارغ ");
    }
  };

  const dataLevel = {
    title,
    listClass,
  };

  // add product to database
  const addLevel = async () => {
    // console.log("data level sendin : ", dataLevel);
    try {
      setPending(true);
      const res = await fetch("/api/levels", {
        method: "POST",
        body: JSON.stringify(dataLevel),
      });
      if (res.status === 201) {
        setPending(false);
        // toast.success("Product added ..");
        setTitle("");
        setClassName("");
        setListClass([]);

        router.replace("/dashboard/levels");
      }
    } catch (err) {
      console.log(err);
    } finally {
      setPending(false);
    }
  };

  return (
    <div className="w-full bg-slate-200">
      {pending ? (
        <Loading />
      ) : (
        <>
          <h1 className="my-3 text-xl md:text-3xl font-semibold text-black mb-8">
            إضافة صف جديد
          </h1>
          {/* info product  */}
          <div className="">
            <form>
              <div className="grid lg:grid-cols-2 gap-2 mx-2 ">
                <input
                  className=" h-[40px] border-[1px] rounded-lg focus:border-pink-200 px-3 focus:border-2 outline-none m-1"
                  placeholder="المستوى "
                  type="text"
                  name="title"
                  onChange={handelTitle}
                />
              </div>
              <div className="flex gap-8 mx-2 ">
                <input
                  className=" h-[40px] min-w-[280px] border-[1px] rounded-lg focus:border-pink-200 px-3 focus:border-2 outline-none m-1"
                  placeholder="القسم  "
                  type="text"
                  name="theClass"
                  onChange={handelClassName}
                />
                <button
                  className="mx-2 px-2 py-1 text-black bg-green-200 rounded-md"
                  onClick={addClassToList}
                >
                  إضافة القسم
                </button>
              </div>
              {listClass.length > 0 && (
                <div className="flex gap-3 my-2">
                  {listClass.map((elm, ind) => (
                    <p
                      key={ind}
                      className=" text-[14px] text-red-400 bg-slate-300 px-3 py-1 rounded-full "
                    >
                      {elm}
                    </p>
                  ))}
                </div>
              )}
            </form>
          </div>

          <div
            className={`flex justify-center items-center rounded border text-sm h-[50px] bg-blue-400 text-gray-800`}
          >
            <button className="text-[16px] w-full h-full" onClick={addLevel}>
              {pending ? "إرسال " : "إضافة الصف"}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Page;
