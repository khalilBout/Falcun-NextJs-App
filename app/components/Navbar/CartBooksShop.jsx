"use client";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
import ItemCard from "@/app/components/Navbar/ItemCard";
import Image from "next/image";
// import { emptyCart } from "@/public/image/empty.webp";

const CartBooksShop = () => {
  const [showCard, setShowCard] = useState(false);
  const cart = useSelector((state) => state.Cart.cartBooks);

  return (
    <>
      <div>
        <button
          className="relative cursor-pointer "
          onClick={() => setShowCard(!showCard)}
        >
          <FaShoppingCart size={18} className="text-thirdColor" />
          <span className="absolute font-titleFont top-3 -right-2 text-xs w-4 h-4 flex items-center justify-center rounded-full bg-primeColor text-white">
            {cart.length}
          </span>
          {/* card box */}
          {showCard && (
            <motion.ul
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="absolute top-12 left-2  z-50 bg-gray-50 w-[320px] text-[#767676] h-auto px-2 pb-2"
            >
              {cart.length > 0 ? (
                <>
                  {cart.map((item, index) => (
                    <ItemCard key={index} item={item} />
                  ))}
                  <div className=" my-1 w-full h-[35px]">
                    <Link href="/checkout" onClick={() => setShowCard(false)}>
                      <button className=" w-full  bg-scendColor rounded-md cursor-pointer hover:bg-black active:bg-gray-900 px-8 py-2 font-TitleFont font-semibold text-lg text-gray-200 hover:text-white duration-300">
                        تأكيد الشراء
                      </button>
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  <div className="my-4 flex flex-col items-center justify-center ">
                    {/* <Image
                      className="m-2  bg-slate-300/40"
                      width={200}
                      height={80}
                      src={emptyCart}
                      alt="السلة فارغة "
                    /> */}
                    <h2 className=" bg-slate-200 p-8 rounded-md text-xl font-TitleFont font-semibold text-red-400 text-center my-4">
                      السلة فارغة
                    </h2>
                    <Link href="/courses/books">
                      <button className="  bg-scendColor rounded-md cursor-pointer hover:bg-black active:bg-gray-900 px-8 py-2 font-TitleFont font-semibold text-lg text-gray-200 hover:text-white duration-300">
                        المذكرات المدرسية
                      </button>
                    </Link>
                  </div>
                  {/* <EmptyCard /> */}
                </>
              )}
            </motion.ul>
          )}
        </button>
      </div>
    </>
  );
};

export default CartBooksShop;
