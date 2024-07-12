import Link from "next/link";
import { getlibrarys } from "@/Utils/getData/getlibrarys";
import TableAllLibrys from "@/app/components/dashboardPage/TableAllLibrys";
import Pagination from "@/app/components/dashboardPage/Pagination";

// images
import empty from "@/public/image/empty.png";
import Image from "next/image";

const pageBook = async ({ searchParams }) => {
  const page = searchParams?.page || 1;

  const { allLibrys, count } = await getlibrarys(page);
  // console.log("allBooks:", allBooks);
  return (
    // <p>product..</p>
    <div className="w-full font-bodyFont">
      <div className="p-2 bg-white border border-gray-100 shadow-md shadow-black/5 rounded-md">
        <div className="flex justify-between  items-start">
          <h2 className=" font-TitleFont text-2xl p-2 font-medium">
            المكتبات التي نتعامل معها
          </h2>
        </div>
        <div className="flex justify-between">
          <div className="w-full mx-2 flex justify-between items-center mb-4 ">
            <Pagination count={count} />
            <div className="w-full flex justify-end ">
              <Link href="/dashboard/library/addLib">
                <button className=" font-TitleFont mx-2 text-sm font-medium py-2 px-4 rounded-md rounded-bl-md  bg-green-300 text-primeColor hover:text-lightText hover:bg-primeColor">
                  إضافة مكتبة
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full">
          {allLibrys?.length > 0 ? (
            <TableAllLibrys data={allLibrys} />
          ) : (
            <>
              <div className="w-full flex justify-center items-center">
                <Image width={320} height={180} src={empty} alt="No Video" />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default pageBook;
