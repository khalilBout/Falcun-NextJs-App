import Image from "next/image";
import React from "react";
import logo from "@/public/image/logo/IMG-20240630-WA0000.jpg";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
// import Logo from "../Navbar/Logo";

const Footer = () => {
  return (
    <div className="screenPadding">
      <div className="md:flex">
        {/* logo section  */}
        <div className="w-full md:w-1/2">
          {/* <Logo /> */}
          <Image
            width={90}
            // height="auto"
            className="max-h-[100px] "
            src={logo}
            alt="Bravo Logo"
          />
          <p className="text-[16px] mdl:text-[18px] font-bodyFont font-semibold text-center px-2 mdl:px-4 text-slate-700">
            نسعى لجعل التعلم رحلة ممتعة ومثمرة، حيث يتم تنظيم المحتوى بشكل متدرج
            يعزز الفهم ويساعد الأطفال على تحقيق أفضل النتائج الأكاديمية. نهدف
            إلى دعم الأطفال في كل خطوة من خطواتهم التعليمية، مع تقديم موارد
            تعليمية تلبي احتياجاتهم وتثير شغفهم للتعلم.
          </p>
        </div>
        {/* info section  */}
        <div className="w-full md:w-1/2 p-2 mdl:p-4">
          <h2 className="text-[20px] mdl:text-[26px] font-TitleFont font-bold pt-2 text-slate-800">
            معلومات الإتصال
          </h2>
          <div className="p-2 ">
            <div className="flex items-start gap-2 ">
              <h3 className=" font-TitleFont font-semibold text-[16px] mdl:text-[18px] text-slate-600">
                العنوان:{" "}
              </h3>
              <h3 className="font-TitleFont text-[16px] mdl:text-[18px] text-slate-900 font-bold">
                شارع مصطفى باشا - الجزيرة - الكويت{" "}
              </h3>
            </div>

            <div className="flex items-start gap-2">
              <h3 className="font-TitleFont font-semibold text-[18px] mdl:text-[20px] text-slate-600">
                الهاتف:{" "}
              </h3>
              <h3 className=" font-TitleFont text-[18px] mdl:text-[22px] text-slate-900 font-bold">
                00964256985478
              </h3>
            </div>

            <div className="flex items-start gap-2">
              <h3 className="font-TitleFont font-semibold text-[18px] mdl:text-[20px] text-slate-600">
                الإيمايل:{" "}
              </h3>
              <h3 className=" font-TitleFont text-[16px] text-slate-900 font-bold">
                bravo-coerces@gmail.com
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
          href="/"
          className="w-12 h-12 rounded-full bg-slate-300 hover:bg-slate-700 hover:text-white text-slate-900 flex justify-center items-center"
        >
          <FaInstagram size={18} />
        </Link>

        <Link
          href="/"
          className="w-12 h-12 rounded-full bg-slate-300 hover:bg-slate-700 hover:text-white text-slate-900 flex justify-center items-center"
        >
          <FaXTwitter size={18} />
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
