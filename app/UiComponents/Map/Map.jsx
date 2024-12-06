"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import map from "@/public/map/map.png";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

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
      <div className="text-purple py-12 flex flex-col justify-center items-center gap-12 ">
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
          className="bg-purple/70 text-white px-6 py-3 font-fontTitle text-xl sm:text-2xl sml:text-3xl md:text-4xl text-center lg:max-w-[720px] "
        >
          نفخر بتواجدنا في مواقع تمكننا من خدمة عملائنا بأفضل طريقة ممكنة.
        </motion.h1>
        <div className="max-sml:bg-purple/70 text-white py-8 w-full flex flex-col justify-center items-start gap-8 px-16">
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

          <motion.a
            href="https://wa.me/213670000320"
            initial={{ x: "1000px", opacity: 0 }}
            animate={isMapRefInView ? { x: -60, opacity: 1 } : {}}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 1,
            }}
            className="bg-lightBlue text-purple text-[14px] md:text-[16px] shadow-md flex justify-between items-center gap-2 px-4 mdl:px-8 hover:scale-110 border border-black/30   duration-150 transition-all cursor-pointer rounded-full "
          >
            <h1 className=" font-fontBody text-[15px] ">تواصل معنا</h1>

            <FaWhatsapp
              size={22}
              className="text-black/70 w-8 h-8 rounded-full p-1"
            />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Map;
