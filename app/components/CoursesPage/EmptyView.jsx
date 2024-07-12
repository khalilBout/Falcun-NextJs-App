import Image from "next/image";
import React from "react";
import noData from "@/public/image/noData.png";

const EmptyView = () => {
  return (
    <div className=" w-[550px] h-[440px] flex justify-center items-center">
      <Image
        src={noData}
        quality={100}
        width={500}
        height={423}
        alt=" no Data"
        className=""
      />
    </div>
  );
};

export default EmptyView;
