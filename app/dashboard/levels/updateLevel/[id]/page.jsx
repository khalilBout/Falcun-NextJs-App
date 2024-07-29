import { getLevelById } from "@/Utils/getData/getLevels";
import FormUpdateLevel from "@/Utils/Forms/FormUpdateLevel";
import React from "react";

const page = async ({ params }) => {
  const id = params.id;
  const data = await getLevelById(id);
  //   console.log("data:", data);

  return (
    <div className="w-full m-2">
      <h2 className="text-2xl font-bold m-2 ">
        <span className="text-gray-700"> التعديل على الصف : </span>
        <span className="text-red-400"> {data?.title}</span>
      </h2>
      <FormUpdateLevel data={data} />
    </div>
  );
};

export default page;
