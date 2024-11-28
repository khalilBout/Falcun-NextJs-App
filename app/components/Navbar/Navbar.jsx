"use client";
import Logo from "./Logo";
import Links from "./Links";
import Icons from "./Icons";
import { motion } from "framer-motion";
import MobileLink from "./MobileLink ";
import Image from "next/image";

import text from "@/public/image/logo/text.webp";
const Navbar = () => {
  const dataLink = [
    {
      url: "/",
      name: "الرئيسية",
    },
    {
      url: "/courses",
      name: "خدماتنا",
    },
    {
      url: "/contact",
      name: "اتصل بنا ",
    },
  ];
  return (
    <div className="screenPadding flex h-[80px] justify-between items-center py-1 relative z-50">
      <Logo />
      <div className=" hidden sml:block">
        <Links dataLink={dataLink} />
      </div>
      <div className=" block sml:hidden w-[300px] py-2">
        <Image src={text} alt="logo" width={300} height={80} />
      </div>

      <motion.div
        initial={{ x: "-600px", opacity: 0 }}
        animate={{ x: "0%", opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="flex justify-center items-center gap-2 min-w-[80px] "
      >
        <Icons />
        <MobileLink dataLink={dataLink} />
      </motion.div>
    </div>
  );
};

export default Navbar;
