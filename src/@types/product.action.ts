import { Product } from "store/Products";
export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const SET_PRODUCTS = "SET_PRODUCTS";

export interface FetchProductsAction {
  type: typeof FETCH_PRODUCTS;
  page: number;
  count: number;
  q: string;
}

export interface SetProductsAction {
  type: typeof SET_PRODUCTS;
  products: Product[];
  isFetching: boolean;
  total: number;
  hasSearched: boolean;
}

export type ProductActionType = FetchProductsAction | SetProductsAction;
