import React from "react";
import AboutImg1 from "@/public/image/about/about1.png";
import AboutImg2 from "@/public/image/about/about2.png";
import AboutImg3 from "@/public/image/about/about3.png";
import bgMb from "@/public/image/about/bgMb.png";
import bgSkyMb from "@/public/image/about/bgSkyBm.png";
import Image from "next/image";
const About = () => {
  return (
    <section className=" relative mb-8 bg-green-300/20 screenPadding  py-8 overflow-x-hidden ">
      <div className="sml:hidden absolute -top-5 left-0 -z-10 max-h-[260px] w-[430px]">
        <Image
          src={bgSkyMb}
          quality={100}
          alt="bg"
          width={500}
          height={300}
          className=""
        />
      </div>

      <h1 className="p-4 text-primeColor font-TitleFont text-3xl sml:text-3xl mdl:text-3xl xl:text-6xl font-bold  text-center">
        من نحن ...؟
      </h1>
      <h3 className="py-4 text-blue-700 font-bold text-center text-[18px] sml:text-[20px] mdl:text-[26px] font-TitleFont ">
        مذكرات برافو توفر تجربة تعلم شاملة و ممتعة من خالل ثالثة مكونا رئيسية:
      </h3>

      <div className="">
        <div className="my-2 flex max-h-[280px] justify- gap-2 ">
          <div className=" flex justify-center items-center ">
            <p className="bg-gray-300/30 p-2 rounded-md md:px-4 xl:px-24  text-[16px] sml:text-[18px] mdl:text-[24px] font-bodyFont font-medium text-center ">
              <span className="text-red-700 font-bold">
                مذكرات مدرسية متكاملة :
              </span>
              <span className="text-cyan-900 font-bold">
                تساعد الأطفال على متابعة دروسهم و تنظيم معلوماتهم بشكل فعال.حيث
                أننا نشرح القواعد بطريقة مبسطة و ممتعة و نوفر حوارات عملية تساعد
                الأطفال على فهم كيفية استخدام اللغة في مواقف حياتية حقيقية. كما
                نقدم نماذج اختبارات متميزة مواكبة لألطر التعليمية المعتمدة
              </span>
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

        <div className="my-2 flex max-h-[280px] items-center gap-2 ">
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
          <div className=" flex justify-center items-center my-2">
            <p className="bg-gray-300/30 p-2 rounded-md md:px-4 xl:px-24  text-[16px] sml:text-[18px] mdl:text-[24px] font-bodyFont font-medium text-center ">
              <span className="text-yellow-700 font-bold">
                فيديوهات تعليمية :
              </span>
              <span className="text-cyan-900 font-bold">
                تقدم شروحات واضحة و مبسطة يمكن مشاهدتها لتعزيز فهم المحتوى كما
                أنها تجعلعملية التعلم مسلية و جذابة. علما أن هذه الفيديوهات
                مقدمة مجنا من فريق "برافو"
              </span>
            </p>
          </div>
        </div>

        <div className=" my-2 flex  max-h-[280px] justify- gap-2 ">
          <div className=" flex justify-center items-center ">
            <p className="bg-gray-300/30 p-2 rounded-md md:px-4 xl:px-24  text-[16px] sml:text-[18px] mdl:text-[24px] font-bodyFont font-medium text-center ">
              <span className="text-green-700 font-bold">سلسلة التأسيس :</span>
              <span className="text-red-900 font-bold">
                دع طفلك يستمتع بتعلم القراءة من خلال سلسلة كتب مصممة خصيصا
                لتلبية احتياجاتهم التعليمية. حيث سيكتسب الأطفال مهارات القراءة
                بشكل تدريجي و منظم مما يعزز ثقتهم بأنفسهم و قدرتهم على التعلم .
                علما أن هذه الكتب هي عبارة عن 4 مستويات تبدأ من تعلم الحروف و
                تنتهي بقراءة جمل في اللغة الإنجليزية.
              </span>
            </p>
          </div>
          <div className="min-w-[120px] md:min-w-[140px] mdl:min-w-[160px] max-w-[200px]">
            <Image
              src={AboutImg3}
              alt="bannerImgTwo"
              width="fill"
              quality={100}
              // sizes="max-width: 480px"
              // fill={true}
            />
          </div>
        </div>
      </div>

      <div className="sml:hidden absolute -bottom-5 left-0 -z-10 max-h-[260px] w-[430px]">
        <Image
          src={bgMb}
          quality={100}
          alt="bg"
          width={500}
          height={300}
          className=""
        />
      </div>
    </section>
  );
};

export default About;
