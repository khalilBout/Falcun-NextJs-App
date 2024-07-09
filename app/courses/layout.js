import SidebarCourses from "@/app/components/CoursesPage/SidebarCourses";

export default function dashboardLayout({ children }) {
  return (
    <>
      <section className="">
        <SidebarCourses />
        <main className="screenPadding">
          <div className="py-2 w-full rounded ">{children}</div>
        </main>
      </section>
    </>
  );
}
