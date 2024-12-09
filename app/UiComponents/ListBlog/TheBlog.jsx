import BoxImg from "../Ui/BoxImg";
import { getProducts } from "@/Utils/getData/getProducts";
import Card from "../Card/Card";

const TheBlog = async ({ dataBlog }) => {
  const dataProduct = await getProducts();

  return (
    <section>
      <div className="screenPadding mt-20 mdl:mt-24 py-8 ">
        {/* images section  */}
        <div className=" w-full p-4 flex justify-center items-center">
          <BoxImg dataProduct={dataBlog} />
        </div>
        {/* info product  */}
        <div className=" my-4 w-full p-4 flex flex-col gap-3 justify-center items-center ">
          <div className=" w-full">
            <h1 className=" font-fontTitle text-2xl mdl:text-3xl ">
              {dataBlog.title}
            </h1>
          </div>

          <div className="">
            <h3 className=" font-fontBody text-[15px] mdl:text-[17px]  mdl:pr-16 max-md:text-justify">
              {dataBlog.description}
            </h3>
          </div>
        </div>
      </div>

      <div className="screenPadding bg-gray/30 py-8">
        <h1 className="text-2xl mdl:text-4xl font-fontTitle py-4">
          منتجات ذات صلة :
        </h1>
        <div className="flex justify-center items-center gap-4 flex-wrap">
          {dataProduct?.slice(0, 4).map((elm, ind) => (
            <Card key={ind} data={elm} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TheBlog;
