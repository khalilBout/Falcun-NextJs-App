import TheProduct from "../../UiComponents/Product/TheProduct";
// import { getBookById } from "@/Utils/getData/getBooks";

// for SEO
// export async function generateMetadata({ params }) {
//   const bookDetailsData = await getBookById(params.id);

//   return {
//     title: bookDetailsData.title,
//     description: bookDetailsData.description,
//   };
// }

import compl from "../../../public/service/Uniforms/caty/compl.png";
import man from "../../../public/service/Uniforms/caty/man.png";
import kok from "../../../public/service/Uniforms/caty/kok.png";
import dosser from "../../../public/service/Uniforms/caty/dosser.png";

const dataProduct = {
  id: 1,
  titel: "ملابس ورشات",
  prix: "160",
  imgSrc: compl,
  imgList: [man, kok, dosser],
  desc: "نسعى جاهدين لتقديم منتجات لا تفي فقط بتوقعاتكم بل تتجاوزها ، سواء كنتم تبحثون عن ملابس رسمية للشركات نسعى جاهدين لتقديم منتجات لا تفي فقط بتوقعاتكم بل تتجاوزها ، سواء كنتم تبحثون عن ملابس رسمية للشركات تُبرز تُبرز العلامة التجارية أو مواد ترويجية تترك انطباعًا لا يُنسى ، فإن فالكون هنا لدعم رحلتكم في بناء العلامة التجارية .ننتظر تواصلكم لتكتشفوا كيف يمكن لفالكون أن يسهم في تعزيز صورتكم المهنية والتميز في السوق.",
  catygory: "Uniforms",
};

export default async function OneProduct({ params }) {
  //   const bookDetailsData = await getBookById(params.id);

  // return <BookDetails book={bookDetailsData} />;

  return <TheProduct dataProduct={dataProduct} />;
}
