"use clinet";
import { useSelector } from "react-redux";

const TotalsCart = () => {
  const cart = useSelector((state) => state.Cart.cartBooks);

  const priceList = cart?.map((x) => x.priceBook);
  const totalPrice = priceList?.reduce((a, c) => a + c, 0);
  const shippingCharge = 0;

  return (
    <div className="max-w-7xl gap-4 flex justify-center mt-2">
      <div className="w-80 flex flex-col gap-4">
        <h1 className="text-2xl font-semibold ">إجمالي المصاريف :</h1>
        <div>
          <p className="flex items-center justify-between border-[1px] border-gray-400 border-b-0 py-1.5 text-lg px-4 font-medium">
            سعر المذكرات
            <span className="font-semibold tracking-wide font-titleFont">
              {totalPrice} دينار
            </span>
          </p>
          <p className="flex items-center justify-between border-[1px] border-gray-400 border-b-0 py-1.5 text-lg px-4 font-medium">
            مصاريف الشحن
            <span className="font-semibold tracking-wide font-titleFont">
              {shippingCharge} دينار
            </span>
          </p>
          <p className="flex items-center justify-between border-[1px] border-gray-400 py-1.5 text-lg px-4 font-medium">
            المجموع
            <span className="font-bold tracking-wide text-lg font-titleFont">
              {totalPrice + shippingCharge} دينار
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TotalsCart;
