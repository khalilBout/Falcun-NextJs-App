"use client";
import { motion } from "framer-motion";
import logo from "@/public/logo/falkon-logo.svg";
import Image from "next/image";

const Logo = () => {
  return (
    <motion.div
      initial={{ x: "600px", opacity: 0 }}
      animate={{ x: "0%", opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <Image
        src={logo}
        quality={100}
        alt="falkon logo"
        width={130}
        height={180}
        className="max-md:w-[130px] md:w-[180px] h-auto"
      />
      {/* <h1 className=" font-arabic font-bold text-2xl md:text-3xl lg:text-4xl">
        المذاق <span className="text-primary">الآسيوي</span>{" "}
      </h1> */}
    </motion.div>
  );
};

export default Logo;
