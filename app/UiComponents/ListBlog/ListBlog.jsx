import React from "react";
import BlogCard from "./BlogCard";
import BlogHero from "./BlogHero";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const ListBlog = async () => {
  const res = await fetch(`${baseUrl}/api/blog`, {
    method: "GET",
  });
  const DataBlog = await res.json();

  return (
    <div className="">
      <div className=" hidden lg:block w-full ">
        <BlogHero />
      </div>
      {/* blog card  */}
      <div className=" screenPadding flex justify-center items-center flex-wrap gap-6 py-16">
        {DataBlog?.map((elm, ind) => (
          <BlogCard key={ind} data={elm} />
        ))}
      </div>
    </div>
  );
};

export default ListBlog;
