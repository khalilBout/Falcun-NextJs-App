import Image from "next/image";
import React from "react";
import logo from "@/public/image/logo/logo1.png";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

import Link from "next/link";
// import Logo from "../Navbar/Logo";

const Footer = () => {
  return (
    <div className="screenPadding">
      <div className="md:flex">
        {/* logo section  */}
        <div className="w-full md:w-1/2 flex flex-col items-start justify-center gap-2">
          {/* <Logo /> */}
          <Image
            width={160}
            height="auto"
            className="max-h-[100px] "
            src={logo}
            alt="Bravo Logo"
          />
          <p className="text-[16px] mdl:text-[18px] font-bodyFont font-semibold text-center px-2 mdl:px-4 text-slate-700">
            نسعى في منصة برافو لجعل التعلم رحلة ممتعة ومثمرة، حيث يتم تنظيم
            المحتوى بشكل متدرج يعزز الفهم ويساعد الأطفال على تحقيق أفضل النتائج
            الأكاديمية. نهدف إلى دعم الأطفال في كل خطوة من خطواتهم التعليمية، مع
            تقديم موارد تعليمية تلبي احتياجاتهم وتثير شغفهم للتعلم.
          </p>
        </div>
        {/* info section  */}
        <div className="w-full md:w-1/2 p-2 mdl:p-4">
          <h2 className="text-[20px] mdl:text-[26px] font-TitleFont font-bold pt-2 text-slate-800">
            معلومات الاتصال
          </h2>
          <div className="p-2 ">
            <div className="flex items-start gap-2">
              <h3 className="font-TitleFont font-semibold text-[18px] mdl:text-[20px] text-slate-600">
                رقم الهاتف (01)
              </h3>
              <h3 className=" font-TitleFont text-[18px] mdl:text-[22px] text-slate-900 font-bold">
                0096550133774
              </h3>
            </div>
            <div className="flex items-start gap-2">
              <h3 className="font-TitleFont font-semibold text-[18px] mdl:text-[20px] text-slate-600">
                رقم الهاتف (02)
              </h3>
              <h3 className=" font-TitleFont text-[18px] mdl:text-[22px] text-slate-900 font-bold">
                0096550653733
              </h3>
            </div>

            <div className="flex items-start gap-2">
              <h3 className="font-TitleFont font-semibold text-[16px] mdl:text-[20px] text-slate-600">
                البريد الإلكتروني
              </h3>
              <h3 className=" font-TitleFont text-[17px] text-slate-900 font-bold">
                bravo.kuwait@gmail.com
              </h3>
            </div>
          </div>
        </div>
      </div>
      {/* icon section  */}
      <div className="w-full flex justify-center items-center gap-4 mdl:gap-8 py-4 mdl:py-8">
        <Link
          href="/"
          className="w-12 h-12 rounded-full  bg-slate-300 hover:bg-slate-700 hover:text-white text-slate-900  flex justify-center items-center"
        >
          <FaFacebookF size={18} />
        </Link>

        <Link
          href="https://www.instagram.com/bravo_kw2023/?igsh=cXF5czNjeXZyaGZ6"
          className="w-12 h-12 rounded-full bg-slate-300 hover:bg-slate-700 hover:text-white text-slate-900 flex justify-center items-center"
        >
          <FaInstagram size={18} />
        </Link>

        <Link
          href="https://wa.me/96550133774"
          className="w-12 h-12 rounded-full bg-slate-300 hover:bg-slate-700 hover:text-white text-slate-900 flex justify-center items-center"
        >
          <FaWhatsapp size={18} />
        </Link>

        <Link
          href="/"
          className="w-12 h-12 rounded-full bg-slate-300 hover:bg-slate-700 hover:text-white text-slate-900 flex justify-center items-center"
        >
          <FaYoutube size={18} />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
