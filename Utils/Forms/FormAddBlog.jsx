"use client";
import React from "react";

const FormAddBlog = ({ form, setForm }) => {
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
          className="w-full h-[40px] border-[1px] rounded-lg focus:border-pink-200 px-3 focus:border-2 outline-none"
          placeholder="عنوان المدونة"
          type="text"
          name="title"
          onChange={handelChange}
        />
      </div>
      <div className="m-2">
        <textarea
          rows={3}
          className="w-full border-[1px] rounded-lg focus:border-pink-200 px-3 focus:border-2 outline-none "
          placeholder="نص المدونة "
          type="text"
          name="description"
          onChange={handelChange}
        />
      </div>
    </form>
  );
};

export default FormAddBlog;
