"use client";
import React, { useState } from "react";
import { getProviders, signIn, useSession } from "next-auth/react";

const Login = () => {
  const session = useSession();

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // ============= Initial State End here ===============
  // ============= Error Msg Start here =================
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");

  // ============= Error Msg End here ===================

  // ============= Event Handler Start here =============
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrPassword("");
  };
  // ============= Event Handler End here ===============
  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email) {
      setErrEmail("أدخل بريدك الإلكتروني");
    }
    if (!password) {
      setErrPassword("أدخل كلمة المرور");
    }
    // ============== Getting the value ==============
    if (email && password) {
      console.log("start login");

      try {
        setLoading(true);
        console.log("start login **", email);
        signIn("credentials", {
          email,
          password,
        });
      } catch (error) {
        setErrorMsg("Error Login:", error);

        // toast.error(error.message);
      } finally {
        setLoading(false);
      }
    }
  };
  return (
    <div className="w-[450px] h-[580px] font-medium font-fontTitle">
      <form className="w-full h-full flex items-center justify-center">
        <div className="px-6 py-4 w-full h-[90%] flex flex-col justify-center">
          <h1 className="font-fontTitle font-semibold text-2xl mdl:text-4xl mb-4">
            تسجيل الدخول
          </h1>
          <div className="flex flex-col gap-3">
            {/* Email */}
            <div className="flex flex-col gap-.5">
              <p className=" font-semibold text-gray-600">البريد الإلكتروني </p>
              <input
                onChange={handleEmail}
                value={email}
                className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                type="email"
                placeholder="john@workemail.com"
              />
              {errEmail && (
                <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                  <span className="font-bold italic mr-1">!</span>
                  {errEmail}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="flex flex-col gap-.5">
              <p className="font-titleFont text-base font-semibold text-gray-600">
                كلمة المرور
              </p>
              <input
                onChange={handlePassword}
                value={password}
                className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                type="password"
                placeholder="كلمة المرور"
              />
              {errPassword && (
                <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                  <span className="font-bold italic mr-1">!</span>
                  {errPassword}
                </p>
              )}
            </div>

            <button
              onClick={handleLogin}
              className="bg-green-200 text-gray-500  px-4 py-2 text-[14px] mdl:text-[16px] hover:bg-green-400 cursor-pointer font-medium h-10 rounded-md  duration-300"
            >
              تسجيل الدخول
            </button>
            {errorMsg && (
              <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                <span className="font-bold italic mr-1">!</span>
                {errorMsg}
              </p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
