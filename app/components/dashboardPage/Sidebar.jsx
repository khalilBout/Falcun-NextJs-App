"use client";
import React from "react";
import Link from "next/link";
import AdminImg from "@/public/image/admin.png";
import { signOut } from "next-auth/react";
import Image from "next/image";

const Sidebar = () => {
  const logoutHandler = () => {
    signOut();
  };
  return (
    <aside className="md:w-1/5 lg:w-1/6 bg-gray-100 ">
      <div className="flex item-center justify-between px-4 md:flex-col">
        <div className="hidden md:flex justify-center item-center ">
          <Link href="/" className="relative w-[60px] h-[60px] m-4">
            <Image
              quality={100}
              src={AdminImg}
              alt="admin"
              fill
              className=" rounded-full bg-green-100 "
            />
          </Link>
        </div>

        <ul className="grow py-2 sidebar font-bodyFont flex md:flex-col items-center justify-around ">
          <li>
            <Link
              href="/dashboard/levels"
              className=" font-TitleFont font-bold text-[15px] block px-4 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md"
            >
              الصفوف
              {/* <span className="text-red-300">({cart.length})</span> */}
            </Link>
          </li>

          <li>
            <Link
              href="/dashboard/library"
              className=" font-TitleFont font-bold text-[15px] block px-4 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md"
            >
              المكتبات
              {/* <span className="text-red-300">({cart.length})</span> */}
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/order"
              className=" font-TitleFont font-bold text-[15px] block px-4 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md"
            >
              طلبات المذكرات
              {/* <span className="text-red-300">({cart.length})</span> */}
            </Link>
          </li>

          <li>
            <Link
              href="/dashboard/video"
              className=" font-TitleFont font-bold text-[15px] block px-4 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md"
            >
              الفيديوهات التعليمية
              {/* <span className="text-red-300">({cart.length})</span> */}
            </Link>
          </li>

          <li>
            <Link
              // href="/profile/order"
              href="/dashboard/books"
              className="text-center font-TitleFont font-bold text-[16px] block px-4 py-2  text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md"
            >
              المذكرات المدرسية
            </Link>
          </li>
          <li>
            <Link
              // href="/profile/order"
              href="/dashboard/"
              className="text-center font-TitleFont font-bold text-[17px] block px-4 py-2  text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md"
            >
              السلاسل التعليمية
            </Link>
          </li>
        </ul>
        <hr border />
        <div className="w-full flex justify-center ">
          <button
            // href='/profile'
            className="my-4 px-2  py-1 text-red-800 hover:bg-red-100 hover:text-white-500 rounded-md cursor-pointer"
            onClick={logoutHandler}
          >
            تسجيل  الخروج 
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
