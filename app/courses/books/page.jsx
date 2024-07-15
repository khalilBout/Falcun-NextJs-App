import { getBooks } from "@/Utils/getData/getBooks";
import DisplayBooks from "@/app/components/CoursesPage/BookPage/DisplayBooks";
import SelectLevel from "@/app/components/dashboardPage/SelectLevel";
import SelectSeason from "@/app/components/dashboardPage/SelectSeason";
import Pagination from "@/app/components/dashboardPage/Pagination";
import EmptyView from "@/app/components/CoursesPage/EmptyView";

const page = async ({ searchParams }) => {
  //   const search = searchParams?.search || "";
  const page = searchParams?.page || 1;
  const levels = searchParams?.level || "all";
  const season = searchParams?.season || "all";

  const { allBooks, count } = await getBooks(page, levels, season);
  return (
    <div className="w-full">
      <div className="my-2 flex justify-around items-center">
        <div className="">
          <SelectSeason />
          <SelectLevel />
        </div>
        <Pagination count={count} />
      </div>
      <div className="w-full">
        {allBooks?.length > 0 ? (
          <DisplayBooks data={allBooks} />
        ) : (
          <>
            <div className="w-full flex justify-center items-center">
              <EmptyView />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default page;
