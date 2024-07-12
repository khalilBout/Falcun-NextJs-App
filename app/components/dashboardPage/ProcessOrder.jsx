"use client";

import React from "react";
import { BiEdit } from "react-icons/bi";

const ProcessOrder = ({ order }) => {
  const id = order?._id;
  const newOrder = {
    ...order,
    isProcess: false,
  };
  const handelUpdateOrder = async () => {
    // try {
    const res = await fetch(`/api/order/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newOrder),
    });

    if (res.status === 200) {
      toast.success("Order is valid.");
      router.refresh();
    } else {
      console.log("error to updat order");
    }
  };
  return (
    <button onClick={handelUpdateOrder} className="cursor-pointer">
      <BiEdit size={20} className="text-green-500 " />
    </button>
  );
};

export default ProcessOrder;
