import { ProductActionType, SET_PRODUCTS } from "@types";
export interface Product {
  id: string;
  name: string;
  image: string;
  price: string;
  star: number;
  quantity: number;
}

export interface ProductState {
  isFetching: boolean;
  hasSearched: boolean;
  products: Product[];
  total: number;
}

const initialState: ProductState = {
  isFetching: false,
  hasSearched: false,
  products: [],
  total: -1
};

export default function productsReducers(
  state = initialState,
  action: ProductActionType
): ProductState {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.products,
        isFetching: action.isFetching,
        total: action.total,
        hasSearched: action.hasSearched
      };
    default:
      return state;
  }
}
