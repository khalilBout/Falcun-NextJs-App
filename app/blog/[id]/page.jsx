// import { getBlogById } from "@/Utils/getData/getBlogs";
// import TheBlog from "@/app/UiComponents/ListBlog/TheBlog";

// // for SEO
// export async function generateMetadata({ params }) {
//   const { blogData } = await getBlogById(params.id);

//   return {
//     title: blogData.title,
//     description: blogData.description,
//   };
// }

// export default async function OneBloge({ params }) {
//   const { blogData } = await getBlogById(params.id);
//   return <TheBlog dataBlog={blogData} />;
// }

import { getBlogById } from "@/Utils/getData/getBlogs";
import TheBlog from "@/app/UiComponents/ListBlog/TheBlog";

// SEO Metadata Generation
export async function generateMetadata({ params }) {
  try {
    const { blogData } = await getBlogById(params.id);

    return {
      title: blogData?.title || "Blog Post",
      description: blogData?.description || "Read this insightful blog post.",
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Blog Post",
      description: "An error occurred while fetching blog details.",
    };
  }
}

export default async function BlogPage({ params }) {
  try {
    const { blogData } = await getBlogById(params.id);

    if (!blogData) {
      return (
        <div className="mt-20 text-center">
          <p className="text-xl text-red-500">Blog not found!</p>
        </div>
      );
    }

    return <TheBlog dataBlog={blogData} />;
  } catch (error) {
    console.error("Error fetching blog data:", error);
    return (
      <div className="mt-20 text-center">
        <p className="text-xl text-red-500">
          An error occurred. Please try again later.
        </p>
      </div>
    );
  }
}
