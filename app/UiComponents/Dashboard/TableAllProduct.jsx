import React from "react";
import Image from "next/image";
import DeleteProduct from "@/app/UiComponents/Dashboard/DeleteProduct";
// import NoImg from "@/public/image/noImgeBook.webp";

const TableAllProduct = ({ data }) => {
  return (
    <>
      <table
        className="w-full min-w-[540px]"
        data-tab-for="product"
        data-page="active"
      >
        <thead>
          <tr>
            <th className="text-[14px] font-TitleFont text-right  font-medium text-gray-400 py-2 px-4 bg-gray-50 ">
              صورة المنتج
            </th>
            <th className="text-[14px] font-TitleFont text-right font-medium text-gray-400 py-2 px-4 bg-gray-50">
              إسم المنتج
            </th>

            <th className="text-[14px] font-TitleFont text-right font-medium text-gray-400 py-2 px-4 bg-gray-50 rounded-tr-md rounded-br-md">
              الصنف
            </th>

            <th className="text-[14px] font-TitleFont text-right font-medium text-gray-400 py-2 px-4 bg-gray-50 rounded-tr-md rounded-br-md">
              حدف
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((elm, index) => (
            <Tr item={elm} key={index} />
          ))}
        </tbody>
      </table>
    </>
  );
};
export default TableAllProduct;

function Tr({ item }) {
  const { _id, title, category, mainImg } = item;
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
              src={mainImg}
              alt=""
              className="rounded-full object-cover overflow-hidden bg-teal-100"
              // className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
            />
          </div>
        </td>

        {/* name of book  */}
        <td className="text-[13px] font-TitleFont font-medium text-right py-2 px-4 border-b border-b-gray-50">
          <span className="text-[16px] font-medium text-gray-800">{title}</span>
        </td>

        {/* class of Video  */}

        <td className="text-[13px] font-TitleFont font-medium text-right py-2 px-4 border-b border-b-gray-50">
          <span className="text-[14px] font-medium text-gray-700">
            {category}
          </span>
        </td>

        {/* Actions  */}

        <td className="text-[13px] font-TitleFont font-medium text-right py-2 px-4 border-b border-b-gray-50">
          <DeleteProduct id={_id} />
        </td>
      </tr>
    </>
  );
}
