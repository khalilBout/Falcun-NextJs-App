"use client";
import { motion } from "framer-motion";
import Image from "next/image";

import { FaWhatsapp } from "react-icons/fa";
import print from "@/public/hero/print.png";
import emb from "@/public/hero/emb.png";
import uni from "@/public//hero/uni.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="screenPadding pt-28 mdl:pt-32 lg:pt-36 pb-8 w-full bg-gray/40 flex items-end"
    >
      <div className=" flex items-center flex-col lg:flex-row gap-4 h-full w-full">
        {/* text div  */}
        <div className="h-full w-full lg:w-3/5 flex flex-col justify-center items-center gap-4 ">
          <motion.h1
            initial={{ opacity: 0, y: -100 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.8,
            }}
            className=" z-20 text-[15px] sm:text-xl md:text-2xl font-fontBody text-center text-black/70 flex flex-col justify-center gap-4"
          >
            تقدم شركة فالكون منتجات تعكس التميز والجودة، من طباعة نابضة بالحياة
            وتطريز دقيق إلى خياطة احترافية وهدايا فريدة. إنتاج سريع، مرونة في
            الطلب، وأدوات تصميم سهلة تجعل من كل منتج تجربة استثنائية. التميز ليس
            مجرد خيار... إنه معايير تتجسد في كل تفصيلة.
            {/* <span>والدعاية والأزياء الموحدة</span> */}
          </motion.h1>

          <div className="z-20 flex justify-center gap-2 md:gap-4 lg:gap-8">
            <motion.a
              href="#serviceUniforms"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.2,
              }}
              className="hover:scale-110 px-8 mdl:px-12 py-2 bg-blue text-white font-fontBody text-[14px] md:text-[16px] duration-150 transition-all cursor-pointer rounded-full "
            >
              إكتشف خدماتنا{" "}
            </motion.a>

            <motion.a
              href="https://wa.me/966544525016"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.2,
              }}
              className="text-[14px] md:text-[16px] shadow-md flex justify-between items-center gap-2 px-4 mdl:px-8 hover:scale-110 border border-black/30 text-black  duration-150 transition-all cursor-pointer rounded-full "
            >
              <h1 className=" font-fontBody text-[15px] ">تواصل معنا</h1>

              <FaWhatsapp
                size={22}
                className="text-black/70 w-8 h-8 rounded-full p-1"
              />
            </motion.a>
          </div>
        </div>
        {/* image dev  */}
        <div className=" relative h-full w-full lg:w-2/5">
          <div className=" hidden mdl:block absolute -top-12 left-40 -z-10 w-[320px] h-[320px] rounded-full bg-lightBlue/40"></div>
          <div className=" hidden mdl:block absolute -bottom-12 right-20 -z-10 w-[420px] h-[420px] rounded-full bg-purple/20"></div>
          <div className="flex justify-center items-center">
            <div className="w-1/2 flex flex-col gap-3 justify-center items-center">
              <div className="">
                <Image
                  src={uni}
                  quality={100}
                  alt="Uniforms"
                  className=" object-cover object-center"
                />
              </div>

              <Image
                quality={100}
                src={emb}
                alt="Embroidery"
                className=" object-cover object-center"
              />
            </div>
            <div className="w-1/2 mt-3">
              <Image
                src={print}
                quality={100}
                alt="Printing"
                className=" object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
