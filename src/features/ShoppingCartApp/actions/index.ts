import {
  Product,
  ADD_ITEM,
  REMOVE_ITEM,
  ShoppingCartActionType,
} from "./types";

// TypeScript infers that this function is returning SendMessageAction
export function addItem(product: Product): ShoppingCartActionType {
  return {
    type: ADD_ITEM,
    product: product,
  };
}

// TypeScript infers that this function is returning DeleteMessageAction
export function removeItem(id: string): ShoppingCartActionType {
  return {
    type: REMOVE_ITEM,
    id: id,
  };
}
