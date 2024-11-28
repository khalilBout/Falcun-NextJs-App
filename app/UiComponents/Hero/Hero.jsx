"use client";
import { motion } from "framer-motion";
import logo from "@/public/hero/logo1.png";
import worker from "@/public/hero/work.png";
import Image from "next/image";
// import imageCrovet from "../../../public/image/img2.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="screenPadding h-[100vh] max-sm:pt-10 w-full bg-secondary/90"
    >
      <div className=" relative flex gap-6 h-full w-full">
        {/* text div  */}
        <div className=" max-lg:bg-slate-200/10 h-full w-full lg:w-1/2 flex flex-col justify-center items-center gap-4 ">
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
            className="z-20 text-xl sm:text-2xl md:text-4xl font-fontTitle text-center text-black/90 flex flex-col justify-center gap-4"
          >
            <span>شريككم الموثوق لحلول الإعلانات</span>
            <span>والدعاية والأزياء الموحدة</span>
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 1.2,
            }}
            className="text-center z-20 px-10 text-[15px] md:text-[16px] text-black/90 font-fontBody "
          >
            <span className="text-center">
              لسنا مجرد شركة للإعلانات والأزياء الموحدة – نحن شريككم المثالي
              للجودة والابتكار والقيمة نحن متخصصون في الأزياء الموحدة المخصصة
              والمنتجات الترويجية، وندعم جميع أنواع المؤسسات من خلال تقديم
              منتجات متينة بأسعار لا تقبل المنافسة، توصيل سريع، وخيارات متنوعة
              للتخصيص. إن التزامنا بالجودة والابتكار يبقينا دائمًا في الصدارة،
              مما يضمن لكم أفضل الحلول لاحتياجات العلامة التجارية الخاصة بكم.
            </span>
          </motion.h2>

          <div className="z-20 flex justify-center gap-10">
            <motion.button
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.2,
              }}
              className="hover:scale-110 px-4 py-2 border-2 border-gray bg-gray text-white font-fontBody text-[15px] hover:bg-white hover:text-gray duration-150 transition-all cursor-pointer rounded-full "
            >
              إطلع على خدمتانا
            </motion.button>

            <motion.button
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.2,
              }}
              className="hover:scale-110 px-4 py-2 bg-white border-2 border-gray text-gray hover:bg-gray hover:text-white font-fontBody text-[15px]  duration-150 transition-all cursor-pointer rounded-full "
            >
              تواصل معنا{" "}
            </motion.button>
          </div>
        </div>
        {/* image dev  */}
        <div className="h-full w-full lg:w-1/2 max-lg:absolute top-0 z-10 ">
          <div className="relative w-full h-full flex justify-center items-center ">
            <Image
              src={worker}
              quality={100}
              alt="logo falkon"
              className=" object-cover object-center"
            />
            <Image
              quality={100}
              src={logo}
              alt="logo falkon"
              className=" opacity-10 absolute top-10 left-0 right-0 -z-50 object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

{
  /* <div className="screenPadding w-full flex flex-col gap-4 md:gap-6 ">
        <div className="w-[280px] h-[280px] md:w-[380px] md:h-[380px] rounded-full bg-primary/10 absolute -left-48 md:-left-64 lg:left-0 -top-5 "></div>
        <motion.div
          initial={{ x: "-1200px", opacity: 0 }}
          animate={isHeroInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1.2 }}
          className=" w-[140px] h-[140px] sml:w-[220px] sml:h-[220px] md:w-[320px] md:h-[320px] absolute left-0 top-10 -z-50 "
        >
          <img
            src={imageSoushi}
            alt="image Soushi"
            className="w-full h-full object-fill object-center"
          />
        </motion.div>

        <div className="w-[280px] h-[280px] md:w-[500px] md:h-[500px] rounded-full bg-primary/90 absolute -right-48 md:-right-64 -top-5 -z-10 "></div>

        <motion.div
          initial={{ x: "1200px", opacity: 0 }}
          animate={isHeroInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className=" font-arabic text-5xl sm:text-6xl sml:text-7xl md:text-8xl text-dark z-10 "
        >
          <h1> المذاق</h1>
          <h1>الآسيوي</h1>
          <div className="hidden sm:block sm:w-[60px] sm:h-[60px] sml:w-[90px] sml:h-[90px] md:w-[110px] md:h-[110px] mdl:w-[135px] mdl:h-[135px] absolute right-36 sml:right-48 md:right-60 mdl:right-72 top-0 -z-50">
            <img
              src={imageCrovet}
              alt="image Crovet"
              className="w-full h-full object-fill object-center"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ x: "1200px", opacity: 0 }}
          animate={isHeroInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1.1 }}
          className=" font-sansArabic text-secondary text-[12px] sm:text-[14px] md:text-[16px] z-20"
        >
          <h3>أنقى تجربة السوشي التركيز </h3>
          <h3> على مكونات الجودة الممتازة</h3>
        </motion.div>

        <motion.button
          initial={{ x: "1800px", opacity: 0 }}
          animate={isHeroInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1.2 }}
          className="px-4 py-2 rounded-full w-full sm:w-[120px] md:w-[160px] xl:w-[200px] text-[12px] md:text-[16px] bg-black text-primary font-sansArabic z-20"
        >
          تحقق من القائمة
        </motion.button>
      </div> */
}
