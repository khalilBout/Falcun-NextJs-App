import React from "react";
import noImge from "@/public/image/empty.png";
import Image from "next/image";
// import BtnDelete from "@/utils/action/BtnDelete";
import { BiEdit } from "react-icons/bi";

import Link from "next/link";
const TableAllOrder = ({ data }) => {
  console.log("order data**:", data);

  return (
    <>
      <table className="w-full min-w-[540px]">
        <thead>
          <tr>
            <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tl-md rounded-bl-md">
              الزبون
            </th>
            <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">
              الكتب
            </th>
            <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">
              السعر الإجمالي
            </th>
            <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tr-md rounded-br-md">
              العنوان
            </th>
            <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tr-md rounded-br-md">
              رقم الهاتف
            </th>
            <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tr-md rounded-br-md">
              حالة الطلب
            </th>
            <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tr-md rounded-br-md">
              التعديل
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((order, ind) => (
            <tr key={ind} className="bg-slate-100 mb-1">
              <td className="py-2 px-4 border-b border-b-gray-50">
                <div className="flex items-center">
                  <Link
                    href=""
                    className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                  >
                    {order?.shippingAddress?.clientName}
                  </Link>
                </div>
              </td>
              <td className="py-2 px-4 border-b border-b-gray-50">
                {order?.orderItems?.map((TheBook, index) => {
                  console.log("TheBook:", TheBook);
                  return (
                    <div key={index} className="flex gap-2 my-1">
                      {/* <div className="relative w-[40px] h-[40px] rounded-full bg-black "> 
                       <Image
                        fill
                        objectFit="cover"
                        objectPosition="center"
                        quality={100}
                        src={TheBook.imageUrl || noImge}
                        alt={TheBook.titleBook}
                        className="rounded-full"
                      /> 
                     </div> */}
                      <div className="flex">
                        <span className="text-[14px] font-medium text-gray-700">
                          {TheBook.titleBook}
                        </span>
                        <span className="text-[14px] font-medium text-gray-700">
                          {TheBook.priceBook}
                        </span>
                        <span className="text-[14px] font-medium text-gray-700">
                          {TheBook.season}
                        </span>
                        <span className="text-[14px] font-medium text-gray-700">
                          {TheBook.level}
                        </span>
                        <span className="text-[14px] font-medium text-gray-700">
                          {TheBook.TheClass}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </td>
              <td className="py-2 px-4 border-b border-b-gray-50">
                <span className="text-[14px] font-medium text-gray-600">
                  {order?.totolPyment}$
                </span>
              </td>
              <td className="py-2 px-4 border-b border-b-gray-50">
                <span className="text-[13px] font-medium text-gray-400">
                  {order?.shippingAddress?.address}
                </span>
              </td>
              <td className="py-2 px-4 border-b border-b-gray-50">
                <span className="text-[13px] font-medium text-gray-400">
                  {order?.shippingAddress?.phone}
                </span>
              </td>
              <td className="py-2 px-4 border-b border-b-gray-50">
                {order?.isProcess ? (
                  <>
                    {/* <ProcessOrder orderID={`${order._id}`} /> */}
                    <span className="w-[60px] inline-block p-1 rounded bg-emerald-500/10 text-gray-600 font-medium text-[14px] leading-none bg-red-200">
                      قيد الإنتظار
                    </span>
                  </>
                ) : (
                  <span className="w-[60px] inline-block p-1 rounded bg-emerald-500/10 text-gray-600 font-medium text-[14px] leading-none">
                    تم
                  </span>
                )}
              </td>
              <td className="py-2 px-4 border-b border-b-gray-50">
                <div className="flex gap-1">
                  {/* /admin/order/${order._id} */}
                  {/* <BtnDelete url={`/admin/${order._id}`} /> */}
                  <Link
                    href={`/dashboard/orders/${order._id}`}
                    className="flex justify-center items-center"
                  >
                    <BiEdit size={20} color={"rgb(34,197,94)"}></BiEdit>
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TableAllOrder;
