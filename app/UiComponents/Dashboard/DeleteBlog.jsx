"use client";
import React from "react";
import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";

const DeleteBlog = ({ id }) => {
  const router = useRouter();

  const removeItem = async () => {
    const confirmed = confirm("هل تريد مسح المدونة ؟");

    if (confirmed) {
      const res = await fetch(`/api/blog/${id}`, {
        method: "DELETE",
      });
      if (res.status === 200) {
        router.refresh();
      }
    }
  };

  return (
    <button onClick={removeItem} className="cursor-pointer">
      <HiOutlineTrash size={20} className="text-red-500 " />
    </button>
  );
};

export default DeleteBlog;
