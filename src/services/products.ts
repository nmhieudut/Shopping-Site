import productClient from "axios/products";

const getProducts = async (page, count) => {
  try {
    const res = await productClient.get(`?page=${page}&count=${count}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export { getProducts };
