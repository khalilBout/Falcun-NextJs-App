// const API_URL = process.env.GLOBAL_URL || "http://localhost:3000";

// export const getBlogById = async (id) => {
//   try {
//     const res = await fetch(`${API_URL}/api/blog/${id}`, {
//       method: "GET",
//       // cache: "no-store",
//     });
//     if (!res.ok) {
//       throw new Error(`HTTP error! status: ${res.status}`);
//     }
//     const data = await res.json();
//     return data;
//   } catch (e) {
//     console.log(e);
//   }
// };

// export const getBlogs = async () => {
//   try {
//     const res = await fetch(`${API_URL}/api/blog`, {
//       method: "GET",
//       // cache: "no-store",
//     });

//     const data = await res.json();

//     return data;
//   } catch (e) {
//     console.log(e);
//   }
// };

import Blog from "@/models/blog";
import connectDB from "@/Utils/connectDB";

export const getBlogs = async () => {
  try {
    await connectDB();
    const allBlog = await Blog.find();
    const AllBlogs = JSON.parse(JSON.stringify(allBlog));
    // console.error("THE blog:", AllBlogs);

    return { AllBlogs };
  } catch (err) {
    console.error("Error fetching blogs:", err);
    throw new Error("Error fetching blogs");
  }
};

export const getBlogById = async (id) => {
  try {
    await connectDB();
    const TheBlog = await Blog.findById(id);
    const blogData = JSON.parse(JSON.stringify(TheBlog));

    // console.error("THE blog:", blogData);

    return { blogData };
  } catch (err) {
    console.error("Error fetching blog:", err);
    throw new Error("Error fetching blog");
  }
};
