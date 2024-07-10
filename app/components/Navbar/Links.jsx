import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";

const Links = ({ dataLink }) => {
  const session = useSession();
  console.log("session", session);
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

        {session.status === "unauthenticated" &&
          session.data.user.role ===
            "admin"(
              <li key="admin">
                <Link
                  className="text-primeColor font-TitleFont font-bold mdl:text-[20px] xl:text-[24px] "
                  href="/dashboard"
                >
                  لوحة التحكم
                </Link>
              </li>
            )}
      </ul>
    </motion.div>
  );
};

export default Links;
