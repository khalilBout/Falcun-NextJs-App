import Card from "@/app/UiComponents/Card/Card";

const Printing = async () => {
  let DataPrinting;
  try {
    const res = await fetch(`${process.env.GLOBAL_URL}/api/product`);
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
          <div className="flex gap-2">
            <button className="hover:scale-110 px-4 py-1 bg-blue font-fontBody text-[13px] sm:text-[15px] hover:text-gray duration-150 transition-all cursor-pointer rounded-full ">
              إكتشف المزيد
            </button>
            {/* <button className="hover:scale-110 px-2 py-1 bg-gray text-blue font-fontBody text-[15px] duration-150 transition-all cursor-pointer rounded-full ">
              تواصل معنا
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Printing;
