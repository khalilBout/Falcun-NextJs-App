import React from "react";
import emptyImg from "@/public/empty.webp";
import Image from "next/image";
const EmptyView = () => {
  return (
    <div className="w-[380px] h-[240px] mt-4">
      <Image
        src={emptyImg}
        alt="empty data"
        className="w-full h-full object-cover object-center"
        quality={100}
      />
    </div>
  );
};

export default EmptyView;
