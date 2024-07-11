"use client";
import React, { useState } from "react";

const FormAddAddress = ({ setAddressClient }) => {
  const [form, setForm] = useState({
    clientName: "",
    phone: "",
    address: "",
  });

  // ============= Error Msg  =================
  const [errClientName, setErrClientName] = useState("");
  const [errPhone, setErrPhone] = useState("");
  const [errAddress, setErrAddress] = useState("");

  const handelChangeForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const AddAddress = (e) => {
    e.preventDefault();
    // checked valid data
    if (form.checked) {
      if (!form.clientName) {
        setErrClientName("أدخل إسمك");
      }

      if (!form.phone) {
        setErrPhone("أدخل رقم الهاتف");
      }

      if (!form.address) {
        setErrAddress("أدخل عنوانك ");
      }

      if (form.clientName && form.phone && form.address) {
        setAddressClient(form);

        setForm({
          clientName: "",
          phone: "",
          address: "",
          checked: false,
        });
      }
    }
  };
  return (
    <div className="w-full lgl:w-[500px] h-full flex flex-col font-TitleFont">
      <form className="w-full lgl:w-[500px] flex items-center justify-center">
        <div className="px-6 py-4 w-full flex flex-col justify-start ">
          <h1 className=" font-bold text-2xl mdl:text-2xl mb-2">
            المعلومات الشخصية :
          </h1>
          <div className="flex flex-col gap-3">
            {/* client name */}
            <div className="flex flex-col gap-.5">
              <p className="font-titleFont text-base font-semibold text-gray-600">
                الإسم
              </p>
              <input
                onChange={handelChangeForm}
                name="clientName"
                className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                type="text"
                placeholder="الإسم ..."
              />
              {errClientName && (
                <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                  <span className="font-bold italic mr-1">!</span>
                  {errClientName}
                </p>
              )}
            </div>

            {/* Phone Number */}
            <div className="flex flex-col gap-.5">
              <p className="font-titleFont text-base font-semibold text-gray-600">
                رقم الهاتف
              </p>
              <input
                onChange={handelChangeForm}
                name="phone"
                className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                type="text"
                placeholder="00964xxxxxxxxxxxx"
              />
              {errPhone && (
                <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                  <span className="font-bold italic mr-1">!</span>
                  {errPhone}
                </p>
              )}
            </div>
            {/* Address */}
            <div className="flex flex-col gap-.5">
              <p className="font-titleFont text-base font-semibold text-gray-600">
                العنوان الكامل
              </p>
              <input
                onChange={handelChangeForm}
                name="address"
                className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                type="text"
                placeholder="الشارع - المدينة "
              />
              {errAddress && (
                <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                  <span className="font-bold italic mr-1">!</span>
                  {errAddress}
                </p>
              )}
            </div>

            {/* Checkbox */}
            <div className="flex items-start mdl:items-center gap-2">
              <input
                onChange={handelChangeForm}
                className="w-4 h-4 mt-1 mdl:mt-0 cursor-pointer"
                type="checkbox"
                name="checked"
                value={!form.checked}
              />
              <p className="text-sm text-primeColor">
                سوف نقوم بالإتصال بك لتأكيد ،الطلب ونرسل لك المذكرات
                {/* <span className="text-blue-500">Terms of Service </span>and{" "}
                <span className="text-blue-500">Privacy Policy</span>. */}
              </p>
            </div>
            <button
              onClick={AddAddress}
              className={`${
                form.checked
                  ? "bg-green-400 hover:bg-green-600 hover:text-black cursor-pointer duration-200"
                  : "bg-gray-300 hover:text-gray-400 text-gray-800 cursor-none"
              } w-full text-gray-200 text-base font-medium h-10 rounded-md hover:text-white duration-300`}
            >
              أضف المعلومات
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormAddAddress;
