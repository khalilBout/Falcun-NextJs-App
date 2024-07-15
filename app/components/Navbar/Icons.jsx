"use client";

import Link from "next/link";
import React from "react";
import { useSession } from "next-auth/react";

import { IoPersonAdd } from "react-icons/io5";
import { TbLogout2 } from "react-icons/tb";
// import { RiShoppingBag3Fill } from "react-icons/ri";
import { FcManager } from "react-icons/fc";
import CartBooksShop from "@/app/components/Navbar/CartBooksShop";
import { signOut } from "next-auth/react";
import Image from "next/image";
import bookIcon from "@/public/image/bookIcon.png";

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
            <CartBooksShop />
          </li>
        </ul>
      )}

      {session && session.status === "authenticated" && (
        <ul className="flex justify-center items-center gap-4">
          {session.data.user.role === "admin" ? (
            <li>
              <Link
                href="/dashboard"
                className=" hidden mdl:block py-1 px-2 rounded-full bg-slate-100 font-TitleFont text-primeColor text-xl font-bold hover:bg-slate-300 cursor-pointer"
              >
                لوحة التحكم
              </Link>
              <Link
                href="/dashboard"
                className="block mdl:hidden cursor-pointer"
              >
                <FcManager className="text-thirdColor" size={24} />
              </Link>
            </li>
          ) : (
            <>
              <li>
                <CartBooksShop size={20} />
              </li>
              <li>
                <Image src={bookIcon} width={22} height={22} alt="icon" />
              </li>
            </>
          )}

          <li>
            <button className="" onClick={() => signOut()}>
              <TbLogout2 className="text-thirdColor" size={24} />
            </button>
          </li>
        </ul>
      )}
    </>
  );
};

export default Icons;
