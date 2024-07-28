import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

import logo from "@/public/image/logo/logo2.webp";
const Logo = () => {
  return (
    <motion.div
      initial={{ x: "600px", opacity: 0 }}
      animate={{ x: "0%", opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="h-full max-w-[95px] flex justify-start items-center overflow-hidden "
    >
      <Image
        width={180}
        height="auto"
        // fill={true}
        src={logo}
        quality={100}
        alt="Bravo Logo"
        className=" object-cover object-center"
      />
    </motion.div>
  );
};

export default Logo;
