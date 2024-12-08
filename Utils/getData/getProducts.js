const API_URL = process.env.GLOBAL_URL || "http://localhost:3000";

export const getProductById = async (id) => {
  try {
    const res = await fetch(`${API_URL}/api/product/${id}`, {
      method: "GET",
      // cache: "no-store",
    });

    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getProducts = async () => {
  // try {
  //   const res = await fetch(`${process.env.GLOBAL_URL}/api/product`, {
  //     method: "GET",
  //   });

  //   const data = await res.json();

  //   return data;
  // } catch (e) {
  //   console.log(e);
  // }

  try {
    const res = await fetch(`${API_URL}/api/product`, {
      method: "GET",
      // cache: "no-store",
    });
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

// import Product from "@/models/product";
// import connectDB from "@/Utils/connectDB";

// export const getProductById = async (id) => {
//   try {
//     await connectDB();
//     const TheProduct = await Product.findById(id);
//     const blogData = JSON.parse(JSON.stringify(TheProduct));

//     // console.error("THE blog:", blogData);

//     return { blogData };
//   } catch (err) {
//     console.error("Error fetching blog:", err);
//     throw new Error("Error fetching blog");
//   }
// }
