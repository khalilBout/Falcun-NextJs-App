"use client";
import { useRef } from "react";
import logo from "@/public/hero/logo.png";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const AboutSec2 = () => {
  const aboutRef = useRef();
  const isAboutRefInView = useInView(aboutRef, { margin: "-100px" });

  return (
    <section
      id="about"
      className="screenPadding overflow-hidden py-16 relative"
    >
      <div className="w-full flex flex-col items-center gap-2" ref={aboutRef}>
        <motion.h1
          initial={{ y: "-1000px", opacity: 0 }}
          // animate={{ y: "0", opacity: 1 }}
          animate={isAboutRefInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className=" font-fontTitle text-xl sm:text-2xl sml:text-3xl md:text-4xl text-gray text-center lg:max-w-[720px]"
        >
          اجعل منتجك يروى قصة مع خدمات الطباعة DTF والطباعة فوق البنفسجية UV DTF
        </motion.h1>

        {/* <motion.h2
          initial={{ y: "-1000px", opacity: 0 }}
          // animate={{ y: "0", opacity: 1 }}
          animate={isAboutRefInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1.4 }}
          className=" font-fontBody text-[15px] sm:text-[18px] text-gray text-center max-w-[680px]"
        >
          أضفوا لمسة احترافية ودائمة على علامتكم التجارية من خلال خدمات التطريز
          المباشر. مثالية للفعاليات التجارية والرياضية والقبعات.
        </motion.h2> */}
      </div>
      <motion.div
        initial={{ x: "800px", opacity: 0 }}
        // animate={{ y: "0", opacity: 1 }}
        animate={isAboutRefInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 1.8 }}
        className=" absolute top-2 right-4 md:right-16 lg:right-28 xl:right-40"
      >
        <Image
          src={logo}
          alt="logo"
          quality={100}
          className="h-[180px] w-auto opacity-20 object-cover object-center"
        />
      </motion.div>
    </section>
  );
};

export default AboutSec2;
