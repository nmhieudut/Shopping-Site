import {
  ProductState,
  ShoppingCartActionType,
  ADD_ITEM,
  REMOVE_ITEM,
} from "../actions/types";

const initialState: ProductState = {
  // products: [],
  addedProducts: [],
};

export default function (
  state = initialState,
  action: ShoppingCartActionType
): ProductState {
  switch (action.type) {
    case ADD_ITEM:
      var found = [...state.addedProducts].find(
        (item) => item.id === action.product.id
      );
      if (found) {
        found.quantity++;
        return {
          ...state,
          addedProducts: [...state.addedProducts],
        };
      }
      var newAddedProducts = [...state.addedProducts];
      newAddedProducts.push(action.product);
      return {
        ...state,
        addedProducts: newAddedProducts,
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
