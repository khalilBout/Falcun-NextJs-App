import TheProduct from "../../UiComponents/Product/TheProduct";
import { getProductById } from "@/Utils/getData/getProducts";
import { getProducts } from "@/Utils/getData/getProducts";

// for SEO
export async function generateMetadata({ params }) {
  const dataProduct = await getProductById(params.id);
  return {
    title: dataProduct.title,
    description: dataProduct.description,
  };
}

export default async function OneProduct({ params }) {
  const AllProducts = await getProducts();
  const numAllProduct = AllProducts.length;
  const randomNumber = Math.floor(Math.random() * (numAllProduct - 4)) + 5;
  if (randomNumber > numAllProduct) randomNumber === numAllProduct;
  const maxNumber = randomNumber;
  const LowNumber = maxNumber - 4;

  const reletiveProducts = AllProducts?.slice(LowNumber, maxNumber);

  const dataProduct = await getProductById(params.id);

  return (
    <TheProduct dataProduct={dataProduct} reletiveProducts={reletiveProducts} />
  );
}
