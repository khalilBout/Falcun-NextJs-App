import Link from "next/link";
import { getBlogs } from "@/Utils/getData/getBlogs";
import TableAllBlog from "@/app/UiComponents/Dashboard/TableAllBlog";
import EmptyView from "@/app/UiComponents/Ui/EmptyView";

const pageBlogAdmin = async () => {
  const { AllBlogs } = await getBlogs();

  return (
    <div className="w-full font-bodyFont">
      <div className="p-2 bg-white border border-gray-100 shadow-md shadow-black/5 rounded-md">
        <div className="flex justify-between  items-start ">
          <h2 className=" font-fontTitle text-2xl p-2 font-medium">المدونات</h2>
          <Link href="/dashboard/blog/addBlog">
            <button className=" font-TitleFont mx-2 text-sm font-medium py-2 px-4 rounded-md rounded-bl-md  bg-green-300 text-primeColor hover:text-lightText hover:bg-primeColor">
              إضافة مدونة
            </button>
          </Link>
        </div>
        <div className="bg-black h-[1px] w-full"></div>
        <div className="w-full min-h-[350px]">
          {AllBlogs?.length > 0 ? (
            <TableAllBlog data={AllBlogs} />
          ) : (
            <>
              <div className="w-full flex justify-center items-center">
                <EmptyView />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default pageBlogAdmin;
