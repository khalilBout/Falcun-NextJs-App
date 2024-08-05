"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const MobileLink = ({ dataLink }) => {
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      // backgroundColor: "rgb(255,255,255)",
      backgroundColor: "#f8cb5c",
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
      // backgroundColor: "rgb(255,255,255)",
      backgroundColor: "#f8cb5c",
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
      backgroundColor: "#0f1112",
    },
    opened: {
      x: 0,
      opacity: 1,
      backgroundColor: "#0f1112",
    },
  };
  return (
    <div className="block sml:hidden absolute -top-2 -left-4 z-50">
      <div className="md:hidden m-2">
        {/* MENU BUTTON */}
        <button
          className=" w-5 h-5 flex flex-col justify-between z-50 "
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-5 h-1 bg-thirdColor rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-5 h-1 bg-thirdColor rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="w-5 h-1 bg-thirdColor rounded origin-left"
          ></motion.div>
        </button>
        {/* MENU LIST */}
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className=" absolute top-14 left-4  w-[90vw] z-40 h-[80vh] bg-black/80 text-white flex flex-col items-center justify-center gap-8 text-4xl"
          >
            {dataLink?.map((link) => (
              <motion.div
                variants={listItemVariants}
                whileHover={{
                  scale: 1.2,
                  color: "#000000",
                  // backgroundColor: "#FEC3A6",
                  backgroundColor: "#85B8EE",
                }}
                className="z-50 cursor-pointer font-TitleFont py-2 px-8 rounded-full text-[24px]"
                key={link.name}
                onClick={() => setOpen((prev) => !prev)}
              >
                <Link href={`${link.url}`} className="">
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default MobileLink;
