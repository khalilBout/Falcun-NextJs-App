import Link from "next/link";
import React from "react";

const Links = () => {
  return (
    <div>
      <ul className="flex justify-center items-center gap-4 text-[15px] ">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/courses">Courses</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Links;
