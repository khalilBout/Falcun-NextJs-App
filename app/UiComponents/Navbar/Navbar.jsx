"use client";
import { motion } from "framer-motion";
import Logo from "@/app/UiComponents/Navbar/Logo";
import Links from "@/app/UiComponents/Navbar/Links";
import MobileLink from "@/app/UiComponents/Navbar/MobileLink";
// import { useSession } from "next-auth/react";

const Navbar = () => {
  // const session = useSession();
  // console.log("data auth:", session.data.user.role);
  const link = [
    {
      id: 0,
      name: "الرئيسية",
      href: "/",
    },
    {
      id: 1,
      name: "المدونة",
      href: "/blog",
    },
  ];
  return (
    <div className=" screenPadding fixed bg-white shadow-md font-fontTitle border-b-2 border-black/40 top-0 left-0 right-0 flex justify-between  py-4 z-50 ">
      <Logo />
      <div className=" hidden sml:flex grow gap-4 justify-end items-center">
        <Links link={link} />
      </div>

      <motion.div
        initial={{ x: "-600px", opacity: 0 }}
        animate={{ x: "0%", opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <div className="block md:hidden">
          <MobileLink link={link} />
        </div>
      </motion.div>

      {/* <div>
        <AdminData />
      </div> */}
    </div>
  );
};

export default Navbar;
