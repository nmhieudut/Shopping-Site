import axios from "axios";
console.log("Calling from server: ", process.env.REACT_APP_SERVER_URL);

const productClient = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL + "/api/products/",
  timeout: 2000
});

export default productClient;
