import {
  Products,
  AddedProducts,
  ShoppingCartActionType,
  ADD_ITEM,
  REMOVE_ITEM,
  ADD_SUB_ITEM,
  SET_PRODUCTS
} from "../actions/types";
export interface ProductState {
  isFetching: boolean;
  products: Products[];
  addedProducts: AddedProducts[];
  total: number;
}
const initialState: ProductState = {
  isFetching: false,
  products: [],
  addedProducts: [],
  total: 0
};

export default function shoppingCartReducers(
  state = initialState,
  action: ShoppingCartActionType
): ProductState {
  switch (action.type) {
    case ADD_ITEM:
      let found = [...state.addedProducts].find(
        item => item.id === action.product.id
      );
      if (found) {
        found.quantity++;
        return {
          ...state,
          addedProducts: [...state.addedProducts]
        };
      }
      var newAddedProducts = [...state.addedProducts];
      newAddedProducts.push(action.product);
      return {
        ...state,
        addedProducts: newAddedProducts
      };

    case REMOVE_ITEM:
      var addedProducts = [...state.addedProducts].filter(
        e => e.id !== action.id
      );
      return {
        ...state,
        addedProducts: addedProducts
      };
    case ADD_SUB_ITEM:
      for (let i = 0; i < state.addedProducts.length; i++) {
        if (state.addedProducts[i].id === action.id) {
          state.addedProducts[i].quantity =
            state.addedProducts[i].quantity + action.quantity;
        }
        if (state.addedProducts[i].quantity < 1) {
          var remainingProducts = [...state.addedProducts].filter(
            e => e.id !== state.addedProducts[i].id
          );
          return {
            ...state,
            addedProducts: remainingProducts
          };
        }
      }
      var newProductsList = [...state.addedProducts];
      return {
        ...state,
        addedProducts: newProductsList
      };
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.products,
        isFetching: action.isFetching,
        total: action.total
      };
    default:
      return state;
  }
}
