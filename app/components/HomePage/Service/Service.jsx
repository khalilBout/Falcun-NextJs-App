import React from "react";
import Service1 from "@/public/image/service/Service1.png";
import Service2 from "@/public/image/service/Service2.png";
import Service3 from "@/public/image/service/Service3.png";
import ServiceMain from "@/public/image/service/ServiceMain.png";
import ServiceSmall from "@/public/image/service/ServiceSmall.png";

import Image from "next/image";
const Service = () => {
  return (
    <section className="screenPadding py-8 bg-slate-300 overflow-x-hidden">
      <h1 className="my-8 px-8 text-primeColor font-TitleFont text-4xl sml:text-2xl mdl:text-4xl xl:text-7xl font-bold  text-center">
        خدماتنا{" "}
      </h1>
      <div className=" mdl:flex min-h-[420px] ">
        {/* section text  */}
        <div className="mdl:w-1/2 flex flex-col justify-center items-center ">
          <div className=" my-2 min-h-[120px] flex items-center ">
            <p className=" text-[18px] xl:text-[22px] text-center font-bodyFont font-medium text-primeColor px-2">
              موقعنا التعليمي يقدم خدمات شاملة للمرحلة الإعدادية، تشمل فيديوهات
              تعليمية تفاعلية تغطي جميع المواد الدراسية .
            </p>
            <Image
              src={Service1}
              width={90}
              quality={100}
              className="mdl:w-[300px]"
            />
          </div>

          <div className=" my-2 min-h-[120px] flex items-center ">
            <Image
              src={Service2}
              width={90}
              quality={100}
              className="mdl:w-[300px]"
            />
            <p className=" text-[18px] xl:text-[22px] text-center font-bodyFont font-medium text-primeColor px-2">
              نساعد الطلاب على الفهم العميق للمفاهيم بطريقة ممتعة ، الإضافة إلى
              ذلك، نوفر مذكرات مدرسية متكاملة ومنظمة تساهم في تحسين الأداء
              الأكاديمي.
            </p>
          </div>

          <div className=" my-2 min-h-[120px] flex items-center ">
            <p className=" text-[18px] xl:text-[22px] text-center font-bodyFont font-medium text-primeColor px-2">
              كما نقدم سلاسل تعليمية مترابطة ومتكاملة، مصممة لتأسيس مفاهيم قوية
              وتنمية مهارات الطلاب بشكل متدرج وفعّال، مما يعزز من تجربة التعلم
              ويحقق أفضل النتائج الأكاديمية.
            </p>
            <Image
              src={Service3}
              width={110}
              quality={100}
              className="mdl:w-[300px]"
            />
          </div>
        </div>
        {/* image section  */}
        <div className=" relative mdl:w-1/2 flex justify-center items-center">
          <Image
            src={ServiceMain}
            alt="ServiceMain"
            width={420}
            quality={100}
            className=""
          />
          <Image
            src={ServiceSmall}
            alt="ServiceSmall"
            width={200}
            quality={100}
            className=" absolute top-0 -left-4"
          />
        </div>
      </div>
    </section>
  );
};

export default Service;
