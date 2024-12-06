"use client";
import React from "react";
import Link from "next/link";
import AdminImg from "@/public/admin.webp";
import Image from "next/image";

const Sidebar = () => {
  return (
    <aside className="md:w-1/5 lg:w-1/6 bg-gray-100 bg-slate-100">
      <div className="flex item-center justify-between px-4 md:flex-col">
        <div className="hidden md:flex justify-center item-center ">
          <Link href="/dashboard" className="relative w-[60px] h-[60px] m-4">
            <Image
              quality={100}
              src={AdminImg}
              alt="admin"
              // fill
              className=" rounded-full bg-green-100 "
            />
          </Link>
        </div>

        <ul className="grow py-2 sidebar font-bodyFont flex md:flex-col items-center justify-around ">
          <li>
            <Link
              href="/dashboard/product"
              className=" font-TitleFont font-bold text-[15px] block px-4 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md"
            >
              المنتجات
              {/* <span className="text-red-300">({cart.length})</span> */}
            </Link>
          </li>

          <li>
            <Link
              href="/dashboard/blog"
              className=" font-TitleFont font-bold text-[15px] block px-4 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md"
            >
              المدونات
              {/* <span className="text-red-300">({cart.length})</span> */}
            </Link>
          </li>
        </ul>
        <hr border />
        <div className="w-full flex justify-center ">
          <Link
            // href='/profile'
            href="/api/auth/signout?callbackUrl=/"
            className="my-4 px-2  py-1 text-red-800 hover:bg-red-100 hover:text-white-500 rounded-md cursor-pointer"
            // onClick={logoutHandler}
          >
            تسجيل الخروج
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
