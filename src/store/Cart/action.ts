import { ShoppingCartActionType } from "@types";
import { AddedProducts } from "store/Cart";
import { ADD_ITEM, REMOVE_ITEM, ADJUST_ITEM } from "constant/actions";

export function addItem(product: AddedProducts): ShoppingCartActionType {
  return {
    type: ADD_ITEM,
    product
  };
}

export function removeItem(id: string): ShoppingCartActionType {
  return {
    type: REMOVE_ITEM,
    id
  };
}

export function adjustItem(
  id: string,
  quantity: number
): ShoppingCartActionType {
  return {
    type: ADJUST_ITEM,
    id,
    quantity
  };
}
