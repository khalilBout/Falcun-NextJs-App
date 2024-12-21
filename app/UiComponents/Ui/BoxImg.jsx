"use client";
import Image from "next/image";
import { useState } from "react";

const BoxImg = ({ dataProduct }) => {
  const { mainImg, listImage } = dataProduct;
  const newList = [mainImg, ...listImage];
  const [bigImg, setBigImg] = useState(newList[0]);

  return (
    <div className="w-full ">
      <div className="  w-full h-full  flex flex-col md:flex-row justify-center items-center gap-4">
        <div className=" w-full md:w-2/3 min-h-[300px] max-h-[480px] flex justify-center items-center">
          <Image
            src={bigImg}
            alt="main image"
            quality={100}
            width={800}
            height={500}
            className="h-full min-h-[300px] max-h-[480px] w-auto object-cover object-center "
          />
        </div>
        <div className="flex flex-rox md:flex-col gap-2 md:w-1/3">
          {newList?.map((elm, ind) => (
            <div
              key={ind}
              className="h-[70px] mdl:h-[90px] w-[55px] mdl:w-[80px] border border-black cursor-pointer flex justify-center items-center hover:scale-110 duration-200 transition-all"
            >
              <Image
                src={elm}
                alt={elm.title}
                quality={100}
                width={120}
                height={80}
                className=" cursor-pointer w-auto h-[65px] mdl:h-[85px] object-cover object-center"
                onClick={() => {
                  setBigImg(newList[ind]);
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BoxImg;
