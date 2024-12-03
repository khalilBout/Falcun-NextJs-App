"use client";
import { useRef } from "react";
import logo from "@/public/logo/logo.png";

import { motion, useInView } from "framer-motion";
import Image from "next/image";

const About = () => {
  const aboutRef = useRef();
  const isAboutRefInView = useInView(aboutRef, { margin: "-100px" });

  return (
    <section
      id="about"
      className="screenPadding overflow-hidden py-16 relative bg-gray"
    >
      <div className="w-full flex flex-col items-center gap-2" ref={aboutRef}>
        <motion.h1
          initial={{ y: "-1000px", opacity: 0 }}
          // animate={{ y: "0", opacity: 1 }}
          animate={isAboutRefInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className=" font-fontTitle text-xl sm:text-2xl sml:text-3xl md:text-4xl text-purple text-center lg:max-w-[720px]"
        >
          ضاعف من قيمة المنتجات مع خدمات الطرز المباشر من فالكون
        </motion.h1>

        <motion.h2
          initial={{ y: "-1000px", opacity: 0 }}
          // animate={{ y: "0", opacity: 1 }}
          animate={isAboutRefInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1.4 }}
          className=" font-fontBody text-[15px] sm:text-[18px] text-purple text-center max-w-[680px]"
        >
          تلبية احتياجات المشترين الأفراد والشركات الصغيرة من خلال السماح بطلب
          عنصر واحد دون الحاجة إلى عمليات شراء بالجملة.
        </motion.h2>
      </div>
      <motion.div
        initial={{ x: "-800px", opacity: 0 }}
        // animate={{ y: "0", opacity: 1 }}
        animate={isAboutRefInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 1.8 }}
        className=" absolute top-4 left-4 md:left-16 lg:left-28 xl:left-40"
      >
        <Image
          src={logo}
          quality={100}
          fill
          alt="logo"
          className="h-[220px] w-auto opacity-20 object-cover object-center"
        />
      </motion.div>
    </section>
  );
};

export default About;
