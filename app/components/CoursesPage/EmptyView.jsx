"use client";
import Image from "next/image";
import React from "react";
import noData from "@/public/image/noData.webp";

const EmptyView = () => {
  return (
    <div className=" overflow-hidden w-[520px] h-[420px] flex justify-center items-center">
      <Image
        src={noData}
        quality={100}
        width={500}
        height={423}
        alt="no Data"
        className=""
      />
    </div>
  );
};

export default EmptyView;
