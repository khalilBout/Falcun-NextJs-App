import BookDetails from "@/app/components/CoursesPage/BookPage/BookDetails";
import { getBookById } from "@/Utils/getData/getBooks";

// for SEO
// الدالة المسؤولة عن تحسين الموقع في محركات البحث
// export async function generateMetadata({ params }) {
//   const bookDetailsData = await getBookById(params.id);

//   return {
//     title: bookDetailsData.title,
//     description: bookDetailsData.description,
//   };
// }

export default async function TheBook({ params }) {
  const bookDetailsData = await getBookById(params.id);
  console.log("the Book:", bookDetailsData);

  return <BookDetails book={bookDetailsData} />;
}
