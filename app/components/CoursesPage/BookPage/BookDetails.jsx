"use client";
import React from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket } from "@/redux/CartSlice";
import toast from "react-hot-toast";
import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";

const BookDetails = ({ book }) => {
  const cart = useSelector((state) => state.Cart.cartBooks);
  const dispatch = useDispatch();

  const bookToCart = {
    idBook: book._id,
    titleBook: book.title,
    priceBook: book.price,
    imageBook: book.urlBook.url,
    season: book.season,
    TheClass: book.TheClass,
    level: book.levelsInf.levelTitle,
  };

  const handleAddToCart = () => {
    if (cart.length > 0) {
      const itemExist = cart.find((item) => item.idBook === bookToCart.idBook);
      if (itemExist) {
        toast.error("المذكرة موجودة في السلة");
      } else {
        dispatch(addToBasket(bookToCart));
        toast.success("تمت إضافة الكتاب بنجاح ");
      }
    } else {
      dispatch(addToBasket(bookToCart));
      toast.success("تمت إضافة الكتاب بنجاح ");
    }
    // dispatch(addToBasket(itemToCart));
    // toast.success("Successfully Product add..");
  };
  return (
    <div className="p-2 mdl:p-4 w-full flex flex-col mdl:flex-row gap-4 justify-around mdl:item-center ">
      {/* video Player  */}
      <div className="w-full m-2 mdl:w-1/2 h-auto -z-10">
        <div className="w-full max-w-[400px] flex justify-center items-center">
          <Image width={330} height={600} src={book.urlBook.url} />
        </div>
      </div>

      {/* video Info   */}
      <div className="flex flex-col items-start w-full m-2 mdl:w-1/2 mdl:px-4 ">
        {/* text info  */}
        <div className=" text-[16px] mdl:text-[18px]">
          <h2 className="py-2 font-TitleFont ">
            <span className="text-gray-700">عنوان المذكرة : </span>
            <span className="text-gray-900">{book.title}</span>
          </h2>

          {/* <div className="flex justify-around items-center "> */}
          <h2 className="py-1 font-TitleFont text-gray-700">
            <span className="">الفصل : </span>
            {book.season === "season-1" ? (
              <span>الفصل الأول</span>
            ) : (
              <span>الفصل الثاني</span>
            )}
          </h2>
          <h2 className="py-1 font-TitleFont ">
            <span className="text-gray-700">المستوى : </span>
            <span className="text-gray-900">{book.levelsInf.levelTitle}</span>
          </h2>

          <h2 className="py-1 font-TitleFont ">
            <span className="text-gray-700">القسم : </span>
            <span className="text-gray-900">{book.TheClass}</span>
          </h2>

          <div className="py-1 font-TitleFont ">
            <h2 className="text-gray-700">وصف المذكرة : </h2>
            <h2 className="px-4 text-gray-900">{book.description}</h2>
          </div>
          <h2 className="py-2 font-TitleFont ">
            <span className="text-gray-700">سعر المذكرة : </span>
            <span className="text-red-900">{book.price} دينار</span>
          </h2>
        </div>
        {/*Add cart shopping  */}
        <div className="mt-4 float-left flex justify-center items-center py-2 w-[220px] h-[45px] bg-blue-300 rounded-md font-TitleFont font-bold">
          <button
            onClick={handleAddToCart}
            className="w-full h-full cursor-pointer text-center text-[18px] text-red-600"
          >
            أضف إلى السلة{" "}
          </button>
        </div>
        <div className="bg-green-100 mt-3 p-3 rounded-lg ">
          <p className=" text-center font-TitleFont text-[15px] mdl:text-[17px] ">
            {" "}
            عزيزي الطالب يمكنك طلب المذكرة مباشرة من هنا ، كما نعلمك أن هذه
            المذكرات متوفر لدى مجموعة من المكتبات يمكنك الإطلاع عليها من خلال
            الزر ادناه ، أو الإتصال بنا مباشرة على الواتساب{" "}
          </p>
          <div className="flex justify-end items-center gap-4 font-TitleFont text-[18px] font-semibold mt-2">
            <Link
              href="/contact"
              className="font-bold px-4 py-2 bg-blue-300 rounded-lg cursor-pointer text-[16px] "
            >
              المكتبات
            </Link>
            <Link
              href="https://wa.me/96550133774"
              className=" bg-blue-300-20  cursor-pointer text-[15px] font-semibold bg-green-300 hover:bg-green-500 duration-200 p-2 rounded-full"
            >
              {/* <span>whatsapp</span> */}
              <BsWhatsapp
                size={24}
                className="text-black cursor-pointer rounded-full "
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;