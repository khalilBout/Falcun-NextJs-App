"use client";
import { useRef } from "react";
import sim from "@/public/hero/sim.png";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const AboutSec3 = () => {
  const aboutRef = useRef();
  const isAboutRefInView = useInView(aboutRef, { margin: "-100px" });

  return (
    <section
      id=""
      className="screenPadding overflow-hidden py-16 relative min-h-[300px] bg-black/40"
    >
      <div
        className="w-full flex flex-col items-center gap-4 text-white pt-8"
        ref={aboutRef}
      >
        <motion.h1
          initial={{ y: "-1000px", opacity: 0 }}
          // animate={{ y: "0", opacity: 1 }}
          animate={isAboutRefInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className=" font-fontTitle text-xl sm:text-2xl sml:text-3xl md:text-4xl text-center lg:max-w-[720px]"
        >
          إبراز العلامات التجارية بلمسة احترافية{" "}
        </motion.h1>

        <motion.h2
          initial={{ y: "-1000px", opacity: 0 }}
          // animate={{ y: "0", opacity: 1 }}
          animate={isAboutRefInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className=" font-fontBody text-[15px] sm:text-[18px] text-center max-w-[680px]"
        >
          نسعى جاهدين لتقديم منتجات لا تفي فقط بتوقعاتكم بل تتجاوزها ، سواء كنتم
          تبحثون عن ملابس رسمية للشركات تُبرز العلامة التجارية أو مواد ترويجية
          تترك انطباعًا لا يُنسى، فإن فالكون هنا لدعم رحلتكم في بناء العلامة
          التجارية.{" "}
        </motion.h2>
      </div>
      <div className=" absolute top-0 right-0 left-0 bottom-0 -z-20">
        <Image
          src={sim}
          alt="logo"
          quality={100}
          fill
          className=" h-full w-full object-cover object-center"
        />
      </div>
    </section>
  );
};

export default AboutSec3;
