import React from "react";
import DisplayBooks from "@/app/components/CoursesPage/BookPage/DisplayBooks";

const page = async () => {
  const res = await fetch(`${process.env.GLOBAL_URL}/api/admin/book`, {
    method: "GET",
  });
  const allBooks = await res.json();
  return (
    <>
      <DisplayBooks allBooks={allBooks} />
    </>
  );
};

export default page;
