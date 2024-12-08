// import { getBlogs } from "@/Utils/getData/getBlogs";
// import { getProducts } from "@/Utils/getData/getProducts";
// import BlogCard from "../UiComponents/ListBlog/BlogCard";
// import Card from "@/app/UiComponents/Card/Card";
// import EmptyView from "@/app/UiComponents/Ui/EmptyView";

// const page = async () => {
//   const { AllBlogs } = await getBlogs();
//   // fetch data of product
//   const AllProducts = await getProducts();
//   const reletiveProducts = AllProducts?.slice(0, 4);

//   return (
//     <div className=" mt-20 mdl:mt-28 ">
//       <div className=" screenPadding m-8 flex justify-center items-center gap-4">
//         {/* {AllBlogs?.lenght > 0 ? (
//           AllBlogs?.map((elm) => <BlogCard data={elm} key={elm._id} />)
//         ) : (
//           <EmptyView />
//         )} */}
//         {AllBlogs?.map((elm) => (
//           <BlogCard data={elm} key={elm._id} />
//         ))}
//       </div>
//       <div className="screenPadding bg-lightBlue/20 py-8">
//         <h1 className="text-2xl mdl:text-4xl font-fontTitle py-4">
//           من ضمن خدماتنا :
//         </h1>
//         <div className="flex justify-center items-center gap-4 flex-wrap">
//           {reletiveProducts?.map((elm, ind) => (
//             <Card key={ind} data={elm} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default page;

import { getBlogs } from "@/Utils/getData/getBlogs";
import { getProducts } from "@/Utils/getData/getProducts";
import BlogCard from "../UiComponents/ListBlog/BlogCard";
import Card from "@/app/UiComponents/Card/Card";
import EmptyView from "@/app/UiComponents/Ui/EmptyView";

const Page = async () => {
  try {
    // Fetch blog and product data
    const { AllBlogs } = await getBlogs();
    const allProducts = await getProducts();
    const relativeProducts = allProducts?.slice(0, 4);

    return (
      <div className="mt-20 mdl:mt-28">
        {/* Blog Section */}
        <div className="screenPadding m-8 flex justify-center items-center gap-4">
          {AllBlogs?.length > 0 ? (
            AllBlogs.map((blog) => <BlogCard data={blog} key={blog._id} />)
          ) : (
            <EmptyView />
          )}
        </div>

        {/* Products Section */}
        <div className="screenPadding bg-lightBlue/20 py-8">
          <h1 className="text-2xl mdl:text-4xl font-fontTitle py-4">
            من ضمن خدماتنا :
          </h1>
          <div className="flex justify-center items-center gap-4 flex-wrap">
            {relativeProducts?.map((product, index) => (
              <Card key={index} data={product} />
            ))}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return (
      <div className="mt-20 mdl:mt-28 text-center">
        <p className="text-xl text-red-500">
          Failed to load content. Please try again later.
        </p>
      </div>
    );
  }
};

export default Page;
