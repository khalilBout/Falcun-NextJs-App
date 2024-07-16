"use client";
import React, { useState } from "react";

import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";

import sct1 from "@/public/image/slider/sct-1.png";
import sct2 from "@/public/image/slider/sct-2.png";
import sct3 from "@/public/image/slider/sct-3.png";

const SliderHome = () => {
  const [dotActive, setDocActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (prev, next) => {
      setDocActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "7%",
          transform: "translateY(-50%)",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "30px",
                color: "#262626",
                borderRight: "3px #262626 solid",
                padding: "8px 0",
                cursor: "pointer",
              }
            : {
                width: "30px",
                color: "transparent",
                borderRight: "3px white solid",
                padding: "8px 0",
                cursor: "pointer",
              }
        }
      >
        0{i + 1}
      </div>
    ),
    responsive: [
      {
        breakpoint: 576,
        settings: {
          dots: true,
          appendDots: (dots) => (
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "2%",
                transform: "translateY(-50%)",
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              style={
                i === dotActive
                  ? {
                      width: "25px",
                      color: "#262626",
                      borderRight: "3px #262626 solid",
                      cursor: "pointer",
                      fontSize: "12px",
                    }
                  : {
                      width: "25px",
                      color: "transparent",
                      borderRight: "3px white solid",
                      cursor: "pointer",
                      fontSize: "12px",
                    }
              }
            >
              0{i + 1}
            </div>
          ),
        },
      },
    ],
  };

  const dataHeroSection = [
    {
      title: "مذكرات مدرسية متكاملة",
      desc: "احصل على مذكرات مدرسية شاملة تساعد الأطفال على متابعة دروسهم وتحقيق أفضل النتائج. محتوى منظم وسهل الاستخدام لكل مستوى.",
      img: sct1,
      url: "/courses/books",
    },
    {
      title: " سلسلة التأسيس",
      desc: "ابدأ رحلة التعلم مع سلسلة التأسيس المصممة بعناية لتأسيس مفاهيم قوية في المواد الأساسية للأطفال. تعلم من البداية بأسلوب شيق",
      img: sct2,
      url: "/courses/videos",
    },
    {
      title: "فيديوهات تعليمية",
      desc: "احصل على مذكرات مدرسية شاملة تساعد الأطفال على متابعة دروسهم وتحقيق أفضل النتائج. محتوى منظم وسهل الاستخدام لكل مستوى.",
      img: sct3,
      url: "/courses/series",
    },
  ];

  return (
    <div className=" overflow-x-hidden">
      <Slider {...settings}>
        {dataHeroSection.map((item, ind) => (
          <Link key={ind} href={item.url} className="relative min-h-[420px] ">
            <div className="w-full h-full min-h-[420px] ">
              <Image
                src={item.img}
                alt="bannerImgTwo"
                fill
                quality={100}
                className="object-cover object-center "
                // sizes="max-width: 480px"
                // fill={true}
              />
            </div>
            <div
              className=" max-w-[400px] mdl:max-w-[480px] xl:max-w-[620px] absolute z-10
           bottom-16 xl:top-52 
             right-6 sml:right-10 mdl:right-20 xl:right-28
             "
            >
              <h2 className="text-lime-500 text-right font-TitleFont text-[20px] sml:text-[22px] mdl:text-[28px] xl:text-[36px] font-bold">
                {item.title}
              </h2>
              <p className=" text-lime-300 sml:pr-4  text-right text-[18px] sml:text-[18px] mdl:text-[22px] xl:text-[28px] font-bodyFont font-medium">
                {item.desc}
              </p>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default SliderHome;
