// import vid from "@/asset/video/test.mp4";

import Image from "next/image";
import Link from "next/link";
import img1 from "@/public/image/vector/vic1.png";
import img2 from "@/public/image/vector/vic2.png";
import img3 from "@/public/image/vector/vic3.png";

export default function Courses() {
  return (
    <div className="screenPadding">
      {/* category navbar  */}

      <div className="py-8 w-full h-full flex justify-center items-center flex-wrap  gap-8 ">
        <div className="w-[300px] h-[200px] relative">
          <Link
            href="/courses/videos"
            className="w-[300px] h-[200px] flex justify-center items-center font-TitleFont text-2xl font-semibold bg-blue-200/20 rounded-lg"
          >
            الفيديوهات التعليمية
          </Link>
          <Image
            src={img1}
            width={300}
            height={200}
            className=" absolute top-0 left-0 w-[300px] h-[200px] -z-10"
            alt="video"
          />
        </div>

        <div className="w-[300px] h-[200px] relative">
          <Link
            href="/courses/books"
            className="w-[300px] h-[200px] flex justify-center items-center font-TitleFont text-2xl font-semibold bg-blue-200/20 rounded-lg"
          >
            المذكرات التعليمية
          </Link>
          <Image
            src={img2}
            width={300}
            height={200}
            className=" absolute top-0 left-0 w-[300px] h-[200px] -z-10"
            alt="video"
          />
        </div>

        <div className="w-[300px] h-[200px] relative">
          <Link
            href="/courses/series"
            className="w-[300px] h-[200px] flex justify-center items-center font-TitleFont text-2xl font-semibold bg-blue-200/20 rounded-lg"
          >
            السلاسل التعليمية
          </Link>
          <Image
            src={img3}
            width={300}
            height={200}
            className=" absolute top-0 left-0 w-[300px] h-[200px] -z-10"
            alt="video"
          />
        </div>
      </div>
    </div>
  );
}
