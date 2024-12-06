export const getBlogById = async (id) => {
  try {
    const res = await fetch(`${process.env.GLOBAL_URL}/api/blog/${id}`, {
      method: "GET",
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

export const getBlogs = async () => {
  try {
    const res = await fetch(`${process.env.GLOBAL_URL}/api/blog`, {
      method: "GET",
      cache: "no-store",
    });

    const data = await res.json();

    return data;
  } catch (e) {
    console.log(e);
  }
};
