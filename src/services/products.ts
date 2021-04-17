import productClient from "api/products";

const getLists = async (page, count) => {
  try {
    const res = await productClient.get(`?page=${page}&count=${count}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export { getLists };
