"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Loading from "@/app/components/Loading/Loading";
// import toast from "react-hot-toast";

const Page = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [pending, setPending] = useState(false);
  const [address, setAddress] = useState("");

  const handelName = (e) => {
    setName(e.target.value);
  };
  const handelAddress = (e) => {
    setAddress(e.target.value);
  };

  //   const addClassToList = (e) => {
  //     e.preventDefault();
  //     if (dataClass.name !== "") {
  //       setListClass((prev) => [...prev, dataClass]);
  //       setClassName("");
  //     } else {
  //       alert("لا يمكن إضافة قسم فارغ ");
  //     }
  //   };

  const dataLib = {
    name,
    address,
  };

  // add product to database
  const addLibry = async () => {
    // console.log("data level sendin : ", dataLevel);
    try {
      setPending(true);
      const res = await fetch("/api/libry", {
        method: "POST",
        body: JSON.stringify(dataLib),
      });
      if (res.status === 201) {
        setPending(false);
        // toast.success("Product added ..");
        setName("");
        setAddress("");
        router.refresh();
        router.replace("/dashboard/library");
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
            إضافة مكتبة جديدة
          </h1>
          {/* info product  */}
          <div className="">
            <form>
              <div className="flex flex-col gap-2 mx-2 ">
                <input
                  className=" h-[40px] border-[1px] rounded-lg focus:border-pink-200 px-3 focus:border-2 outline-none m-1"
                  placeholder="أسم المكتبة "
                  type="text"
                  name="name"
                  onChange={handelName}
                />
              </div>
              <div className="mx-2">
                <textarea
                  rows={2}
                  className="w-full border-[1px] rounded-lg focus:border-pink-200 px-3 focus:border-2 outline-none m-1"
                  placeholder=" عنوان المكتبة  "
                  type="text"
                  name="address"
                  onChange={handelAddress}
                />
              </div>
            </form>
          </div>

          <div
            className={`flex justify-center items-center rounded border text-sm h-[50px] bg-blue-400 text-gray-800`}
          >
            <button className="text-[16px] w-full h-full" onClick={addLibry}>
              {pending ? "إرسال " : "إضافة المكتبة"}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Page;
