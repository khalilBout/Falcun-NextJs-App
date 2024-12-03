export const getProductById = async (id) => {
  try {
    const res = await fetch(`${process.env.GLOBAL_URL}/api/product/${id}`, {
      method: "GET",
      cache: "no-store",
    });

    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getProducts = async () => {
  try {
    const res = await fetch(`${process.env.GLOBAL_URL}/api/product`, {
      method: "GET",
      cache: "no-store",
    });

    const data = await res.json();

    return data;
  } catch (e) {
    console.log(e);
  }
};
