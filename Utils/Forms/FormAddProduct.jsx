"use client";
import React from "react";

const FormAddProduct = ({ form, setForm }) => {
  const categoryData = ["Printing", "Embroidery", "Uniforms"];

  const handelChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form>
      <div className="grid lg:grid-cols-2 gap-2 mx-2 ">
        <input
          className=" h-[40px] border-[1px] rounded-lg focus:border-pink-200 px-3 focus:border-2 outline-none m-1"
          placeholder="إسم المنتج"
          type="text"
          name="title"
          onChange={handelChange}
        />

        <select
          className=" h-[40px] border-[1px] rounded-lg focus:border-pink-200 px-3 focus:border-2 outline-none m-1 bg-blue-200"
          name="category"
          onChange={handelChange}
          required
        >
          <option value="" className="text-gray-100 h-[40px]">
            الصنف
          </option>
          {categoryData?.map((elm) => (
            <option key={elm} value={elm}>
              {elm}
            </option>
          ))}
        </select>
      </div>
      <div className="m-2">
        <textarea
          rows={3}
          className="w-full border-[1px] rounded-lg focus:border-pink-200 px-3 focus:border-2 outline-none "
          placeholder="وصف المنتج"
          type="text"
          name="description"
          onChange={handelChange}
        />
      </div>
    </form>
  );
};

export default FormAddProduct;
