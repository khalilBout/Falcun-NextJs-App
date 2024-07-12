import React from "react";
import DeleteLev from "@/app/components/dashboardPage/Levels/DeleteLev";

const levelsTable = ({ allLevels }) => {
  console.log("data level new:", allLevels);
  return (
    <>
      <table
        className="w-full min-w-[540px]"
        data-tab-for="level"
        data-page="active"
      >
        <thead>
          <tr>
            <th className="text-[15px] font-medium text-gray-400 py-2 px-4 bg-gray-50 text-center">
              المستوى
            </th>

            <th className="text-[15px] font-medium text-gray-400 py-2 px-4 bg-gray-50 center ">
              الأقسام
            </th>

            <th className="text-[15px] font-medium text-gray-400 py-2 px-4 bg-gray-50 text-center">
              التعديل
            </th>
          </tr>
        </thead>
        <tbody>
          {allLevels?.map((level, index) => (
            <Tr item={level} key={index} />
          ))}
        </tbody>
      </table>
    </>
  );
};
export default levelsTable;

function Tr({ item }) {
  const { _id, title, listClass } = item;

  return (
    <>
      <tr className="bg-red-100">
        {/* name of video  */}
        <td className="py-2 px-4 border-b border-b-gray-50">
          <span className="text-[18px] font-TitleFont font-medium text-blue-900">
            {title}
          </span>
        </td>
        {/* description of description video  */}
        <td className="py-2 px-4 border-b border-b-gray-50 ">
          <span className=" flex gap-2 text-[16px] font-medium text-gray-800">
            {listClass?.map((elm, ind) => (
              <p
                key={ind}
                className=" text-[14px] font-TitleFont bg-zinc-100 px-2 py-1 rounded-lg"
              >
                {elm.name}
              </p>
            ))}
          </span>
        </td>

        {/* Actions  */}

        <td className="py-3 px-4 border-b border-b-gray-50 flex justify-center">
          <DeleteLev id={_id} />
        </td>
      </tr>
    </>
  );
}
