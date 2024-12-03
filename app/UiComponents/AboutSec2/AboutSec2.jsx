"use client";
import { useRef } from "react";
// import logo from "@/public/hero/logo.png";
import prt from "@/public/hero/prt.png";

import { motion, useInView } from "framer-motion";

const AboutSec2 = () => {
  const aboutRef = useRef();
  const isAboutRefInView = useInView(aboutRef, { margin: "-100px" });

  return (
    <section
      id="about"
      className="screenPadding overflow-hidden py-16 relative bg-gray/80 text-purple"
    >
      <div className="w-full flex flex-col items-center gap-2" ref={aboutRef}>
        <motion.h1
          initial={{ y: "-1000px", opacity: 0 }}
          // animate={{ y: "0", opacity: 1 }}
          animate={isAboutRefInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className=" font-fontTitle text-xl sm:text-2xl sml:text-3xl md:text-4xl text-center lg:max-w-[720px]"
        >
          اجعل منتجك يروى قصة مع خدمات الطباعة DTF والطباعة فوق البنفسجية UV DTF
        </motion.h1>
      </div>
      <motion.div
        initial={{ x: "800px", opacity: 0 }}
        // animate={{ y: "0", opacity: 1 }}
        animate={isAboutRefInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 1.8 }}
        className=" absolute top-2 right-4 md:right-16 lg:right-28 xl:right-36 z-10"
      >
        <img
          src={prt}
          alt="logo"
          className="h-[220px] w-auto object-cover object-center"
        />
      </motion.div>
    </section>
  );
};

export default AboutSec2;
