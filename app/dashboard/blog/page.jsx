// import Link from "next/link";
// import { getBlogs } from "@/Utils/getData/getBlogs";
// import TableAllBlog from "@/app/UiComponents/Dashboard/TableAllBlog";
// import EmptyView from "@/app/UiComponents/Ui/EmptyView";

// const pageBlogAdmin = async () => {
//   const allBlogs = await getBlogs();
//   return (
//     <div className="w-full font-bodyFont">
//       <div className="p-2 bg-white border border-gray-100 shadow-md shadow-black/5 rounded-md">
//         <div className="flex justify-between  items-start ">
//           <h2 className=" font-fontTitle text-2xl p-2 font-medium">المدونات</h2>
//           <Link href="/dashboard/blog/addBlog">
//             <button className=" font-TitleFont mx-2 text-sm font-medium py-2 px-4 rounded-md rounded-bl-md  bg-green-300 text-primeColor hover:text-lightText hover:bg-primeColor">
//               إضافة مدونة
//             </button>
//           </Link>
//         </div>
//         <div className="bg-black h-[1px] w-full"></div>
//         <div className="w-full min-h-[350px]">
//           {allBlogs?.length > 0 ? (
//             <TableAllBlog data={allBlogs} />
//           ) : (
//             <>
//               <div className="w-full flex justify-center items-center">
//                 <EmptyView />
//               </div>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default pageBlogAdmin;
import Link from "next/link";
import { getBlogs } from "@/Utils/getData/getBlogs";
import TableAllBlog from "@/app/UiComponents/Dashboard/TableAllBlog";
import EmptyView from "@/app/UiComponents/Ui/EmptyView";

const PageBlogAdmin = async () => {
  try {
    // Fetch all blogs
    const { AllBlogs } = await getBlogs();

    return (
      <div className="w-full font-bodyFont">
        <div className="p-4 bg-white border border-gray-100 shadow-md shadow-black/5 rounded-md">
          {/* Header */}
          <div className="flex justify-between items-center">
            <h2 className="font-fontTitle text-2xl font-medium">المدونات</h2>
            <Link href="/dashboard/blog/addBlog">
              <button className="font-TitleFont text-sm font-medium py-2 px-4 rounded-md bg-green-300 text-primeColor hover:text-lightText hover:bg-primeColor transition-all">
                إضافة مدونة
              </button>
            </Link>
          </div>

          {/* Divider */}
          <div className="bg-black h-[1px] w-full my-4"></div>

          {/* Blog Table or Empty View */}
          <div className="w-full min-h-[350px] flex justify-center items-center">
            {AllBlogs?.length > 0 ? (
              <TableAllBlog data={AllBlogs} />
            ) : (
              <EmptyView />
            )}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return (
      <div className="w-full font-bodyFont flex justify-center items-center min-h-[350px]">
        <p className="text-xl text-red-500">
          An error occurred while loading blogs. Please try again later.
        </p>
      </div>
    );
  }
};

export default PageBlogAdmin;
