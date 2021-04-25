import { Product } from "store/Products";
import { FETCH_PRODUCTS, SET_PRODUCTS } from "constant/actions";

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
