import Link from "next/link";
import { getVideo } from "@/Utils/getData/getVideo";
import TableAllVideo from "@/app/components/dashboardPage/TableAllVideo";
import SelectLevel from "@/app/components/dashboardPage/SelectLevel";
import SelectSeason from "@/app/components/dashboardPage/SelectSeason";
import Pagination from "@/app/components//dashboardPage/Pagination";

// images
import empty from "@/public/image/empty.png";
import Image from "next/image";
import EmptyView from "@/app/components/CoursesPage/EmptyView";

const pageVideo = async ({ searchParams }) => {
  //   const search = searchParams?.search || "";
  const page = searchParams?.page || 1;
  const levels = searchParams?.level || "all";
  const season = searchParams?.season || "all";

  const { allVideos, count } = await getVideo(page, levels, season);
  // console.log("allVideos:", allVideos);
  return (
    // <p>product..</p>
    <div className="w-full font-bodyFont">
      <div className=" bg-white  rounded-md">
        <div className="flex justify-between  items-start">
          <h2 className=" font-TitleFont text-2xl p-2 font-medium">
            الفيديوهات التعليمية
          </h2>
        </div>
        <div className="flex justify-between">
          <div className="w-full mx-2 flex justify-between items-center mb-4 ">
            <SelectSeason />
            <SelectLevel />

            {/* <CategorySelect /> */}
            {/* <div className="mr-4 grow">
              <SearchComponent />
            </div> */}
            <Pagination count={count} />
            <div className="w-full flex justify-end ">
              <Link href="/dashboard/video/addVideo">
                <button className="font-TitleFont mx-2 text-sm font-medium py-2 px-4 rounded-md rounded-bl-md  bg-green-300 text-primeColor hover:text-lightText hover:bg-primeColor">
                  إضافة فيديو
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full">
          {allVideos?.length > 0 ? (
            <TableAllVideo data={allVideos} />
          ) : (
            <>
              <div className="w-full flex justify-center items-center">
                {/* <Image width={320} height={180} src={empty} alt="No Video" /> */}
                <EmptyView />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default pageVideo;
