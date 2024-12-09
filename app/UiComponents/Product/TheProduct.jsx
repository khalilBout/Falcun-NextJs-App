"use client";
import { useState } from "react";
import BoxImg from "../../UiComponents/Ui/BoxImg";
import { dataUniforms } from "../../UiComponents/data";

import Card from "../../UiComponents/Card/Card";
import Link from "next/link";

const TheProduct = ({ dataProduct, reletiveProducts }) => {
  const [Qt, setQt] = useState(1);
  const handleQt = (e) => {
    setQt(e.target.value);
  };

  const productSend = {
    name: dataProduct.title,
    qt: Qt,
  };

  const sendOrder = () => {
    console.log("data send:", productSend);
  };
  // const dataImage = {}
  return (
    <section>
      <div className="screenPadding flex mdl:flex-row mt-20 mdl:mt-24 py-8 flex-wrap-reverse ">
        {/* info product  */}
        <div className="w-full mdl:w-1/2 p-4 ">
          <h1 className=" font-fontTitle text-2xl mdl:text-3xl ">
            {dataProduct.title}
          </h1>

          <h3 className="py-2 font-fontBody text-xl text-red-600">
            {dataProduct.category === "Uniforms" && "أزياء موحدة"}
            {dataProduct.category === "Embroidery" && "تطريز مباشر"}
            {dataProduct.category === "Printing" && "طباعة حرارية"}
          </h3>

          <div className="">
            <h2 className="font-fontTitle text-xl md:text-2xl mdl:mr-4 ">
              الوصف{" "}
            </h2>
            <h3 className="text-justify font-fontBody text-[15px] mdl:text-[17px]  mdl:pr-16 ">
              {dataProduct.description}
            </h3>
          </div>
          <div className="flex justify-center items-center gap-4 mdl:gap-8 mt-3">
            <div className=" flex justify-center items-center gap-4">
              <h2 className="  text-[15] font-fontTitle">الكمية</h2>
              <input
                className="border-2  w-[45px] bg-slate-100 text-[18px] font-fontBody outline-none px-2 "
                value={Qt}
                onChange={handleQt}
              />
            </div>
            <Link
              href="https://wa.me/966544525016"
              // onClick={sendOrder}
              className="hover:scale-110 duration-200 py-2 mdl:py-3 px-4 mdl:px-8 rounded-full bg-green-300 text-[13] mdl:text-[15] font-fontTitle"
            >
              أطلب الأن
            </Link>
          </div>
        </div>
        {/* images section  */}
        <div className=" w-full mdl:w-1/2 p-4">
          <BoxImg dataProduct={dataProduct} />
        </div>
      </div>

      <div className="screenPadding bg-gray/30 py-8">
        <h1 className="text-2xl mdl:text-4xl font-fontTitle py-4">
          منتجات ذات صلة :
        </h1>
        <div className="flex justify-center items-center gap-4 flex-wrap">
          {reletiveProducts?.map((elm, ind) => (
            <Card key={ind} data={elm} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TheProduct;
