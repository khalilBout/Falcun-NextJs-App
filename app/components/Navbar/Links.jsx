import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { isAction } from "@reduxjs/toolkit";

const Links = ({ dataLink }) => {
  const pathName = usePathname();
  return (
    <motion.div
      initial={{ y: "-600px", opacity: 0 }}
      animate={{ y: "0%", opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <ul className="flex justify-center items-center gap-8">
        {dataLink.map((item, ind) => {
          const IsActive = pathName === item.url;
          return (
            <li key={ind}>
              <Link
                className={
                  isAction
                    ? " text-primeColor font-TitleFont font-bold mdl:text-[20px] xl:text-[24px]"
                    : " text-primeColor font-TitleFont font-bold mdl:text-[20px] xl:text-[24px]"
                }
                href={item.url}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
};

export default Links;
