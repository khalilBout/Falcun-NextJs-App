import { getVideoById } from "@/Utils/getData/getVideo";
import FormUpdateVideo from "@/Utils/Forms/FormUpdateVideo";
import React from "react";

const page = async ({ params }) => {
  const id = params.id;
  const data = await getVideoById(id);
  //   console.log("data:", data);

  return (
    <div className="w-full m-2">
      <h2 className="text-2xl font-bold m-2 ">
        <span className="text-gray-700"> التعديل على درس : </span>
        <span className="text-red-400"> {data?.title}</span>
      </h2>
      <FormUpdateVideo data={data} />
    </div>
  );
};

export default page;
