"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import map from "@/public/map/map.png";
import Image from "next/image";

const Map = () => {
  const mapRef = useRef();
  const isMapRefInView = useInView(mapRef, { margin: "-100px" });

  return (
    <section
      ref={mapRef}
      className="w-full min-h-[480px] relative overflow-hidden"
    >
      <div className=" absolute top-0 left-0 right-0 bottom-0 -z-10">
        <Image
          src={map}
          alt="map"
          quality={100}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="text-white py-12 flex flex-col justify-center items-center gap-12 ">
        <motion.h1
          initial={{ y: "-1000px", opacity: 0 }}
          // animate={{ y: "0", opacity: 1 }}
          animate={isMapRefInView ? { y: 0, opacity: 1 } : {}}
          // transition={{ duration: 0.6 }}

          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.6,
          }}
          className=" font-fontTitle text-xl sm:text-2xl sml:text-3xl md:text-4xl text-center lg:max-w-[720px] "
        >
          نفخر بتواجدنا في مواقع تمكننا من خدمة عملائنا بأفضل طريقة ممكنة.
        </motion.h1>
        <div className="max-sml:bg-black/30 py-8 w-full flex flex-col justify-center items-start gap-8 px-16">
          <motion.p
            initial={{ x: "1000px", opacity: 0 }}
            // animate={{ y: "0", opacity: 1 }}
            animate={isMapRefInView ? { x: 0, opacity: 1 } : {}}
            // transition={{ duration: 0.8 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.8,
            }}
            className=" max-w-[320px] text-[16px] md:text-[17px] font-fontBody text-center"
          >
            نلتزم بالاستجابة السريعة لجميع طلباتكم. بغض النظر عن حجم الطلب أو
            تعقيده، نحن جاهزون لتقديم الدعم الفوري والمساعدة اللازمة لتحقيق
            أهدافكم.
          </motion.p>
          <motion.button
            initial={{ x: "1000px", opacity: 0 }}
            // animate={{ y: "0", opacity: 1 }}
            animate={isMapRefInView ? { x: 0, opacity: 1 } : {}}
            // transition={{ duration: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 1,
            }}
            className=" hover:scale-110 duration-200 transition-all cursor-pointer mr-24 w-[120px] py-2 bg-primary rounded-full text-center font-fontTitle"
          >
            تواصل معنا
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Map;
