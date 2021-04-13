import voucherClient from "axios/vouchers";

const getVouchers = async () => {
  try {
    const res = await voucherClient.get("");
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export { getVouchers };
