"use client";
import React, { useState } from "react";
import { FaTelegramPlane } from "react-icons/fa";

const FormContact = ({ setDataMessage }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  // ============= Error Msg  =================
  const [errName, setErrName] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errMessage, setErrMessage] = useState("");

  const handelChangeForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const AddMessage = (e) => {
    e.preventDefault();
    // checked valid data
    if (!form.name) {
      setErrName("أكتب إسمك");
    }

    if (!form.email) {
      setErrEmail("أدخل بريدك الإلكتروني");
    }

    if (!form.message) {
      setErrMessage("أكتب الرسالة");
    }

    if (form.name && form.email && form.message) {
      setDataMessage(form);

      setForm({
        name: "",
        email: "",
        message: "",
      });
    }
  };
  return (
    <div className="w-full h-full flex flex-col font-TitleFont">
      <form className=" flex items-center justify-center my-4">
        <div className="px-2 py-4 flex flex-col justify-start ">
          <h1 className="text-center mb-6 font-bold text-2xl mdl:text-2xl">
            يسعد فريق برافو الإطلاع على ارائكم وإقتراحاتكم
          </h1>
          <div className="flex flex-col gap-3">
            {/* client name */}
            <div className="flex flex-col gap-1">
              <p className="font-titleFont text-base font-semibold text-gray-600">
                الإسم
              </p>
              <input
                onChange={handelChangeForm}
                name="name"
                className="placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                type="text"
                placeholder="الإسم ..."
              />
              {errName && (
                <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                  <span className="font-bold italic mr-1">!</span>
                  {errName}
                </p>
              )}
            </div>

            {/* Phone Number */}
            <div className="flex flex-col gap-.5">
              <p className="font-titleFont text-base font-semibold text-gray-600">
                البريد الإلكتروني{" "}
              </p>
              <input
                onChange={handelChangeForm}
                name="email"
                className=" placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                type="text"
                placeholder="cc@cc.com"
              />
              {errEmail && (
                <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                  <span className="font-bold italic mr-1">!</span>
                  {errEmail}
                </p>
              )}
            </div>
            {/* Address */}
            <div className="flex flex-col gap-.5">
              <p className="font-titleFont text-base font-semibold text-gray-600">
                الرسالة{" "}
              </p>
              <textarea
                rows={6}
                onChange={handelChangeForm}
                name="message"
                className=" placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                type="text"
                placeholder="ماتود إخبارنا به  .... "
              />
              {errMessage && (
                <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                  <span className="font-bold italic mr-1">!</span>
                  {errMessage}
                </p>
              )}
            </div>

            <div className="w-full flex justify-end">
              <button
                onClick={AddMessage}
                className=" flex justify-center items-center mx-4 w-[120px] bg-emerald-300 hover:bg-emerald-500 px-3 py-1 text-gray-600 border-1 border-black font-bold rounded-full hover:text-black duration-300"
              >
                <span className="px-2">إرسال</span>
                <FaTelegramPlane size={20} className="text-emerald-900" />
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormContact;
