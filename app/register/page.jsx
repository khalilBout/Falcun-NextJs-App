import React from "react";
import Register from "@/app/UiComponents/Register/Register";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await getServerSession();
  if (session) {
    redirect("/?callbackUrl=/login");
  }
  return (
    <div className="screenPadding w-screen flex justify-center items-center ">
      <Register />
    </div>
  );
};

export default page;
