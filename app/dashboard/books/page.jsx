import Link from "next/link";
import { getBooks } from "@/Utils/getData/getBooks";
import TableAllBooks from "@/app/components/dashboardPage/TableAllBooks";
import SelectLevel from "@/app/components/dashboardPage/SelectLevel";
import SelectSeason from "@/app/components/dashboardPage/SelectSeason";
import Pagination from "@/app/components/dashboardPage/Pagination";
import EmptyView from "@/app/components/CoursesPage/EmptyView";

const pageBook = async ({ searchParams }) => {
  //   const search = searchParams?.search || "";
  const page = searchParams?.page || 1;
  const levels = searchParams?.level || "all";
  const season = searchParams?.season || "all";

  const { allBooks, count } = await getBooks(page, levels, season);
  // console.log("allBooks:", allBooks);
  return (
    // <p>product..</p>
    <div className="w-full font-bodyFont">
      <div className="p-2 bg-white border border-gray-100 shadow-md shadow-black/5 rounded-md">
        <div className="flex justify-between  items-start">
          <h2 className=" font-TitleFont text-2xl p-2 font-medium">
            المذكرات المدرسية
          </h2>
        </div>
        <div className="flex justify-between">
          <div className="w-full mx-2 flex justify-between items-center mb-4 ">
            <SelectSeason />
            <SelectLevel />
            <Pagination count={count} />
            <div className="w-full flex justify-end ">
              <Link href="/dashboard/books/addBook">
                <button className=" font-TitleFont mx-2 text-sm font-medium py-2 px-4 rounded-md rounded-bl-md  bg-green-300 text-primeColor hover:text-lightText hover:bg-primeColor">
                  إضافة مذكرة
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full">
          {allBooks?.length > 0 ? (
            <TableAllBooks data={allBooks} />
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

export default pageBook;
