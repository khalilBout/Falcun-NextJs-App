"use client";
import Image from "next/image";
import noImg from "@/public/image/empty.png";
import { removeItem, increaseCount, decreaseCount } from "@/redux/CartSlice";
import { useDispatch } from "react-redux";
import { HiOutlineTrash } from "react-icons/hi";

const ItemCard = ({ item }) => {
  const dispatch = useDispatch();
  const { idBook, titleBook, priceBook, bookCover, season, Qt, level } = item;
  return (
    <div className=" relative min-w-[300px] bg-slate-200 m-1">
      <div key={titleBook} className="relative flex rounded-md m-2 p-2 ">
        {/* image box  */}
        <div className="border bg-gray-300 relative w-[90px] h-[120px] rounded-md ">
          <Image
            src={bookCover || noImg}
            fill
            objectFit="cover"
            objectPosition="center"
            alt={titleBook}
          />
        </div>

        <div className="flex flex-col justify-start items-start px-2">
          {/* titel box  */}
          <h2 className="text-[16px] mdl:text-[18px] font-TitleFont font-semibold text-gray-700">
            <a>{titleBook.substring(0, 20)}</a>
          </h2>

          <h2 className="px-2 font-TitleFont text-[15px] font-medium">
            <span className="">الفصل : </span>
            <span className="text-gray-800">
              {season === "season-1" ? "الفصل الأول" : "الفصل الثاني"}
            </span>
          </h2>

          <h2 className="px-2 font-TitleFont text-[15px] font-medium">
            <span className="">المستوى : </span>
            <span className="text-gray-800">{level}</span>
          </h2>

          <h2 className="px-2 font-TitleFont font-medium">
            <span className=" text-[15px]">الكمية : </span>
            <span className=" text-[18px] text-red-900"> {Qt}</span>
          </h2>
          <span className="px-2 font-TitleFont text-[15px]  font-medium">
            <span className="">السعر : </span>
            <span className="text-red-600">
              {priceBook} دينار
              <span className="text-red-600 font-bold text-[18px]">{Qt}</span>
              <span className="text-gray-900 px-1 font-bold ">X</span>
            </span>
          </span>
        </div>
      </div>

      <button
        type="button"
        className="absolute top-2 left-2 font-medium px-1 rounded-md cursor-pointer"
        onClick={() => dispatch(removeItem({ idBook }))}
      >
        <HiOutlineTrash
          size={22}
          className="text-primeColor hover:text-red-500 duration-300 cursor-pointer"
        />
      </button>
      <div className="absolute bottom-6 left-2 font-medium flex flex-col gap-1 ">
        <button
          type="button"
          className="w-[25px] h-[25px] bg-blue-300 text-white cursor-pointer"
          onClick={() => dispatch(decreaseCount({ idBook }))}
        >
          -
        </button>
        <button
          type="button"
          className="w-[25px] h-[25px] bg-blue-300 text-white cursor-pointer"
          onClick={() => dispatch(increaseCount({ idBook }))}
        >
          +
        </button>
      </div>
      <hr className="w-full border-1 my-2" />
    </div>
  );
};

export default ItemCard;
