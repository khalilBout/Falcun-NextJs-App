"use client";
import React, { useState, useRef } from "react";
import { FaTelegramPlane } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const FormContact = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        () => {
          setError(true);
        }
      );
  };

  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   setError(false);
  //   setSuccess(false);

  //   emailjs
  //     .sendForm(
  //       process.env.NEXT_PUBLIC_SERVICE_ID,
  //       process.env.NEXT_PUBLIC_TEMPLATE_ID,
  //       form.current,
  //       process.env.NEXT_PUBLIC_PUBLIC_KEY
  //       // {
  //       //   publicKey: ,
  //       // }
  //     )
  //     .then(
  //       () => {
  //         setSuccess(true);
  //         console.log("Success**************");
  //         form.current.reset();
  //       },
  //       (error) => {
  //         console.log("error:", error);
  //         setError(true);
  //       }
  //     );
  // };

  return (
    <div className="w-full h-full flex flex-col font-TitleFont">
      <form
        ref={form}
        onSubmit={sendEmail}
        className=" flex items-center justify-center my-4"
      >
        <div className="px-2 py-4 flex flex-col justify-start ">
          <h1 className="text-center mb-6 font-bold text-xl mdl:text-2xl">
            يسعد فريق برافو الاطلاع على آرائكم واقتراحاتكم
          </h1>
          <div className="flex flex-col gap-3">
            {/* client name */}
            <div className="flex flex-col gap-1">
              <p className="font-titleFont text-base font-semibold text-gray-600">
                الاسم
              </p>
              <input
                name="user_name"
                className="placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                type="text"
                placeholder="الإسم ..."
              />
            </div>

            {/* Phone Number */}
            <div className="flex flex-col gap-.5">
              <p className="font-titleFont text-base font-semibold text-gray-600">
                البريد الإلكتروني{" "}
              </p>
              <input
                name="user_email"
                className=" placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                type="text"
                placeholder="cc@cc.com"
              />
            </div>
            {/* Address */}
            <div className="flex flex-col gap-.5">
              <p className="font-titleFont text-base font-semibold text-gray-600">
                الرسالة{" "}
              </p>
              <textarea
                rows={6}
                name="user_message"
                className=" placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                type="text"
                placeholder="ماتود إخبارنا به  .... "
              />
            </div>

            <div className="w-full flex justify-end">
              <button
                type="submit"
                // onSubmit={sendEmail}
                className=" flex justify-center items-center mx-4 w-[120px] bg-emerald-300 hover:bg-emerald-500 px-3 py-1 text-gray-600 border-1 border-black font-bold rounded-full hover:text-black duration-300"
              >
                <span className="px-2">إرسال</span>
                <FaTelegramPlane size={20} className="text-emerald-900" />
              </button>
            </div>

            {success && (
              <span className="text-green-600 font-semibold">
                شكرا ، لقد تم إرسال الرسالة .
              </span>
            )}
            {error && (
              <span className="text-red-600 font-semibold">
                عذرا لم يتم إرسال الرسال ، أعد مرة أخىى .
              </span>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormContact;
