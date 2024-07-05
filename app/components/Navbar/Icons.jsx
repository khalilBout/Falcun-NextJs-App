"use client";

import Link from "next/link";
import React from "react";
import { useSession } from "next-auth/react";

import { IoPersonAdd } from "react-icons/io5";
import { TbLogout2 } from "react-icons/tb";
import { RiShoppingBag3Fill } from "react-icons/ri";

const Icons = () => {
  const session = useSession();
  // console.log("session:", session.data.user.role);

  return (
    <>
      {session && session.status === "unauthenticated" && (
        <ul className="flex justify-center items-center gap-4">
          <li>
            <Link href="/login" className=" cursor-pointer">
              <IoPersonAdd className="text-thirdColor" size={24} />
            </Link>
          </li>

          <li>
            <button className=" flex justify-center items-center cursor-pointer">
              <RiShoppingBag3Fill className="text-thirdColor" size={24} />
            </button>
          </li>
        </ul>
      )}

      {session && session.status === "authenticated" && (
        <>
          <div className="flex justify-start items-center ">
            {session.data.user.role === "admin" ? (
              <Link
                href="/dashboard"
                className="py-1 px-2 rounded-full bg-slate-300 hover:bg-slate-600 cursor-pointer"
              >
                لوحة التحكم
              </Link>
            ) : (
              <Link
                href="/profile"
                className="py-1 px-2 rounded-full bg-slate-300 hover:bg-slate-600 cursor-pointer"
              >
                Profile
              </Link>
            )}
          </div>

          <Link
            href="/api/auth/signout?callbackUrl=/"
            className="py-1 px-2 rounded-full bg-slate-300 hover:bg-slate-600 cursor-pointer"
          >
            <span>تسجيل الخروج</span>
            <TbLogout2 />
          </Link>
        </>
      )}
    </>
  );
};

export default Icons;
