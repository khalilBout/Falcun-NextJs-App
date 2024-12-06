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
  const reletiveProducts = AllProducts.slice(0, 4);

  const dataProduct = await getProductById(params.id);

  return (
    <TheProduct dataProduct={dataProduct} reletiveProducts={reletiveProducts} />
  );
}
