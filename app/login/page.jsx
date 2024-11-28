import React from "react";
import Login from "@/app/UiComponents/Login/Login";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await getServerSession();
  if (session) {
    redirect("/?callbackUrl=/login");
  }
  return (
    <div className="screenPadding w-screen flex justify-center items-center ">
      <Login />
    </div>
  );
};

export default page;
