import DeleteLib from "@/app/components/dashboardPage/DeleteLib";

const TableAllLibrys = ({ data }) => {
  return (
    <>
      <table className="w-full min-w-[840px] font-TitleFont">
        <thead className="text-[15px]">
          <tr>
            <th className="text-[14px] font-bold font-TitleFont text-gray-400 py-2 px-4 bg-gray-50 text-center rounded-tl-md rounded-bl-md">
              المكتبة
            </th>
            <th className="text-[14px] font-bold font-TitleFont text-gray-400 py-2 px-4 bg-gray-50 text-center">
              العنوان
            </th>
            <th className="text-[14px] font-bold font-TitleFont text-gray-400 py-2 px-4 bg-gray-50 text-center rounded-tr-md rounded-br-md">
              التعديل
            </th>
          </tr>
        </thead>
        <tbody className="text-[14px] font-bold text-gray-900 font-TitleFont">
          {data?.map((lib, ind) => (
            <tr key={ind} className="bg-slate-100 mb-1">
              <td className="py-2 px-4 border-b border-b-gray-50">
                <span className="text-center text-[13px] font-medium text-gray-400">
                  {lib.name}
                </span>
              </td>

              <td className="py-2 px-4 border-b border-b-gray-50 text-center">
                <span className="text-[13px] font-medium text-gray-400">
                  {lib.address}
                </span>
              </td>

              <td className="py-2 px-4 border-b border-b-gray-50">
                <div className="flex justify-center gap-1">
                  {/* <ProcessOrder order={order} /> */}
                  <DeleteLib id={lib._id} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TableAllLibrys;
