import { getOrder } from "@/Utils/getData/getOrder";
import TableAllOrder from "@/app/components/dashboardPage/TableAllOrder";
import Pagination from "@/app/components//dashboardPage/Pagination";

// images
import empty from "@/public/image/empty.png";
import Image from "next/image";
import EmptyView from "@/app/components/CoursesPage/EmptyView";

const pageOrder = async ({ searchParams }) => {
  //   const search = searchParams?.search || "";
  const page = searchParams?.page || 1;
  const process = searchParams?.process || "all";

  const { allOrders, count } = await getOrder(page, process);
  // console.log("allVideos:", allVideos);
  return (
    // <p>product..</p>
    <div className="w-full font-bodyFont">
      <div className=" bg-white  rounded-md">
        <div className="flex justify-between  items-start">
          <h2 className=" font-TitleFont text-2xl p-2 font-medium">الطلبات</h2>
        </div>
        <div className="flex justify-between">
          <div className="w-full mx-2 flex justify-between items-center mb-4 ">
            <Pagination count={count} />
          </div>
        </div>
        <div className="w-full">
          {allOrders?.length > 0 ? (
            <TableAllOrder data={allOrders} />
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

export default pageOrder;
