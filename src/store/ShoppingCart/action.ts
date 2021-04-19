import {
  ADD_ITEM,
  REMOVE_ITEM,
  ADD_SUB_ITEM,
  FETCH_PRODUCTS,
  SET_PRODUCTS,
  ShoppingCartActionType
} from "@types";
import { Product, AddedProducts } from "store/ShoppingCart/reducer";

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

export function fetchProducts(
  page: number,
  count: number
): ShoppingCartActionType {
  return {
    type: FETCH_PRODUCTS,
    page,
    count
  };
}

export function addOrSubItem(
  id: string,
  quantity: number
): ShoppingCartActionType {
  return {
    type: ADD_SUB_ITEM,
    id,
    quantity
  };
}

export function setProducts(
  products: Product[],
  isFetching: boolean,
  total: number
): ShoppingCartActionType {
  return {
    type: SET_PRODUCTS,
    products,
    isFetching,
    total
  };
}
