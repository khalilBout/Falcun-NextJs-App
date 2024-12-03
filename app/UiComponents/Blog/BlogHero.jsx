"use client";

import React from "react";
import { useRef } from "react";
import flk from "@/public/hero/flk.png";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const BlogHero = () => {
  const BlogRef = useRef();
  const isBlogRefInView = useInView(BlogRef, { margin: "-100px" });

  return (
    <div
      ref={BlogRef}
      className="screenPadding overflow-hidden py-16 relative bg-gray/40 text-purple"
    >
      <div className="w-full flex flex-col items-center gap-2">
        <motion.h1
          initial={{ y: "-1000px", opacity: 0 }}
          // animate={{ y: "0", opacity: 1 }}
          animate={isBlogRefInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className=" font-fontTitle text-[15px] sm:text-[17px] sml:text-xl md:text-2xl text-center lg:max-w-[720px]"
        >
          تُقدم مدوناتنا رؤى حول تقنيات الطباعة، الطرز، والأزياء الموحدة ، وتسعى
          لنقل الخبرات وتبادل الأفكار المبتكرة، مما يساعد على تحقيق التفوق
          والإبداع في مختلف المشاريع.
        </motion.h1>
      </div>
      <motion.div
        initial={{ x: "800px", opacity: 0 }}
        // animate={{ y: "0", opacity: 1 }}
        animate={isBlogRefInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 1.8 }}
        className=" absolute top-2 right-4 md:right-16 lg:right-28 xl:right-36 -z-10"
      >
        <Image
          src={flk}
          quality={100}
          alt="logo"
          fill
          className="h-[180px] w-auto object-cover object-center"
        />
      </motion.div>
    </div>
  );
};

export default BlogHero;
