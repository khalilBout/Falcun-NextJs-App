import Link from "next/link";
import { getProducts } from "@/Utils/getData/getProducts";
import TableAllProduct from "@/app/UiComponents/Dashboard/TableAllProduct";
// import Pagination from "@/app/components/dashboardPage/Pagination";
import EmptyView from "@/app/UiComponents/Ui/EmptyView";

const pageProductAdmin = async () => {
  //   const page = searchParams?.page || 1;

  const allProduct = await getProducts();
  // console.log("data:", allProduct);
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
        <div className="bg-black h-[1px] w-full"></div>

        <div className="w-full min-h-[350px]">
          {allProduct?.length > 0 ? (
            <TableAllProduct data={allProduct} />
          ) : (
            <>
              <div className="w-full flex justify-center items-center mt-4">
                <EmptyView />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default pageProductAdmin;
