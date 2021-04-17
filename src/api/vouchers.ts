import axios from "axios";

const voucherClient = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL + "/api/vouchers/",
  timeout: 2000
});

export default voucherClient;
