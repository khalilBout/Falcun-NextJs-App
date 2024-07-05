import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Links = ({ dataLink }) => {
  return (
    <motion.div
      initial={{ y: "-600px", opacity: 0 }}
      animate={{ y: "0%", opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <ul className="flex justify-center items-center gap-8  ">
        {dataLink.map((item, ind) => (
          <li key={ind}>
            <Link
              className="text-primeColor font-TitleFont font-bold mdl:text-[20px] xl:text-[24px] "
              href={item.url}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Links;
