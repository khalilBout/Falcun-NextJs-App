import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

import logo from "@/public/image/logo/IMG-20240630-WA0000.jpg";
const Logo = () => {
  return (


    <motion.div
      initial={{ x: "600px", opacity: 0 }}
      animate={{ x: "0%", opacity: 1 }}
      transition={{ duration: 0.7 }}
    
    className="h-full w-1/5 flex justify-center items-center overflow-hidden">
      <Image
        width={116}
        height="auto"
        className=""
        src={logo}
        alt="Bravo Logo"
      />
    </motion.div>
  );
};

export default Logo;
