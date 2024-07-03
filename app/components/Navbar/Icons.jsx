"use client";

import Link from "next/link";
import React from "react";
import { useSession } from "next-auth/react";

const Icons = () => {
  const session = useSession();
  // console.log("session:", session.data.user.role);

  return (
    <>
      {session && session.status === "unauthenticated" && (
        <ul className="flex justify-center items-center gap-3">
          <li>
            <Link
              href="/login"
              className="py-1 px-2 rounded-full bg-slate-300 hover:bg-slate-600 cursor-pointer"
            >
              Login
            </Link>
          </li>

          <li>
            <Link
              href="/register"
              className="py-1 px-2 rounded-full bg-slate-300 hover:bg-slate-600 cursor-pointer"
            >
              Register
            </Link>
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
                Dashboard
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
            Logout
          </Link>
        </>
      )}
    </>
  );
};

export default Icons;
