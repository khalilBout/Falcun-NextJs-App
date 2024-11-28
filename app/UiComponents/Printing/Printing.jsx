import Card from "@/app/UiComponents/Card/Card";
import { dataPrinting } from "@/app/UiComponents/data";

// image
import group from "@/public/service/Printing/grp.png";
import Image from "next/image";

const Printing = () => {
  return (
    <section id="embroidery" className=" bg-gray/10 py-10 mdl:py-16">
      {/* info dev  */}
      <div className="screenPadding relative py-8 flex justify-center max-h-[320px] bg-gradient-to-l from-primary to-secondary">
        {/* image dev  */}
        <div className="lg:w-1/2 max-lg:hidden">
          <Image
            src={group}
            alt="Direct Embroidery"
            quality={100}
            className="absolute -bottom-8 right-12 w-[320px] h-auto"
          />
        </div>
        {/* text dev  */}
        <div className="lg:w-1/2 flex flex-col justify-center items-center gap-4">
          <h1 className="font-fontTitle text-2xl">الطباعة الحرارية </h1>
          <h2 className="font-fontBody text-[14px] sm:text-[15px] text-center max-w-[480px]">
            لمسة نهائية حيوية. حيث نعتمد في هذه الخدمة على نقل التصميم بدرجات
            حرارة عالية مما يضمن تفاصيل دقيقة وألوان زاهية على مختلف الأسطح
            والأقمشة ، حسث نقوم من خلال هذه التقنية بطباعة عالية الجودة بالألوان
            الكاملة على أي حجم من المنتجات.{" "}
          </h2>
          <div className="flex gap-2">
            <button className="hover:scale-110 px-2 py-1 bg-red-500 hover:bg-secondary text-white font-fontBody text-[13px] sm:text-[15px] hover:text-gray duration-150 transition-all cursor-pointer rounded-full ">
              إكتشف المزيد
            </button>
            <button className="hover:scale-110 px-2 py-1 bg-gray text-white font-fontBody text-[15px] hover:bg-white hover:text-gray duration-150 transition-all cursor-pointer rounded-full ">
              تواصل معنا
            </button>
          </div>
        </div>
      </div>
      {/* cart dev  */}

      <div className="screenPadding w-full py-8 flex justify-center gap-4 flex-wrap ">
        {dataPrinting.map((elm, ind) => {
          return <Card key={ind} data={elm} />;
        })}
      </div>
    </section>
  );
};

export default Printing;
