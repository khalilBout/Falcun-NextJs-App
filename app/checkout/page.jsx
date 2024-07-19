"use client";
import React, { useState } from "react";
import ItemCard from "@/app/components/Navbar/ItemCard";
import EmptyCard from "@/app/components/CheckoutPage/EmptyCart";
import TotalsCart from "@/app/components/CheckoutPage/TotalsCart";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import { resetBasket } from "@/redux/CartSlice";
import toast from "react-hot-toast";
import FormAddAddress from "@/app/components/CheckoutPage/FormAddAddress";
import FormUpdateAddress from "@/app/components/CheckoutPage/FormUpdateAddress";
import Loading from "@/app/components/Loading/Loading";

const page = () => {
  const session = useSession();
  const cart = useSelector((state) => state.Cart.cartBooks);
  const dispatch = useDispatch();
  const router = useRouter();
  const [addressClient, setAddressClient] = useState(null);
  const [addressClientUpdated, setAddressClientUpdated] = useState("");
  const [loading, setLoading] = useState(false);

  const updateInfo = (e) => {
    e.preventDefault();
    setAddressClientUpdated("update");
  };

  const ShippingExpenses = 1.5;

  const totolPyment = cart.reduce(
    (total, item) => item.priceBook * item.Qt + total,
    ShippingExpenses
  );

  const OrderData = {
    userName: session?.data?.user.name || null,
    email: session?.data?.user.email || null,
    totolPyment: totolPyment,
    shippingAddress: {
      clientName: addressClient?.clientName,
      address: addressClient?.address,
      phone: addressClient?.phone,
    },
    orderItems: cart?.map((item) => ({
      bookID: item.idBook,
      titleBook: item.titleBook,
      bookCover: item.bookCover,
      season: item.season || "",
      level: item.level || "",
      priceBook: item.priceBook,
      Qt: item.Qt,
    })),
  };
  const sendOrder = async () => {
    try {
      setLoading(true);
      // const response = await axios.post("/api/order", OrderData);
      const response = await fetch("/api/order", {
        method: "POST",
        body: JSON.stringify(OrderData),
      });

      if (response.status === 201) {
        dispatch(resetBasket());
        toast.success("تم إضافة طلبك ..");
        router.push("/");
      }
    } catch (e) {
      toast.error(e, "أسف لم يتم إضافة طلبك ...");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <div className="w-full h-[70vh] flex justify-center items-center">
          <Loading />
        </div>
      ) : (
        <div className="max-w-container mx-auto px-4 font-TitleFont">
          {cart?.length > 0 ? (
            <>
              <div className="mdl:flex gap-2">
                <div className="w-full mdl:w-1/2 pb-8 ">
                  <div className="mt-5 flex flex-wrap justify-center gap-2">
                    {cart?.map((item, ind) => (
                      <div className="" key={ind}>
                        <ItemCard item={item} />
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-end ml-8">
                    <button
                      // onClick={clearCart}
                      onClick={() => {
                        dispatch(resetBasket());
                        toast.success("السلة فارغة الأن ");
                      }}
                      className="my-2 py-2 px-10 bg-red-500 text-white font-semibold uppercase mb-4 hover:bg-red-700 duration-300"
                    >
                      مسح محتوى السلة
                    </button>
                  </div>
                  {/* Totals Cart  */}
                  <TotalsCart />
                </div>
                {/* user info  */}

                {/* Info Address  */}
                <div className="w-full mdl:w-1/2 mt-4">
                  <div className="">
                    {session.status === "loading" && <p>loading...</p>}
                    {session.status === "authenticated" && (
                      <>
                        <p className="text-[18px] sm:text-[22px] font-TitleFont">
                          مرحبا{" "}
                          <span className="text-[red]">
                            {session?.data?.user.name}
                          </span>
                          , في Bravo .
                        </p>
                      </>
                    )}
                    {session.status === "unauthenticated" && (
                      <div className="flex justify-between items-center bg-red-50 px-4 py-2">
                        <h2 className="text-[15px] mdl:xl">
                          مرحبا عزيز الطالب يمكن تسجيل الدخول من هنا{" "}
                        </h2>
                        <Link
                          href="/login"
                          className="bg-green-100 px-2 py-1 text-[14px] text-center rounded-lg cursor-pointer hover:bg-green-300 duration-300"
                        >
                          تسجيل الدخول
                        </Link>
                      </div>
                    )}
                  </div>
                  {addressClient === null && addressClientUpdated === "" && (
                    <FormAddAddress setAddressClient={setAddressClient} />
                  )}

                  {addressClient !== null && addressClientUpdated === "" && (
                    <div>
                      <h2 className="text-red-400 py-4 text-2xl bg-gray-300 my-2 px-1">
                        معلومات الطالب
                      </h2>
                      <h3 className="text-xl mx-2 font-medium font-titleFont">
                        الإسم:
                        <span className="text-gray-600 ml-2 font-titleFont">
                          {addressClient.clientName}
                        </span>
                      </h3>

                      <h3 className="text-xl mx-2 font-medium font-titleFont">
                        رقم الهاتف:
                        <span className="text-gray-600 ml-2 font-titleFont">
                          {addressClient.phone}
                        </span>
                      </h3>

                      <h3 className="text-xl mx-2 font-medium font-titleFont">
                        العنوان:
                        <span className="text-gray-600 ml-2 font-titleFont">
                          {addressClient.address}
                        </span>
                      </h3>
                      <div className="flex justify-end w-full">
                        <button
                          className="bg-green-200 hover:bg-green-400 cursor-pointer px-2 py-1 my-2 rounded-md font-medium font-titleFont"
                          onClick={updateInfo}
                        >
                          تحديث المعلومات
                        </button>
                      </div>
                    </div>
                  )}

                  {addressClient !== null &&
                    addressClientUpdated === "update" && (
                      <FormUpdateAddress
                        addressClient={addressClient}
                        setAddressClient={setAddressClient}
                        setAddressClientUpdated={setAddressClientUpdated}
                      />
                    )}
                </div>
              </div>
              {/* Btn Send Order  */}
              <div className="my-2">
                <button
                  onClick={sendOrder}
                  disabled={!addressClient}
                  className={`${
                    addressClient !== null
                      ? "bg-green-400 hover:bg-green-800 hover:text-white cursor-pointer"
                      : " bg-gray-200 hover:bg-gray-200 text-gray-800"
                  } w-full text-gray-200 text-base font-medium h-10 rounded-md hover:text-white duration-300`}
                >
                  {loading ? <>loading...</> : <>أرسل الطلب </>}
                </button>
              </div>
            </>
          ) : (
            <EmptyCard />
          )}
        </div>
      )}
    </>
  );
};

export default page;
