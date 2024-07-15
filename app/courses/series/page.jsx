import { getSeries } from "@/Utils/getData/getSeries";
import DisplaySeries from "@/app/components/CoursesPage/SeriePage/DisplaySeries";
import Pagination from "@/app/components/dashboardPage/Pagination";
import EmptyView from "@/app/components/CoursesPage/EmptyView";

const page = async ({ searchParams }) => {
  const page = searchParams?.page || 1;

  const { allSeries, count } = await getSeries(page);
  return (
    <div className="w-full">
      <div className="my-2 flex justify-end items-center">
        <Pagination count={count} />
      </div>
      <div className="w-full">
        {allSeries?.length > 0 ? (
          <DisplaySeries data={allSeries} />
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
