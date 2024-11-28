"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { TbLogout } from "react-icons/tb";

const MobileLink = ({ link }) => {
  const session = useSession();
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };
  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };
  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };
  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <div className="">
      <div className="md:hidden m-2">
        {/* MENU BUTTON */}
        <div className=" flex justify-center items-center gap-2">
          {session && session.status === "authenticated" && (
            <li className=" p-1 hover:text-red-700 h-[30px] w-[30px] flex justify-center items-center rounded-full">
              <Link className=" " href="/api/auth/signout?callbackUrl=/">
                <TbLogout size={28} className="" />
              </Link>
            </li>
          )}
          <button
            className=" w-7 h-6 flex flex-col justify-between z-50 relative"
            onClick={() => setOpen((prev) => !prev)}
          >
            <motion.div
              variants={topVariants}
              animate={open ? "opened" : "closed"}
              className="w-6 h-1 bg-black rounded origin-left"
            ></motion.div>
            <motion.div
              variants={centerVariants}
              animate={open ? "opened" : "closed"}
              className="w-6 h-1 bg-black rounded"
            ></motion.div>
            <motion.div
              variants={bottomVariants}
              animate={open ? "opened" : "closed"}
              className="w-6 h-1 bg-black rounded origin-left"
            ></motion.div>
          </button>
        </div>
        {/* MENU LIST */}
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className=" absolute top-0 left-0 w-[90vw] h-screen bg-dark/90 text-white flex flex-col items-center justify-center gap-8 text-[15px] font-fontTitle"
          >
            {link?.map((link) => (
              <motion.div
                variants={listItemVariants}
                whileHover={{
                  scale: 1.2,
                  color: "#000000",
                  // backgroundColor: "#FEC3A6",
                  backgroundColor: "#FEC3A6",
                }}
                className="cursor-pointer font-fontTitle py-1 px-4 rounded-full"
                key={link.name}
                onClick={() => setOpen((prev) => !prev)}
              >
                <Link href={`#${link.href}`}>{link.name}</Link>
              </motion.div>
            ))}

            {session &&
              session?.status === "authenticated" &&
              session?.data.user.role === "admin" && (
                <motion.div
                  variants={listItemVariants}
                  whileHover={{
                    scale: 1.2,
                    color: "#000000",
                    // backgroundColor: "#FEC3A6",
                    backgroundColor: "#FEC3A6",
                  }}
                  className="cursor-pointer font-fontTitle py-1 px-4 rounded-full"
                  key={link.name}
                  onClick={() => setOpen((prev) => !prev)}
                >
                  <Link href="/dashboard">لوحة التحكم</Link>
                </motion.div>
              )}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default MobileLink;
