"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import FormContact from "@/app/components/contactPage/FormContact";
import contactImg from "@/public/image/contactImg.png";
import contactImg2 from "@/public/image/contactImg2.png";

const page = () => {
  const [addressClient, setAddressClient] = useState();
  const [Lib, setLib] = useState([]);
  useEffect(() => {
    const fetchLib = async () => {
      const res = await fetch("/api/libry", {
        method: "GET",
      });
      const data = await res.json();
      setLib(data);
    };
    fetchLib();
  }, []);

  return (
    <div className="flex flex-col mdl:flex-row gap-2">
      {/* form section  */}
      <div className=" relative mdl:w-1/2 h-[490px] sm:h-[560px] mdl:h-[580px] m-8">
        <div className="w-full absolute top-0 left-0 flex justify-center items-center -z-10">
          <Image
            width={560}
            height="auto"
            // fill
            className=""
            src={contactImg}
            alt="contact Image"
          />
        </div>
        {/* form  */}
        <div className="h-full rounded-md flex justify-center items-center bg-blue-200/60">
          <FormContact setAddressClient={setAddressClient} />
        </div>
      </div>

      {/* info section  */}
      <div className=" relative mdl:w-1/2 h-[490px] sm:h-[560px] mdl:h-[580px] m-8 ">
        {/* <div className="w-full absolute top-0 left-0 flex justify-center items-center -z-10">
          <Image
            width={400}
            height="auto"
            // fill
            className=""
            src={contactImg2}
            alt="contact Image 2"
          />
        </div> */}
        {/*   */}
        <div className="h-full rounded-xl ">
          <div className="w-full h-full ">
            <div className="w-full flex flex-col font-TitleFont m-4 py-2">
              <h1 className="text-2xl sml:text-3xl font-semibold py-1">
                معلومات الإتصال
              </h1>
              <h3 className="text-[14px] pb-2 sml:text-xl mdl:text-2xl font-semibold  text-center text-gray-800">
                جاهزون دائما لتلقى أرائكم وإستفساراتكم
              </h3>
              <div className="px-2 text-[14px] sml:text-xl">
                <h2 className=" font-medium text-gray-700">
                  الهاتف - الواتساب :{" "}
                </h2>
                <h2 className=" px-4 font-medium text-black">0096550133774</h2>
                <h2 className="px-4 font-medium text-black">0096550653733</h2>
              </div>

              <div className="px-2 text-[14px] sml:text-xl flex justify-start items-start flex-wrap">
                <h2 className=" font-medium text-gray-700">
                  {" "}
                  البريد الإلكتروني :{" "}
                </h2>
                <h2 className=" font-medium text-gray-800">
                  {" "}
                  bravo.kuwait@gmail.com
                </h2>
              </div>
            </div>

            <div className="w-full flex flex-col font-TitleFont m-4 py-2">
              <h1 className="text-2xl sml:text-3xl font-semibold py-1">
                المكتبات التي نتعامل معها
              </h1>
              <h3 className="text-[14px] sml:text-xl mdl:text-2xl font-semibold  text-center text-gray-800">
                يمكنكم أيضا إقتناء مذكراتنا من المكتبات التالية
              </h3>
              <div className=" m-4">
                {Lib?.map((elm, ind) => (
                  <div className="my-2 bg-emerald-300/50 rounded-xl px-4 py-2">
                    <div className=" px-2 text-[14px] sml:text-xl flex justify-start items-start flex-wrap">
                      <h2 className=" font-medium text-gray-800">المكتبة : </h2>
                      <h2 className=" font-medium text-black">{elm.name}</h2>
                    </div>

                    <div className="px-2 text-[14px] sml:text-xl flex justify-start items-start flex-wrap">
                      <h2 className=" font-medium text-gray-800">العنوان :</h2>
                      <h2 className=" font-medium text-black">
                        {elm.address}{" "}
                      </h2>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
