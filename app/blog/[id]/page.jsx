import TheBlog from "@/app/UiComponents/ListBlog/TheBlog";
import { getBlogById } from "@/Utils/getData/getBlogs";

// for SEO
export async function generateMetadata({ params }) {
  const blogData = await getBlogById(params.id);
  return {
    title: blogData.title,
    description: blogData.description,
  };
}

export default async function OneBloge({ params }) {
  const blogData = await getBlogById(params.id);
  return <TheBlog dataBlog={blogData} />;
}
