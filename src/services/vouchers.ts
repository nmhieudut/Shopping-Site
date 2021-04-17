import voucherClient from "api/vouchers";

const getAll = async () => {
  try {
    const res = await voucherClient.get("");
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export { getAll };
