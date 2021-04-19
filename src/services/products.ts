import productClient from "api/products";

const getLists = async (page, count, query) => {
  try {
    const res = await productClient.get(
      `?page=${page}&count=${count}&q=${query}`
    );
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export { getLists };
