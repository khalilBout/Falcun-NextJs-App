import Card from "@/app/UiComponents/Card/Card";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const Printing = async () => {
  let DataPrinting;
  try {
    const res = await fetch(`${baseUrl}/api/product`);
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    DataPrinting = await res.json();
  } catch (error) {
    console.error("Fetch error:", error);
  }
  const DisplayData = DataPrinting?.filter(
    (elm) => elm.category === "Printing"
  );

  return (
    <section
      id="embroidery"
      className="lg:screenPadding flex flex-col lg:flex-row pb-8 "
    >
      {/* cart dev  */}
      <div className=" py-8 lg:w-4/5 flex justify-center gap-4 flex-wrap ">
        {DisplayData?.map((elm, ind) => {
          return <Card key={ind} data={elm} />;
        })}
      </div>

      {/* info dev  */}
      <div className="min-w-[260px] lg:my-12 px-2 lg:px-4 w-full lg:w-1/5 lg:mt-28 bg-purple text-white lg:rounded-2xl max-h-[380px]">
        {/* text dev  */}
        <div className="py-8 flex flex-col items-center gap-4 ">
          <h1 className="font-fontTitle text-2xl">الطباعة الحرارية </h1>
          <h2 className="font-fontBody text-[14px] sm:text-[15px] text-center max-w-[480px]">
            نوفر لعملائنا طباعة حديثة تتفوق في تقديم تصاميم عالية الجودة ونابضة
            بالحياة بفضل تقنيات الطباعة المباشرة (DTF) والطباعة بالأشعة فوق
            البنفسجية (UV DTF) ، هذه التقنيات تضمن نتائج مذهلة على مجموعة واسعة
            من الأسطح ، مما يجعلها مثالية للملابس المخصصة والمواد الترويجية
            والشارات المخصصة.
          </h2>
          <div className="">
            <Link
              href="https://wa.me/213670000320"
              // initial={{ opacity: 0, y: 100 }}
              // whileInView={{ opacity: 1, y: 0 }}
              // transition={{
              //   type: "spring",
              //   stiffness: 100,
              //   damping: 10,
              //   delay: 0.2,
              // }}
              className="bg-lightBlue text-[14px] md:text-[16px] shadow-md flex justify-between items-center gap-2 px-4 mdl:px-8 hover:scale-110 border border-black/30 text-black  duration-150 transition-all cursor-pointer rounded-full "
            >
              <h1 className=" font-fontBody text-[15px] ">تواصل معنا</h1>

              <FaWhatsapp
                size={22}
                className="text-black/70 w-8 h-8 rounded-full p-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Printing;
