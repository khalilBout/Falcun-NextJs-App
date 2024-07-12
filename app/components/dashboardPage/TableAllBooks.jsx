import React from "react";
// import BtnDelete from "@/utils/action/BtnDelete";
import Link from "next/link";
// import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import Image from "next/image";
import DeleteBook from "@/app/components/dashboardPage/DeleteBook";

// import ProcessOrder from "@/utils/action/ProcessOrder";
const TableAllBooks = ({ data }) => {
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
              صورة الغلاف
            </th>
            <th className="text-[14px] font-TitleFont text-right font-medium text-gray-400 py-2 px-4 bg-gray-50">
              العنوان
            </th>
            <th className="text-[14px] font-TitleFont text-right font-medium text-gray-400 py-2 px-4 bg-gray-50 rounded-tr-md rounded-br-md">
              الفصل
            </th>
            <th className="text-[14px] font-TitleFont text-right font-medium text-gray-400 py-2 px-4 bg-gray-50 rounded-tr-md rounded-br-md">
              الصف
            </th>
            <th className="text-[14px] font-TitleFont text-right font-medium text-gray-400 py-2 px-4 bg-gray-50 rounded-tr-md rounded-br-md">
              القسم
            </th>
            <th className="text-[14px] font-TitleFont text-right font-medium text-gray-400 py-2 px-4 bg-gray-50 rounded-tr-md rounded-br-md">
              السعر
            </th>
            <th className="text-[14px] font-TitleFont text-right font-medium text-gray-400 py-2 px-4 bg-gray-50 rounded-tr-md rounded-br-md">
              حدف
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((book, index) => (
            <Tr item={book} key={index} />
          ))}
        </tbody>
      </table>
    </>
  );
};
export default TableAllBooks;

function Tr({ item }) {
  const { _id, title, price, urlBook, levelsInf, TheClass, season } = item;
  return (
    <>
      <tr className="bg-red-100">
        {/* Image  */}
        <td className="py-2 px-4 border-b border-b-gray-50 ">
          <div className="relative h-[60px] w-[60px]">
            <Image
              fill
              quality={100}
              objectFit="cover"
              objectPosition="center"
              src={urlBook.url || productNoImg}
              alt={title}
              className="rounded-full object-cover overflow-hidden bg-teal-100"
              // className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
            />
          </div>
        </td>

        {/* name of book  */}
        <td className="text-[13px] font-TitleFont font-medium text-right py-2 px-4 border-b border-b-gray-50">
          <span className="text-[16px] font-medium text-gray-800">{title}</span>
        </td>
        {/* season of book  */}
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
        {/*price of book  */}
        <td className="text-[13px] font-TitleFont font-medium text-right py-2 px-4 border-b border-b-gray-50">
          <span className="text-[15px] font-medium text-gray-600">{price}</span>
        </td>

        {/* Actions  */}

        <td className="text-[13px] font-TitleFont font-medium text-right py-2 px-4 border-b border-b-gray-50">
          <DeleteBook id={_id} />
        </td>
      </tr>
    </>
  );
}
