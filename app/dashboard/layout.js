import Sidebar from "@/app/UiComponents/Ui/Sidebar";

export default function dashboardLayout({ children }) {
  return (
    <>
      <section className="py-2 sm:py-2  bg-blue-100 mt-28 bg-purple">
        <div className=" max-w-screen-xl mx-auto px-2">
          <h1 className="text-bold text-lightBlue text-2xl font-fontTitle text-blue-900 py-2 ">
            لوحة التحكم - Falcun -
          </h1>
        </div>
      </section>

      <section className=" font-fontTitle">
        <div className=" max-w-screen-xl mx-auto ">
          <div className="flex flex-col md:flex-row ">
            <Sidebar />
            <main className="grow p-2 ">
              <div className="">{children}</div>
            </main>
          </div>
        </div>
      </section>
    </>
  );
}
