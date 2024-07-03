"use client";
import React from "react";
const FormAddPost = ({ handelChange }) => {
  const categoryList = ["cultural", "social", "educational", "sports"];
  return (
    <form>
      <div className="text-[15px] flex flex-col gap-2">
        <input
          className="px-2 py-1  border-b-[1px] outline-none m-1"
          placeholder="Name"
          type="text"
          name="title"
          onChange={handelChange}
        />

        <select
          className=" px-2 py-1  border-b-[1px] outline-none m-1 bg-blue-200"
          name="category"
          onChange={handelChange}
          required
        >
          <option value="" className="text-gray-100 h-[40px]">
            Category
          </option>
          {categoryList?.map((cty) => (
            <option key={cty} value={cty}>
              {cty.toUpperCase()}
            </option>
          ))}
        </select>

        <textarea
          rows={6}
          className="w-full px-2 py-1  border-b-[1px] focus:border-pink-200 focus:border-2 outline-none m-1"
          placeholder="Description "
          type="text"
          name="description"
          onChange={handelChange}
        />
      </div>
    </form>
  );
};

export default FormAddPost;
