import React from "react";

import logo from "@/public/hero/logo.png";
import qlt from "@/public/info/qlt.png";
import save from "@/public/info/save.png";
import sped from "@/public/info/sped.png";
import serves from "@/public/info/serves.png";
import Image from "next/image";

const dataInfo = [
  {
    icon: qlt,
    title: "جودة المنتجات والابتكار",
    desc: "نفخر بجودة منتجاتنا ونسعى دائمًا للابتكار لضمان بقائنا في المقدمة. إن التزامنا بتقديم أعلى مستويات الجودة يضمن لكم الحصول على أزياء موحدة متينة وجذابة.",
  },
  {
    icon: sped,
    title: "سرعة التوصيل",
    desc: "ندرك أهمية المواعيد النهائية ونعمل جاهدين لضمان وصول الطلبات في الوقت المحدد. يمكنكم الاعتماد علينا لتوفير خدمات سريعة وموثوقة.",
  },
  {
    icon: save,
    title: "أسعار تنافسية",
    desc: "نقدم أفضل الأسعار دون المساس بالجودة، مما يتيح لكم الحصول على أفضل قيمة مقابل أموالكم. نحن ملتزمون بتقديم حلول اقتصادية تلبي جميع احتياجاتكم.",
  },
  {
    icon: serves,
    title: "خدمة عملاء متميزة وتقنيات حديثة",
    desc: "نقدم خدمة عملاء استثنائية مع استقبال جيد وفريق عمل متفانٍ لضمان رضائكم الكامل ، كما نوفر خدمات متميزة بتعدد الفروع في المملكة العربية السعودية، ونستخدم أحدث التقنيات لضمان تقديم أفضل الحلول لكم.",
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
        <img src={logo} alt="logo" className="w-[30%] h-auto opacity-10" />
      </div>
      {/* info box  */}
      <div className="min-h-[500px] w-[80%] flex justify-center items-center flex-wrap gap-8 ">
        {dataInfo.map((elm, ind) => (
          <div key={ind} className="bg-gray/10 p-8 w-[300px] h-[300px]">
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
