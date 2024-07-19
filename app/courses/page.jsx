// import vid from "@/asset/video/test.mp4";

import Image from "next/image";
import Link from "next/link";
import img1 from "@/public/image/vector/vic1.png";
import img2 from "@/public/image/vector/vic2.png";
import img3 from "@/public/image/vector/vic3.png";
import allBook from "@/public/image/vector/allBook.png";
import video from "@/public/image/vector/video.png";
import series from "@/public/image/vector/series.png";

export default function Courses() {
  return (
    <div className="screenPadding">
      {/* category navbar  */}

      <div className="py-8 w-full h-full flex justify-center items-center flex-wrap  gap-8 ">
        <div className="w-[300px] h-[200px] relative">
          <Link
            href="/courses/videos"
            className="w-[300px] h-[200px] pb-8 flex justify-center items-end font-TitleFont text-2xl font-semibold  rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500"
          >
            الفيديوهات التعليمية
          </Link>
          <Image
            src={img1}
            width={300}
            height={200}
            quality={100}
            className="absolute top-0 left-0 w-[120px] h-[120px] z-10"
            alt="video"
          />
          <Image
            src={video}
            width={300}
            height={200}
            quality={100}
            className="absolute top-2 right-2 w-[140px] h-[120px] z-10"
            alt="video"
          />
        </div>

        <div className="w-[300px] h-[200px] relative">
          <Link
            href="/courses/books"
            className="w-[300px] h-[200px] pb-8 flex justify-center items-end font-TitleFont text-2xl font-semibold  rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500"
          >
            المذكرات المدرسية{" "}
          </Link>
          <Image
            src={img2}
            width={300}
            height={200}
            quality={100}
            className="absolute top-0 left-0 w-[120px] h-[120px] z-10"
            alt="video"
          />
          <Image
            src={allBook}
            width={300}
            height={200}
            quality={100}
            className="absolute top-2 right-2 w-[140px] h-[120px] z-10"
            alt="video"
          />
        </div>

        <div className="w-[300px] h-[200px] relative">
          <Link
            href="/courses/series"
            className="w-[300px] h-[200px] pb-8 flex justify-center items-end font-TitleFont text-2xl font-semibold  rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500"
          >
            سلاسل التأسيس
          </Link>
          <Image
            src={img3}
            width={300}
            height={200}
            quality={100}
            className="absolute top-0 left-0 w-[120px] h-[120px] z-10"
            alt="video"
          />
          <Image
            src={series}
            width={300}
            height={200}
            quality={100}
            className="absolute top-2 right-2 w-[140px] h-[120px] z-10"
            alt="video"
          />
        </div>
      </div>
    </div>
  );
}
