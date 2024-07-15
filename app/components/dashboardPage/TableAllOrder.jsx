import DeleteOrder from "@/app/components/dashboardPage/DeleteOrder";

import Link from "next/link";
const TableAllOrder = ({ data }) => {
  return (
    <>
      <table className="w-full min-w-[840px] font-TitleFont">
        <thead className="text-[15px]">
          <tr>
            <th className="text-[14px] font-bold font-TitleFont text-gray-400 py-2 px-4 bg-gray-50 text-center rounded-tl-md rounded-bl-md">
              الزبون
            </th>
            <th className="text-[14px] font-bold font-TitleFont text-gray-400 py-2 px-4 bg-gray-50 text-center">
              الكتب
            </th>
            <th className="text-[14px] font-bold font-TitleFont text-gray-400 py-2 px-4 bg-gray-50 text-center">
              السعر الإجمالي
            </th>
            <th className="text-[14px] font-bold font-TitleFont text-gray-400 py-2 px-4 bg-gray-50 text-center rounded-tr-md rounded-br-md">
              العنوان
            </th>
            <th className="text-[14px] font-bold font-TitleFont text-gray-400 py-2 px-4 bg-gray-50 text-center rounded-tr-md rounded-br-md">
              رقم الهاتف
            </th>
            <th className="text-[14px] font-bold font-TitleFont text-gray-400 py-2 px-4 bg-gray-50 text-center rounded-tr-md rounded-br-md">
              مسح الطلب
            </th>
          </tr>
        </thead>
        <tbody className="text-[14px] font-bold text-gray-900 font-TitleFont">
          {data?.map((order, ind) => (
            <tr key={ind} className="bg-slate-100 mb-1">
              <td className="py-2 px-4 border-b border-b-gray-50">
                <div className="flex items-center">
                  <Link
                    href=""
                    className="text-center  text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 "
                  >
                    {order?.shippingAddress?.clientName}
                  </Link>
                </div>
              </td>
              <td className="py-2 px-4 border-b border-b-gray-50">
                {order?.orderItems?.map((TheBook, index) => {
                  return (
                    <div key={index} className="flex gap-2 my-1">
                      <div className="flex gap-1 justify-between items-center">
                        <span className="text-[14px] font-medium text-gray-700 bg-red-200 rounded-md px-1 ">
                          {TheBook.titleBook}
                        </span>
                        <span className="text-[15px] font-medium text-gray-700 bg-red-200 rounded-md px-1 ">
                          {TheBook.priceBook} $
                        </span>
                        {/* <span className="text-[14px] font-medium text-gray-700 bg-red-200 rounded-md px-1 ">
                          {TheBook.season === "season-1"
                            ? "الفصل-1"
                            : "الفصل-2"}
                        </span> */}
                        <span className="text-[15px] font-medium text-gray-700 bg-red-200 rounded-md px-1 ">
                          الكمية: {TheBook.Qt}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </td>

              <td className="py-2 px-4 border-b border-b-gray-50 text-center">
                <span className="text-[16px] font-medium text-gray-700">
                  {order?.totolPyment} دينار
                </span>
              </td>
              <td className="py-2 px-4 border-b border-b-gray-50 text-center">
                <span className="text-[13px] max-w-[380px] font-medium text-gray-700">
                  {order?.shippingAddress?.address}
                </span>
              </td>
              <td className="py-2 px-4 border-b border-b-gray-50 text-center">
                <span className="text-[15px] font-medium text-gray-700">
                  {order?.shippingAddress?.phone}
                </span>
              </td>
              {/* <td className="py-2 px-4 border-b border-b-gray-50 text-center">
                {order?.isProcess ? (
                  <>
                     <ProcessOrder orderID={`${order._id}`} /> 
                    <span className=" w-[80px] inline-block p-1 rounded bg-red-500/40 text-gray-600 font-medium text-[14px] leading-none ">
                      قيد الإنتظار
                    </span>
                  </>
                ) : (
                  <span className="w-[60px] inline-block p-1 rounded bg-emerald-500/80 text-gray-600 font-medium text-[14px] leading-none">
                    تم
                  </span>
                )}
              </td> */}
              <td className="py-2 px-4 border-b border-b-gray-50">
                <div className="flex justify-center items-center">
                  {/* <ProcessOrder order={order} /> */}
                  <DeleteOrder id={order._id} />
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
