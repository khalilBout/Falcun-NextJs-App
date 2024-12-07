import React from "react";
import { getBlogs } from "@/Utils/getData/getBlogs";
import BlogCard from "../UiComponents/ListBlog/BlogCard";
import { getProducts } from "@/Utils/getData/getProducts";
import Card from "@/app/UiComponents/Card/Card";

const page = async () => {
  const AllBlogs = await getBlogs();

  const AllProducts = await getProducts();
  const reletiveProducts = AllProducts.slice(0, 4);

  return (
    <div className=" mt-20 mdl:mt-28 ">
      <div className=" screenPadding m-8 flex justify-center items-center gap-4">
        {AllBlogs?.lenght > 0 ? (
          AllBlogs?.map((elm) => <BlogCard data={elm} key={elm._id} />)
        ) : (
          <EmptyView />
        )}
      </div>
      <div className="screenPadding bg-lightBlue/20 py-8">
        <h1 className="text-2xl mdl:text-4xl font-fontTitle py-4">
          من ضمن خدماتنا :
        </h1>
        <div className="flex justify-center items-center gap-4 flex-wrap">
          {reletiveProducts?.map((elm, ind) => (
            <Card key={ind} data={elm} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;