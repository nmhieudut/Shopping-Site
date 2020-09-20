import * as ActionTypes from "./type";

export const addToCart = (product: object, quantity: number) => ({
  type: ActionTypes.ADD_TO_CART,
  product: product,
  quantity: quantity,
});

export const removeFromCart = (productId: number) => ({
  type: ActionTypes.REMOVE_FROM_CART,
  productId: productId,
});
export const getProducts = () => ({
  type: ActionTypes.GET_PRODUCTS,
});
