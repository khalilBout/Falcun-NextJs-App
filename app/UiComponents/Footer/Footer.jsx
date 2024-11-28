"use client";
import Icons from "@/app/UiComponents/Footer/Icons";
import logo from "@/public/logo/logo.png";
import brand from "@/public/logo/falkon.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="screenPadding bg-blue overflow-hidden">
      <div className=" border-b-2 border-green-50 overflow-x-hidden py-8 flex flex-col mdl:flex-row gap-12 justify-center items-center">
        {/* text  */}
        <div className="w-full mdl:w-1/3 text-[14px] mdl:text-[16px] font-fontBody text-white">
          <img
            src={brand}
            alt="falkon logo"
            className="w-[140px] h-auto pb-6"
          />

          <p className="text-center">
            نسعى جاهدين لتقديم منتجات لا تفي فقط بتوقعاتكم بل تتجاوزها ، سواء
            كنتم تبحثون عن ملابس رسمية للشركات تُبرز العلامة التجارية أو مواد
            ترويجية تترك انطباعًا لا يُنسى ، فإن فالكون هنا لدعم رحلتكم في بناء
            العلامة التجارية .
          </p>
          <p className="text-center">
            ننتظر تواصلكم لتكتشفوا كيف يمكن لفالكون أن يسهم في تعزيز صورتكم
            المهنية والتميز في السوق.
          </p>
        </div>

        {/* adders  */}
        <div className=" text-white w-full mdl:w-1/3">
          <h1 className="py-2 font-fontTitle text-xl">العناوين</h1>
          <div className="">
            <h2 className="text-[16px] mdl:text-[18px] font-fontTitle px-4">
              المكتب الرئيسي :{" "}
            </h2>
            <h2 className="text-[14px] mdl:text-[16px] font-fontBody pr-8">
              مكتب رقم 14 الأندلس بلازا شارع تبوك الأندلس جدة 23211 - المملكة
              العربية السعودية .{" "}
            </h2>
          </div>

          <div className="">
            <h2 className="text-[16px] mdl:text-[18px] font-fontTitle px-4">
              صالة العرض :
            </h2>
            <h2 className="text-[14px] mdl:text-[16px] font-fontBody pr-8">
              رقم 3 شارع غرناطة العزيزية 23342 - المملكة العربية السعودية .{" "}
            </h2>
          </div>

          <div className="">
            <h2 className="text-[16px] mdl:text-[18px] font-fontTitle px-4">
              {" "}
              : معلومات الاتصال{" "}
            </h2>
            <h2 className="text-[14px] mdl:text-[16px] font-fontBody pr-8">
              +966 54 452 5016{" "}
            </h2>
          </div>
        </div>
        {/* big logo  */}
        <div className=" hidden mdl:w-1/3 mdl:flex justify-center items-center">
          <Image
            src={logo}
            quality={100}
            alt="logo"
            className="h-[240px] w-auto "
          />
        </div>
      </div>

      <div className="py-4 flex flex-col md:flex-row gap-4 justify-between items-center ">
        <Icons />
        <div className="">
          <h2 className="text-[14px] sml:text-[17px] text-white text-center">
            Copyright 2024 Falkon - All right reserved
          </h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
