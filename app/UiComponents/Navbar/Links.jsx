"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { TbLogout } from "react-icons/tb";

const Links = ({ link }) => {
  const session = useSession();

  return (
    <motion.div
      initial={{ y: "-600px", opacity: 0 }}
      animate={{ y: "0%", opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <nav className=" hidden md:block">
        <ul className="flex justify-center items-center max-sm:gap-4 md:gap-6 xl:gap-8 ">
          {link?.map((item) => (
            <li key={item.id}>
              <Link
                className="font-fontTitle text-[13px] md:text-[14px] lg:text-[16px] py-1 px-2 rounded-full hover:scale-110 duration-100 transition-all hover:bg-primary/70"
                href={`${item.href}`}
              >
                {item.name}
              </Link>
            </li>
          ))}
          {session &&
            session?.status === "authenticated" &&
            session?.data.user.role === "admin" && (
              <li>
                <Link
                  className="font-fontTitle text-[13px] md:text-[14px] lg:text-[16px] py-1 px-2 rounded-full hover:scale-110 duration-100 transition-all hover:bg-primary/70"
                  href="/dashboard"
                >
                  لوحة التحكم
                </Link>
              </li>
            )}
          {session && session.status === "authenticated" ? (
            <li className="bg-black/40 hover:bg-black h-[30px] w-[30px] flex justify-center items-center rounded-full">
              <Link className=" " href="/api/auth/signout?callbackUrl=/">
                <TbLogout size={18} className="text-white" />
              </Link>
            </li>
          ) : (
            <button className="hidden md:block px-4 py-1 bg-primary/80 hover:bg-green-300 text-[13px] md:text-[14px] lg:text-[15px] hover:scale-110 duration-100 transition-all rounded-full font-fontTitle">
              <Link href="/">إتصل بنا </Link>
            </button>
          )}
        </ul>
      </nav>
    </motion.div>
  );
};

export default Links;
