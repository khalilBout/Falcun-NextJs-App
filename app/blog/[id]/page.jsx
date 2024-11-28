import TheBlog from "../../UiComponents/Blog/TheBlog";
// import { getBookById } from "@/Utils/getData/getBooks";

// for SEO
// export async function generateMetadata({ params }) {
//   const bookDetailsData = await getBookById(params.id);

//   return {
//     title: bookDetailsData.title,
//     description: bookDetailsData.description,
//   };
// }

import mainImg from "../../../public/blog/mainImg.png";
import blog1 from "../../../public/blog/blog1.png";
import blog2 from "../../../public/blog/blog2.png";

const dataBlog = {
  id: 1,
  title: "ملابس ورشات",
  imgSrc: mainImg,
  imgList: [blog1, blog2],
  desc: "تعتبر مهنة الطهي المنزلي من المهن الشاقة والهامة، وتستحق العاملات في هذا المجال كل التقدير والاحترام. ومن بين الأمور التي تساهم في الارتقاء بهذه المهنة وتوفير بيئة عمل أكثر احترافية، هو اعتماد زي موحد للعاملات. وفي هذا المقال، سنتحدث عن أهمية الزي الموحد للعاملات في مجال الطهي المنزلي، وكيف يساهم مصنع خيال في توفير خيارات متنوعة وعالية الجودة من هذا الزي.",
};

export default async function OneBloge({ params }) {
  //   const bookDetailsData = await getBookById(params.id);

  // return <BookDetails book={bookDetailsData} />;

  return <TheBlog dataBlog={dataBlog} />;
}
