"use client";
import Image from "next/image";
// import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import noImg from "@/public/image/empty.png";
import Link from "next/link";
import { removeItem } from "@/redux/CartSlice";
import { useDispatch } from "react-redux";
import { HiOutlineTrash } from "react-icons/hi";

const ItemCard = ({ item }) => {
  const dispatch = useDispatch();
  const { idBook, titleBook, priceBook, imageBook, season, TheClass, level } =
    item;
  return (
    <div className=" relative min-w-[300px] bg-slate-200 m-1">
      <div key={titleBook} className="relative flex rounded-md m-2 p-2 ">
        {/* image box  */}
        <div className="border bg-gray-300 relative w-[90px] h-[120px] rounded-md ">
          <Image
            src={imageBook || noImg}
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

          <h2 className="px-2 font-TitleFont text-[15px] font-medium">
            <span className="">القسم : </span>
            <span className="text-gray-800"> {TheClass}</span>
          </h2>
          <span className="px-2 font-TitleFont text-[15px]  font-medium">
            <span className="">السعر : </span>
            <span className="text-red-600"> {priceBook} دينار</span>
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
      <hr className="w-full border-1 my-2" />
    </div>
  );
};

export default ItemCard;
