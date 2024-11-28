// image
import women from "@/public/service/Uniforms/caty/women.png";
import uniform from "@/public/service/Uniforms/caty/uni.png";
import shonte from "@/public/service/Uniforms/caty/shonte.png";
import man from "@/public/service/Uniforms/caty/man.png";
import kok from "@/public/service/Uniforms/caty/kok.png";
import dr from "@/public/service/Uniforms/caty/dr.png";
import dosser from "@/public/service/Uniforms/caty/dosser.png";
import coissin from "@/public/service/Uniforms/caty/coissin.png";
import costim from "@/public/service/Uniforms/caty/costim.png";
import compl from "@/public/service/Uniforms/caty/compl.png";
///////////////
import cas from "@/public/service/Embroidery/caty/cas.png";
import shos from "@/public/service/Embroidery/caty/shos.png";
import tsh from "@/public/service/Embroidery/caty/t-sh.png";
import tshert from "@/public/service/Embroidery/caty/t-shet.png";
//////////////
import bero from "@/public/service/Printing/caty/bero.png";
import cado from "@/public/service/Printing/caty/cado.png";
import serv from "@/public/service/Printing/caty/serv.png";
import staf from "@/public/service/Printing/caty/staf.png";
import tshe from "@/public/service/Printing/caty/tsh.png";

const dataUniforms = [
  {
    id: 1,
    titel: "ملابس ورشات",
    prix: "160",
    imgSrc: compl,
    imgList: [compl, compl, compl, compl],
    desc: "نسعى جاهدين لتقديم منتجات لا تفي فقط بتوقعاتكم بل تتجاوزها ، سواء كنتم تبحثون عن ملابس رسمية للشركات تُبرز العلامة التجارية أو مواد ترويجية تترك انطباعًا لا يُنسى ، فإن فالكون هنا لدعم رحلتكم في بناء العلامة التجارية .ننتظر تواصلكم لتكتشفوا كيف يمكن لفالكون أن يسهم في تعزيز صورتكم المهنية والتميز في السوق.",
    catygory: "Uniforms",
  },
  {
    id: 2,
    titel: "سترات الورشات",
    prix: "200",
    imgSrc: shonte,
    catygory: "Uniforms",
  },
  {
    id: 3,
    titel: "أزياء طبية ",
    prix: "280",
    imgSrc: dr,
    catygory: "Uniforms",
  },
  {
    id: 4,
    titel: "لباس مطاعم",
    prix: "120",
    imgSrc: coissin,
    catygory: "Uniforms",
  },
  {
    id: 5,
    titel: "سترات العمال",
    prix: "80",
    imgSrc: dosser,
    catygory: "Uniforms",
  },
  {
    id: 6,
    titel: "ألبسة خاصة ",
    prix: "175",
    imgSrc: uniform,
    catygory: "Uniforms",
  },
  {
    id: 7,
    titel: "بدلات رسمية",
    prix: "320",
    imgSrc: costim,
    catygory: "Uniforms",
  },
  { id: 8, titel: "عاملات ", prix: "180", imgSrc: women, catygory: "Uniforms" },
  { id: 9, titel: "لباس عمال", prix: "150", imgSrc: man, catygory: "Uniforms" },
  {
    id: 10,
    titel: "مطاعم خاصة",
    prix: "150",
    imgSrc: kok,
    catygory: "Uniforms",
  },
];

const dataEmbroidery = [
  { titel: "قبعات", prix: "160", imgSrc: cas, catygory: "Embroidery" },
  { titel: "أحذية", prix: "200", imgSrc: shos, catygory: "Embroidery" },
  { titel: "ملابس مهنية", prix: "280", imgSrc: tsh, catygory: "Embroidery" },
  {
    titel: "مختلف الملابس",
    prix: "120",
    imgSrc: tshert,
    catygory: "Embroidery",
  },
];

const dataPrinting = [
  { titel: "منتجات مكتبية", prix: "160", imgSrc: bero, catygory: "Printing" },
  { titel: "هدايا تذكارية", prix: "200", imgSrc: cado, catygory: "Printing" },
  { titel: "معدات وأدوات", prix: "280", imgSrc: staf, catygory: "Printing" },
  { titel: "ملابس وأزياء", prix: "120", imgSrc: tshe, catygory: "Printing" },
  { titel: "أواني منزلية", prix: "120", imgSrc: serv, catygory: "Printing" },
];

export { dataUniforms, dataEmbroidery, dataPrinting };
