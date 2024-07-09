import Link from "next/link";
import { getLevels } from "@/Utils/getData/getLevels";
import LevelsTable from "@/app/components/dashboardPage/Levels/LevelsTable";

// images
import empty from "@/public/image/empty.png";
import Image from "next/image";

const pageLevel = async () => {
  const { allLevels } = await getLevels();

  return (
    <div className="w-full font-bodyFont">
      <div className="p-2 bg-white border border-gray-100 shadow-md shadow-black/5 rounded-md">
        <div className="flex justify-between  items-start">
          <h2 className=" font-TitleFont text-2xl p-2 font-medium">
            المستويات
          </h2>
        </div>
        <div className="flex justify-between">
          <div className="w-full mx-2 flex justify-between items-center mb-4 ">
            <div className="w-full flex justify-end ">
              <Link href="/dashboard/levels/addLevel">
                <button className=" font-TitleFont mx-2 text-sm font-medium py-2 px-4 rounded-md rounded-bl-md  bg-green-300 text-primeColor hover:text-lightText hover:bg-primeColor">
                  إضافة صف
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full">
          {allLevels?.length > 0 ? (
            <LevelsTable allLevels={allLevels} />
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

export default pageLevel;
