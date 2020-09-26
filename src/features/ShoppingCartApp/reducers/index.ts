import {
  ProductState,
  ShoppingCartActionType,
  ADD_ITEM,
  REMOVE_ITEM,
} from "../actions/types";

const initialState: ProductState = {
  products: [],
  addedProducts: [],
};

export default function (
  state = initialState,
  action: ShoppingCartActionType
): ProductState {
  switch (action.type) {
    case ADD_ITEM:
      var newProduct = [...state.addedProducts];
      newProduct.push(action.product);
      return {
        ...state,
        addedProducts: newProduct,
      };
    case REMOVE_ITEM:
      var addedProducts = [...state.addedProducts].filter(
        (e) => e.id !== action.id
      );
      return {
        ...state,
        addedProducts: addedProducts,
      };
    default:
      return state;
  }
}
