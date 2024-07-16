import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

import logo from "@/public/image/logo/logo1.png";
const Logo = () => {
  return (
    <motion.div
      initial={{ x: "600px", opacity: 0 }}
      animate={{ x: "0%", opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="h-full w-full flex justify-start items-center overflow-hidden "
    >
      <Image
        width={120}
        height="auto"
        src={logo}
        quality={100}
        alt="Bravo Logo"
        className=" object-cover object-center"
      />
    </motion.div>
  );
};

export default Logo;
