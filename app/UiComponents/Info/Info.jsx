import React from "react";
import Image from "next/image";

import logo from "@/public/hero/logo.png";
import qlt from "@/public/info/qlt.png";
import save from "@/public/info/save.png";
import sped from "@/public/info/sped.png";
import serves from "@/public/info/serves.png";

const dataInfo = [
  {
    icon: qlt,
    title: "المنتجات القابلة للتخصيص",
    desc: "توفير تشكيلة واسعة من الملابس، الإكسسوارات، وديكورات المنزل، مما يسمح للعملاء بابتكار منتجات فريدة من نوعها حسب رغباتهم.",
  },
  {
    icon: sped,
    title: "السرعة في الأداء:",
    desc: "تقديم خدمات إنتاج وشحن سريعة، لتقليل وقت الانتظار وتعزيز رضا العملاء. يمكنكم الاعتماد علينا لتوفير خدمات سريعة وموثوقة.",
  },
  {
    icon: save,
    title: "لا يوجد حد أدنى للطلبات:",
    desc: "تلبية احتياجات الأفراد والشركات الصغيرة عبر السماح بطلب قطعة واحدة دون الحاجة لشراء كميات كبيرة.",
  },
  {
    icon: serves,
    title: "جودة الطباعة العالية:",
    desc: "استخدام تقنيات طباعة متطورة لضمان مطبوعات ذات ألوان حية ودائمة، تقاوم التآكل والغسيل.",
  },
];
const Info = () => {
  return (
    <section
      id="info"
      className=" relative screenPadding py-16 flex justify-center items-center"
    >
      {/* image box  */}
      <div className=" hidden lg:flex absolute w-full h-full justify-center items-center">
        <Image src={logo} alt="logo" className="w-[30%] h-auto opacity-10" />
      </div>
      {/* info box  */}
      <div className="min-h-[500px] w-[80%] flex justify-center items-center flex-wrap gap-8 ">
        {dataInfo.map((elm, ind) => (
          <div
            key={ind}
            className="bg-lightBlue shadow-md p-8 w-[300px] h-[300px]"
          >
            <div className=" flex justify-between items-end py-6">
              <h2 className="font-fontTitle ">{elm.title}</h2>
              <Image
                src={elm.icon}
                quality={100}
                className="w-16 h-16 object-cover "
              />
            </div>
            <div className="">
              <p className="text-[14px] font-fontBody "> {elm.desc} </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Info;
