import Link from "next/link";
// import { getSeries } from "@/Utils/getData/getSeries";
// import TableAllSeries from "@/app/components/dashboardPage/TableAllSeries";
// import Pagination from "@/app/components/dashboardPage/Pagination";
// import EmptyView from "@/app/components/CoursesPage/EmptyView";

const pageProductAdmin = async () => {
  //   const page = searchParams?.page || 1;

  //   const { allSeries, count } = await getSeries(page);
  // console.log("allSeries:", allSeries);
  return (
    // <p>product..</p>
    <div className="w-full font-bodyFont">
      <div className="p-2 bg-white border border-gray-100 shadow-md shadow-black/5 rounded-md">
        <div className="flex justify-between  items-start">
          <h2 className=" font-fontTitle text-2xl p-2 font-medium">المنتجات</h2>
          <Link href="/dashboard/product/addProduct">
            <button className=" font-TitleFont mx-2 text-sm font-medium py-2 px-4 rounded-md rounded-bl-md  bg-green-300 text-primeColor hover:text-lightText hover:bg-primeColor">
              إضافة منتج
            </button>
          </Link>
        </div>
        <div className="flex justify-between"></div>
        {/* <div className="w-full">
          {allSeries?.length > 0 ? (
            <TableAllSeries data={allSeries} />
          ) : (
            <>
              <div className="w-full flex justify-center items-center">
                <EmptyView />
              </div>
            </>
          )}
        </div> */}
      </div>
    </div>
  );
};

export default pageProductAdmin;
