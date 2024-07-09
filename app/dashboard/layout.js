import Sidebar from "@/app/components/dashboardPage/Sidebar";

export default function dashboardLayout({ children }) {
  return (
    <>
      <section className="py-2 sm:py-2  bg-blue-100">
        <div className="container max-w-screen-xl mx-auto px-2">
          <h1 className="text-bold text-3xl font-TitleFont text-blue-900 py-2 ">
            {" "}
            لوحة التحكم - Bravo -
          </h1>
        </div>
      </section>

      <section className=" font-TitleFont">
        <div className="container max-w-screen-xl mx-auto ">
          <div className="flex flex-col md:flex-row ">
            <Sidebar />
            <main className="grow p-2 ">
              <div className="w-full rounded">{children}</div>
            </main>
          </div>
        </div>
      </section>
    </>
  );
}
