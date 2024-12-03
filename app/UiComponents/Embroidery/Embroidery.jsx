import Card from "@/app/UiComponents/Card/Card";

const Embroidery = async () => {
  let DataEmbroidery;
  try {
    const res = await fetch(`${process.env.GLOBAL_URL}/api/product`);
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    DataEmbroidery = await res.json();
  } catch (error) {
    console.error("Fetch error:", error);
  }
  const DisplayData = DataEmbroidery?.filter(
    (elm) => elm.category === "Embroidery"
  );

  return (
    <section
      id="embroidery"
      className="lg:screenPadding flex flex-col lg:flex-row "
    >
      {/* cart dev  */}
      <div className=" py-12 lg:w-4/5 flex justify-center gap-4 flex-wrap ">
        {DisplayData?.map((elm, ind) => {
          return <Card key={ind} data={elm} />;
        })}
      </div>

      {/* info dev  */}
      <div className="min-w-[260px] lg:my-12 px-2 lg:px-4 w-full lg:w-1/5 lg:mt-28 bg-purple text-white lg:rounded-2xl max-h-[360px]">
        {/* text dev  */}
        <div className="py-12 flex flex-col items-center justify-center gap-4 ">
          <h1 className="font-fontTitle text-2xl">التطريز المباشر</h1>
          <h2 className="font-fontBody text-[14px] sm:text-[15px] text-center max-w-[480px]">
            يتضمن التطريز خياطة التصاميم على القماش بخيوط، مما يجعله مثاليًا
            لإضافة لمسة احترافية ومتينة إلى الملابس والقبعات والإكسسوارات
            المخصصة.
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

export default Embroidery;
