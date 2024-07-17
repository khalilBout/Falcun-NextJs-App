import React from "react";
// import BtnDelete from "@/utils/action/BtnDelete";
import Link from "next/link";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import Image from "next/image";
import DeleteVideo from "@/app/components/dashboardPage/DeleteVideo";

const TableAllVideo = ({ data }) => {
  return (
    <>
      <table
        className="w-full min-w-[540px]"
        data-tab-for="video"
        data-page="active"
      >
        <thead>
          <tr>
            <th className="text-[14px] font-TitleFont text-right  font-medium text-gray-400 py-2 px-4 bg-gray-50 ">
              العنوان
            </th>
            <th className="text-[14px] font-TitleFont text-right font-medium text-gray-400 py-2 px-4 bg-gray-50">
              الفصل
            </th>
            <th className="text-[14px] font-TitleFont text-right font-medium text-gray-400 py-2 px-4 bg-gray-50 rounded-tr-md rounded-br-md">
              الصف
            </th>
            <th className="text-[14px] font-TitleFont text-right font-medium text-gray-400 py-2 px-4 bg-gray-50 rounded-tr-md rounded-br-md">
              القسم
            </th>
            {/* <th className="text-[14px] font-TitleFont text-right font-medium text-gray-400 py-2 px-4 bg-gray-50 rounded-tr-md rounded-br-md">
              الإعجاب
            </th> */}
            {/* <th className="text-[14px] font-TitleFont text-right font-medium text-gray-400 py-2 px-4 bg-gray-50 rounded-tr-md rounded-br-md">
              التعليقات
            </th> */}
            <th className="text-[14px] font-TitleFont text-right font-medium text-gray-400 py-2 px-4 bg-gray-50 rounded-tr-md rounded-br-md">
              حدف
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((video, index) => (
            <Tr item={video} key={index} />
          ))}
        </tbody>
      </table>
    </>
  );
};
export default TableAllVideo;

function Tr({ item }) {
  const {
    _id,
    title,
    urlVideo,
    levelsInf,
    TheClass,
    season,
    like,
    listComment,
  } = item;
  // const {size, selectedColor, url}=listModels
  return (
    <>
      <tr className="bg-blue-100">
        {/* Image  */}
        {/* <td className="py-2 px-4 border-b border-b-gray-50 ">
          <div className="relative h-[60px] w-[60px]">
            <Image
              fill
              quality={100}
              objectFit="cover"
              objectPosition="center"
              src={urlVideo.thumbnail}
              alt={title}
              className="rounded-full object-cover overflow-hidden bg-teal-100"
              // className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
            />
          </div>
        </td> */}

        {/* name of video  */}
        <td className="text-[13px] font-TitleFont font-medium text-right py-2 px-4 border-b border-b-gray-50">
          <span className="text-[16px] font-medium text-gray-800">{title}</span>
        </td>
        {/* season of description video  */}
        <td className="text-[13px] font-TitleFont font-medium text-right py-2 px-4 border-b border-b-gray-50">
          <span className="text-[16px] font-medium text-gray-800">
            {season === "season-1" ? "الفصل 1" : "الفصل 2"}
          </span>
        </td>
        {/* levels of Video  */}
        <td className="text-[13px] font-TitleFont font-medium text-right py-2 px-4 border-b border-b-gray-50">
          <span className="text-[14px] font-medium text-gray-700">
            {levelsInf.levelTitle}
          </span>
        </td>
        {/* class of Video  */}

        <td className="text-[13px] font-TitleFont font-medium text-right py-2 px-4 border-b border-b-gray-50">
          <span className="text-[14px] font-medium text-gray-700">
            {TheClass}
          </span>
        </td>
        {/*likes of Video  */}
        {/* <td className="text-[13px] font-TitleFont font-medium text-right py-2 px-4 border-b border-b-gray-50">
          <span className="text-[15px] font-medium text-gray-600">
            {like.length}
          </span>
        </td> */}
        {/*list Comment of Video  */}
        {/* <td className="text-[13px] font-TitleFont font-medium text-right py-2 px-4 border-b border-b-gray-50">
          <span className="text-[15px] font-medium text-gray-600">
            {listComment.length}
          </span>
        </td> */}

        {/* Actions  */}

        <td className="text-[13px] font-TitleFont font-medium text-right py-2 px-4 border-b border-b-gray-50">
          <DeleteVideo id={_id} />
        </td>
      </tr>
    </>
  );
}
