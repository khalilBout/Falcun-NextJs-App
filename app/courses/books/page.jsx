import React from "react";
import DisplayBooks from "@/app/components/CoursesPage/BookPage/DisplayBooks";

const page = async () => {
  let allBooks = [];

  try {
    const res = await fetch(`${process.env.GLOBAL_URL}/api/admin/book`, {
      method: "GET",
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const text = await res.text();

    // Check if the response is valid JSON
    try {
      allBooks = JSON.parse(text);
    } catch (err) {
      console.log("Response is not valid JSON:", text);
      throw err;
    }
  } catch (err) {
    console.log(err);
  }

  return (
    <>
      <DisplayBooks allBooks={allBooks} />
    </>
  );
};

export default page;

// import React from "react";
// import DisplayBooks from "@/app/components/CoursesPage/BookPage/DisplayBooks";

// const page = async () => {
//   let allBooks = [];
//   try {
//     const res = await fetch(`${process.env.GLOBAL_URL}/api/admin/book`, {
//       method: "GET",
//     });
//     allBooks = await res.json();
//   } catch (err) {
//     console.log(err);
//   }

//   return (
//     <>
//       <DisplayBooks allBooks={allBooks} />
//     </>
//   );
// };

// export default page;
