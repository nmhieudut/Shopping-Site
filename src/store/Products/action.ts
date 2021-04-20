import { ProductActionType, FETCH_PRODUCTS, SET_PRODUCTS } from "@types";
import { Product } from "./reducer";
export function fetchProducts(
  page: number,
  count: number,
  q: string
): ProductActionType {
  return {
    type: FETCH_PRODUCTS,
    page,
    count,
    q
  };
}

export function setProducts(
  products: Product[],
  isFetching: boolean,
  total: number,
  hasSearched: boolean
): ProductActionType {
  return {
    type: SET_PRODUCTS,
    products,
    isFetching,
    total,
    hasSearched
  };
}
