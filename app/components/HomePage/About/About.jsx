import React from "react";
import AboutImg1 from "@/public/image/about/about1.png";
import AboutImg2 from "@/public/image/about/about2.png";
import Image from "next/image";
const About = () => {
  return (
    <section className="screenPadding bg-slate-300 py-8 overflow-x-hidden">
      <h1 className="p-8 text-primeColor font-TitleFont text-4xl sml:text-2xl mdl:text-4xl xl:text-7xl font-bold  text-center">
        من نحن ...؟
      </h1>

      <div className="flex max-h-[280px] justify- gap-2 ">
        <div className=" flex justify-center items-center ">
          <p className="md:px-4 xl:px-24  text-[14px] sml:text-[18px] mdl:text-[24px] font-bodyFont font-medium ">
            منصة برافو توفر تجربة تعلم شاملة وممتعة من خلال ثلاثة مكونات رئيسية.
            نقدم فيديوهات تعليمية تفاعلية تجعل عملية التعلم مسلية وجذابة، مذكرات
            مدرسية متكاملة تساعد الأطفال على متابعة دروسهم وتنظيم معلوماتهم بشكل
            فعال، وسلسلة التأسيس المصممة بعناية لتأسيس مفاهيم قوية في المواد
            الأساسية من المستوى الأول حتى السادس.
          </p>
        </div>
        <div className="min-w-[120px] md:min-w-[140px] mdl:min-w-[160px] max-w-[200px]">
          <Image
            src={AboutImg1}
            alt="bannerImgTwo"
            width="fill"
            quality={100}
            // sizes="max-width: 480px"
            // fill={true}
          />
        </div>
      </div>

      <div className="flex max-h-[280px] items-center gap-2 ">
        <div className="min-w-[120px] md:min-w-[140px] mdl:min-w-[160px] max-w-[200px]">
          <Image
            src={AboutImg2}
            alt="bannerImgTwo"
            width="fill"
            quality={100}
            // sizes="max-width: 480px"
            // fill={true}
          />
        </div>
        <div className=" flex justify-center items-center ">
          <p className="md:px-4 xl:px-24  text-[14px] sml:text-[18px] mdl:text-[24px] font-bodyFont font-medium ">
            نسعى لجعل التعلم رحلة ممتعة ومثمرة، حيث يتم تنظيم المحتوى بشكل متدرج
            يعزز الفهم ويساعد الأطفال على تحقيق أفضل النتائج الأكاديمية. نهدف
            إلى دعم الأطفال في كل خطوة من خطواتهم التعليمية، مع تقديم موارد
            تعليمية تلبي احتياجاتهم وتثير شغفهم للتعلم.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
