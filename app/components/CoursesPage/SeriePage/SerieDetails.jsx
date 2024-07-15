"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket } from "@/redux/CartSlice";
import toast from "react-hot-toast";
import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";
import GlrySerie from "@/app/components/CoursesPage/SeriePage/GlrySerie";

const SerieDetails = ({ Serie }) => {
  const cart = useSelector((state) => state.Cart.cartBooks);
  const dispatch = useDispatch();
  const [Qt, setQt] = useState(1);

  const decrement = () => {
    if (Qt > 1) {
      setQt((prev) => prev - 1);
    }
  };

  const increment = () => {
    setQt((prev) => prev + 1);
  };

  const bookToCart = {
    idBook: Serie._id,
    titleBook: Serie.title,
    priceBook: Serie.price,
    bookCover: Serie.bookCover.url,
    season: "",
    level: "",
    Qt: Qt,
  };

  const handleAddToCart = () => {
    if (cart.length > 0) {
      const itemExist = cart.find((item) => item.idBook === bookToCart.idBook);
      if (itemExist) {
        alert(
          "لقد قمت بإضافة هذه السلسلة ، إن كنت ترغب في نسخ أكثر يمكن زيادة الكمية عند تأكيد الشراء"
        );
      } else {
        dispatch(addToBasket(bookToCart));
        toast.success("تمت إضافة السلسلة بنجاح ");
      }
    } else {
      dispatch(addToBasket(bookToCart));
      toast.success("تمت إضافة السلسلة بنجاح ");
    }
  };
  return (
    <div className="p-2 mdl:p-4 w-full flex flex-col mdl:flex-row gap-4 justify-around mdl:item-center ">
      {/* video Player  */}
      <GlrySerie Serie={Serie} />

      {/* book Info   */}
      <div className="flex flex-col items-start w-full mdl:w-1/2 mdl:px-4 ">
        {/* text info  */}
        <div className=" text-[18px] mdl:text-[20px] font-bold">
          <h2 className="py-2 font-TitleFont ">
            <span className="text-gray-900">{Serie.title}</span>
          </h2>

          <h2 className="py-1 font-TitleFont ">
            <span className="text-gray-700">عدد الصفحات : </span>
            <span className="text-gray-900">{Serie.numberOfPages} صفحة </span>
          </h2>
          <h2 className="py-1 font-TitleFont ">
            <span className="text-gray-700">السعر : </span>
            <span className="text-red-900">{Serie.price} دينار</span>
          </h2>
          <div className="py-1 font-TitleFont ">
            <h2 className="text-gray-700">محتوى السلسلة : </h2>
            <h2 className="px-4 text-gray-900 max-sml:text-center ">
              {Serie.description}
            </h2>
          </div>
        </div>
        {/*Add cart shopping  */}
        <div className="mt-4 w-full flex justify-between items-center h-[45px]">
          <button
            onClick={handleAddToCart}
            className="h-full px-4 text-center bg-blue-300 rounded-md font-TitleFont font-bold cursor-pointer text-[18px] text-red-600"
          >
            أضف إلى السلة{" "}
          </button>
          <div className="w-[140px] h-full  flex items-center gap-1 ">
            <button
              type="button"
              className="w-[45px] bg-slate-100 h-full text-[18px]  border-black flex justify-center items-center"
              onClick={() => decrement()}
            >
              -
            </button>

            {/* <input
              type="number"
              id="Quantity"
              value={Qt}
              className=" "
            /> */}
            <div className="w-[50px] h-full flex justify-center items-center">
              <span className="h-full w-[45px] font-bold text-center font-bodyFont text-[30px] ">
                {Qt}
              </span>
            </div>

            <button
              type="button"
              className=" w-[45px] bg-slate-100 h-full flex justify-center items-center border-black"
              onClick={
                () => increment()
                // dispatch(
                //   increaseCount({  IdBook })
                // )
              }
            >
              +
            </button>
          </div>
        </div>

        <div className="bg-green-100 mt-3 p-3 rounded-lg ">
          <p className=" text-center font-TitleFont text-[15px] mdl:text-[17px] ">
            {" "}
            عزيزي الطالب يمكنك طلب السلسلة مباشرة من هنا ، كما نعلمك أن هذه
            السلاسل متوفر لدى مجموعة من المكتبات يمكنك الإطلاع عليها من خلال
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

export default SerieDetails;
