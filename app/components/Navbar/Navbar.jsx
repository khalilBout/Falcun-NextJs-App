"use client";
import Logo from "./Logo";
import Links from "./Links";
import Icons from "./Icons";
import { motion } from "framer-motion";
import MobileLink from "./MobileLink ";

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
      name: "إتصل بنا ",
    },
  ];
  return (
    <div className="screenPadding flex h-[80px] justify-between items-center  py-4 z-50">
      <Logo />
      <div className=" hidden sml:block">
        <Links dataLink={dataLink} />
      </div>

      <motion.div
        initial={{ x: "-600px", opacity: 0 }}
        animate={{ x: "0%", opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="flex justify-center items-center gap-2"
      >
        <Icons />
        <div className="block sml:hidden">
          <MobileLink dataLink={dataLink} />
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;