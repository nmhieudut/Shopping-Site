import { ShoppingCartActionType } from "features/ShoppingCartApp/actions/types";
import productAPI from "services/products";
import * as ActionTypes from "../actions/types";

import { put, takeLatest } from "redux-saga/effects";

function* fetchProducts(action: ShoppingCartActionType) {
  try {
    yield put({
      type: ActionTypes.SET_PRODUCTS,
      products: [],
      isFetching: true,
      total: 0
    });
    const data = yield productAPI.getProducts(action.page, action.count);

    if (data.products.length > 0) {
      yield put({
        type: ActionTypes.SET_PRODUCTS,
        products: data.products.map(product => ({
          id: product._id,
          name: product.name,
          image: product.image,
          price: product.price,
          quantity: 1
        })),
        isFetching: false,
        total: data.total
      });
    } else {
      yield put({
        type: ActionTypes.SET_PRODUCTS,
        products: [],
        isFetching: false,
        total: 0
      });
    }
  } catch (err) {
    console.log("err: ", err);
  }
}

function* watchedSagas() {
  yield takeLatest(ActionTypes.FETCH_PRODUCTS, fetchProducts);
}

export default watchedSagas;
